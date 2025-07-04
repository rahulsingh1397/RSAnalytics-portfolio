import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from "react-simple-typewriter";

const techStack = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "XGBoost", src: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" },
  { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
];

const duplicatedStack = [...techStack, ...techStack, ...techStack];

export const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.5, 100);
    camera.position.set(0, 1.5, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      "/RSAnalytics-portfolio/models/robotic_eye.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(4, 4, 4);
        model.position.set(0, 0.58, 0.1);

        const textureLoader = new THREE.TextureLoader();
        const testTexture = textureLoader.load("/RSAnalytics-portfolio/models/textures/Light_emissive.png");

        testTexture.wrapS = THREE.RepeatWrapping;
        testTexture.wrapT = THREE.RepeatWrapping;
        testTexture.repeat.set(1, 1);

        model.traverse((child) => {
          if (!child.isMesh) return;

          const materials = Array.isArray(child.material) ? child.material : [child.material];

          if (child.name === "Lens_Low_Poly_0") {
            materials.forEach((mat) => {
              mat.transparent = true;
              mat.opacity = 0.3;
              mat.depthWrite = false;
              mat.metalness = 0.1;
              mat.roughness = 0.05;
              mat.side = THREE.DoubleSide;
              mat.color = new THREE.Color(0x000000);
            });
            return;
          }

          if (child.name === "Light_Low_Poly_0") {
            materials.forEach((mat) => {
              mat.map = testTexture;
              mat.emissiveMap = testTexture;
              mat.emissive = new THREE.Color("#ff0000");
              mat.emissiveIntensity = 9000.0;
              mat.metalness = 1.0;
              mat.roughness = 0.3;
              mat.transparent = true;
              mat.opacity = 1.0;
              mat.side = THREE.DoubleSide;
            });
            return;
          }

          materials.forEach((mat) => {
            switch (mat.name) {
              case "Camera_Plastic":
                mat.color = new THREE.Color("#252525");
                break;
              case "Metal":
                mat.color = new THREE.Color("#dadada");
                break;
              case "Black_Plastic":
                mat.color = new THREE.Color("#3e3e3e");
                break;
              case "Metal.001":
                mat.color = new THREE.Color("#e7e7e7");
                break;
              case "Copper":
                mat.color = new THREE.Color("#fad0c0");
                break;
              case "White_Plastic":
                mat.color = new THREE.Color("#000000");
                break;
              case "BezierCurve.006_0":
                mat.color = new THREE.Color("#ffffff");
                break;
              case "Light":
                mat.emissive = new THREE.Color("#ff0000");
                mat.emissiveIntensity = 3000.0;
                mat.color = new THREE.Color("#ff0000");
                break;
              case "Camera_Lens":
                mat.color = new THREE.Color("#000000");
                mat.opacity = 0.5;
                break;
              case "Camera_Lens.001":
                mat.color = new THREE.Color("#ff0000");
                mat.opacity = 1.0;
                mat.transparent = true;
                break;
              default:
                mat.color = new THREE.Color(0x888ca0);
                mat.emissive = new THREE.Color(0x000000);
                mat.emissiveIntensity = 2000.0;
                mat.map = null;
                mat.metalness = 0.9;
                mat.roughness = 0.2;
                mat.transparent = true;
                mat.opacity = 0.0;
                mat.side = THREE.FrontSide;
                break;
            }
          });
        });

        scene.add(model);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(0, 10, 5);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
    backLight.position.set(0, -5, -5);
    scene.add(backLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2, 100);
    pointLight.position.set(0, 8, 0);
    scene.add(pointLight);

    const spotlight = new THREE.SpotLight(0xffffff, 2, 20, Math.PI / 6, 0.5, 2);
    spotlight.position.set(0, 5, 3);
    spotlight.target.position.set(0, 0.58, 0.1);
    scene.add(spotlight);
    scene.add(spotlight.target);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minDistance = controls.maxDistance = camera.position.length();

    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      const model = scene.children[scene.children.length - 1];
      model.rotation.y = THREE.MathUtils.clamp(mouseX * Math.PI / 2.5, -Math.PI / 2.5, Math.PI / 2.5);
      model.rotation.x = THREE.MathUtils.clamp(-mouseY * Math.PI / 2.5, -Math.PI / 2.5, Math.PI / 2.5);
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    return () => {
      // Store the current value of the ref to avoid the exhaustive deps warning
      const container = containerRef.current;
      window.removeEventListener("mousemove", onMouseMove);
      
      // Check if container still exists before cleaning up
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
      
      renderer.dispose();
      controls.dispose();
    };
  }, []); // Empty deps is appropriate here since this runs once on mount

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-start relative bg-black px-6 text-white">
      <div ref={containerRef} className="w-full h-[500px] flex justify-center items-center" />

      <RevealOnScroll>
        <div className="max-w-4xl text-center relative z-10 mt-[-200px] md:mt+25">
          <h1 className="text-4xl md:text-7xl font-semibold text-gray-300">Hey! I am Rahul Singh</h1>
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-800 to-orange-400 bg-clip-text text-transparent mt-3">
            <Typewriter words={["Data Science", "Machine Learning", "Gen AI"]} loop cursor typeSpeed={90} deleteSpeed={50} delaySpeed={1500} />
          </h2>
          <p className="intro-text text-gray-300 text-lg mt-6 leading-relaxed max-w-4xl mx-auto transition-transform duration-300 flex flex-wrap gap-x-2 gap-y-1 justify-center">
            {`I turn raw data into powerful, actionable insights that fuel innovation through cutting-edge Machine Learning and AI. With a deep passion for predictive modeling, data visualization, and scalable analytics, I design solutions that not only optimize business strategies but also drive growth and competitive advantage.`
              .split(" ")
              .map((word, index) => (
                <span key={index} className="hover:scale-125 transition-transform duration-300 hover:text-orange-400 cursor-default">{word}&nbsp;</span>
              ))}
          </p>

          <div className="flex gap-6 mt-8 justify-center">
            <a href="#projects" className="bg-red-800 hover:bg-orange-400 text-white py-3 px-6 rounded-lg font-semibold text-lg">Projects</a>
            <a href="#contact" className="bg-red-800 hover:bg-orange-400 text-white py-3 px-6 rounded-lg font-semibold text-lg">Connect</a>
          </div>
        </div>
      </RevealOnScroll>

      <div className="w-full overflow-hidden absolute bottom-11">
        <div className="scrolling-container">
          <div className="scrolling-stack">
            {duplicatedStack.map((tech, index) => (
              <div key={index} className="tech-logo flex flex-col items-center relative group">
                <img src={tech.src} alt={tech.name} className="w-20 h-20 object-contain" loading="lazy" />
                <span className="tech-name absolute text-md mt-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrolling-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          width: 180%;
          position: relative;
        }
        .scrolling-stack {
          display: flex;
          gap: 40px;
          animation: scroll 20s linear infinite;
          width: max-content;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tech-logo:hover img {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
        }
        .intro-text:hover {
          transform: scale(1.05);
          text-shadow: 0 0 10px rgba(255, 200, 200, 0.4);
        }
      `}</style>
    </section>
  );
};
