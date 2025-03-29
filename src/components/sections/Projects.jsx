import { RevealOnScroll } from "../RevealOnScroll";
import alexaImage from "../../../public/images/alexa-reviews.jpg";
import fineTune from "../../../public/images/fine-tune.jpg.webp";
import twitch from "../../../public/images/Partner.png";
import maljpeg from "../../../public/images/maljpeg.jpeg";
import agenticai from "../../../public/images/agentic.webp" ;  
import chatbot from "../../../public/images/chatbot.jpg" ;           
                 
export const Projects = () => {
  const projects = [
    {
      title: "Twitch Social Network Analytics Dashboard",
      description:
        "A comprehensive dashboard to analyze and visualize Twitch data for marketing insights.",
      techStack: ["Python", "Pandas", "Plotly", "Dash", "Gephy"],
      link: "#",
      image: twitch
    },
    {
      title: "Fine-Tuning BERT for NLP",
      description:
        "Refined a pre-trained BERT model for sentiment analysis, question answering, and text classification.",
      techStack: ["Python", "TensorFlow", "BERT", "GridSearch"],
      link: "#",
      image: fineTune,
    },
    {
      title: "Malicious Image Detection using ML",
      description:
        "A machine learning system designed to detect and classify malicious images used in cyberattacks.",
      techStack: ["Python", "Decision Trees", "XGBoost", "LightGBM"],
      link: "#",
      image: maljpeg,
    },
    {
      title: "Financial Agent - AgenticAI",
      description:
        "An intelligent AI-powered financial advisor providing personalized insights and recommendations.",
      techStack: ["Grok", "LangFlow", "LLM", "OpenAI", "Gen AI"],
      link: "#",
      image: agenticai,
    },
    {
      title: "Amazon Alexa Reviews Analysis",
      description:
        "An NLP-based system to analyze and summarize Amazon Alexa reviews for product feedback.",
      techStack: ["Python", "NLP", "BERT", "Sentiment Analysis"],
      link: "#",
      image: alexaImage,
    },
    {
      title: "Predicting Energy Consumption using ML",
      description:
        "A machine learning model to forecast energy consumption and optimize energy usage in buildings.",
      techStack: ["Python", "Scikit-Learn", "XGBoost", "Time Series"],
      link: "#",
      image: chatbot,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-black-900 to-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-800 to-orange-400 bg-clip-text text-transparent leading-tight tracking-wide text-center animate__animated animate__fadeIn">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl border border-white/10
                           hover:border-blue-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-300
                           flex flex-col transform hover:translateY-4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <h3 className="text-xl font-semibold text-white mb-3 animate__animated animate__fadeInUp animate__delay-1s">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-yellow-300/20 text-red-500 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-center">
                  <a
                    href={project.link}
                    className="text-orange-600 font-medium hover:text-orange-400 transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

