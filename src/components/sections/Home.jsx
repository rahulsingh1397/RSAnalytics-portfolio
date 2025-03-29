import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";

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

  // Random text generator function
  const randomText = () => {
    var text = " ";
    let letters = text[Math.floor(Math.random() * text.length)];
    return letters;
  };

  // Function to generate random color
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Rain function to generate rain drops
  const rain = () => {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 100); // Adjust left position to fit within cloud
    let size = Math.random() * 1.5;
    let duration = Math.random() * 2 + 1; // Adjust the rain speed

    e.innerText = randomText();
    e.style.left = left + 'vw'; // Use viewport width (vw) for left positioning
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDuration = duration + 's';
    e.style.color = randomColor(); // Apply a random color to the drop

    setTimeout(() => {
      cloud.removeChild(e);
    }, duration * 1000); // Adjust timeout to match the duration
  };

  // UseEffect to set interval for rain effect
  useEffect(() => {
    const interval = setInterval(() => {
      rain();
    }, 20); // Adjust this value to control the frequency of rain

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-start relative bg-black px-6 text-white">
      {/* Cloud and Rain animation */}
      <div className="cloud absolute top-0 left-0 w-full h-[200px]">
        {/* This is where the rain will appear */}
      </div>

      <RevealOnScroll>
        <div className="max-w-4xl text-center relative z-10 mt-40">
          {/* Adjusted margin-top (mt-20) for moving elements closer to top */}
          <h1 className="text-4xl md:text-7xl font-semibold text-gray-300">Hey! I am Rahul Singh</h1>
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-800 to-orange-400 bg-clip-text text-transparent mt-3">
            <Typewriter words={["Data Science", "Machine Learning", "Gen AI"]} loop cursor typeSpeed={90} deleteSpeed={50} delaySpeed={1500} />
          </h2>
          <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-4xl mx-auto">
          I turn raw data into powerful, actionable insights that fuel innovation through cutting-edge Machine Learning and AI. 
          With a deep passion for predictive modeling, data visualization, and scalable analytics, 
          I design solutions that not only optimize business strategies but also drive growth and competitive advantage
          </p>
          <div className="flex gap-6 mt-8 justify-center">
            <a href="#projects" className="bg-red-800 hover:bg-orange-400 text-white py-3 px-6 rounded-lg font-semibold text-lg">Projects</a>
            <a href="#contact" className="bg-red-800 hover:bg-orange-400 text-white py-3 px-6 rounded-lg font-semibold text-lg">Connect</a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Tech Stack Scrolling Section */}
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
        .cloud {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200px;
          pointer-events: none;
          z-index: 0;
        }

        .drop {
          position: absolute;
          top: -10px;
          font-family: monospace;
          animation: fall linear infinite;
        }

        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }

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

        .tech-name {
          position: absolute;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .group:hover .tech-name {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};
