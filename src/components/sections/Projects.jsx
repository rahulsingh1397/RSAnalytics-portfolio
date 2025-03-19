import { RevealOnScroll } from "../RevealOnScroll";
import alexaImage from "E:/RSAnalytics-portfolio-main/public/images/alexa-reviews.jpg";
import fineTune from "E:/RSAnalytics-portfolio-main/public/images/fine-tune.jpg.webp"
import twitch from "E:/RSAnalytics-portfolio-main/public/images/Partner.png"
import maljpeg from "E:/RSAnalytics-portfolio-main/public/images/maljpeg.jpeg"                                 
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
      image: "/images/alexa-reviews.jpg",
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
      title: "AI-Powered Chatbot for Customer Support",
      description:
        "A conversational AI system for real-time customer support and issue resolution.",
      techStack: ["Python", "NLP", "TensorFlow", "DialogFlow", "Chatbot"],
      link: "#",
      image: "public\images\alexa-reviews.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-black-900 to-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight tracking-wide text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10
                           hover:border-blue-500/50 hover:shadow-xl transition-all duration-300
                           flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-400/20 text-pink-400 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-center">
                  <a
                    href={project.link}
                    className="text-blue-600 font-medium hover:text-blue-300 transition"
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
