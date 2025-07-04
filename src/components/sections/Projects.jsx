import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "./ProjectCard"; // ✅ Import the new component

import alexaImage from "../../../public/images/alexa-reviews.jpg";
import fineTune from "../../../public/images/fine-tune.jpg.webp";
import twitch from "../../../public/images/Partner.png";
import maljpeg from "../../../public/images/maljpeg.jpeg";
import agenticai from "../../../public/images/agentic.webp";
import energy from "../../../public/images/energy_consumption.jpeg";
import placeholder from "../../../public/images/placeholder.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Twitch Social Network Analytics Dashboard",
      description:
        "A comprehensive dashboard to analyze and visualize Twitch data for marketing insights.",
      techStack: ["Python", "Pandas", "Plotly", "Dash", "Gephy"],
      link: "#",
      image: twitch,
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
      image: energy,
    },
    {
      title: "Future Project 1",
      description: "Description coming soon...",
      techStack: ["TBD"],
      link: "#",
      image: placeholder,
    },
    {
      title: "Future Project 2",
      description: "Description coming soon...",
      techStack: ["TBD"],
      link: "#",
      image: placeholder,
    },
    {
      title: "Future Project 3",
      description: "Description coming soon...",
      techStack: ["TBD"],
      link: "#",
      image: placeholder,
    },
    {
      title: "Future Project 4",
      description: "Description coming soon...",
      techStack: ["TBD"],
      link: "#",
      image: placeholder,
    },
    {
      title: "Future Project 5",
      description: "Description coming soon...",
      techStack: ["TBD"],
      link: "#",
      image: placeholder,
    },
    {
      title: "Future Project 6",
      description: "Description coming soon...",
      techStack: ["TBD"],
      link: "#",
      image: placeholder,
    },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-br from-black-900 to-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-800 to-orange-400 bg-clip-text text-transparent leading-tight tracking-wide text-center animate__animated animate__fadeIn">
            Featured Projects
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            {/* Pagination Arrows */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-60 rounded-full p-3 hover:bg-opacity-80 transition duration-300 ease-in-out shadow-lg"
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-60 rounded-full p-3 hover:bg-opacity-80 transition duration-300 ease-in-out shadow-lg"
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center justify-center space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentPage === index + 1
                      ? "bg-blue-500"
                      : "bg-gray-500"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
