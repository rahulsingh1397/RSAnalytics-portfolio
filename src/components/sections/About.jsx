import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const cloudAndDevOps = [
    "AWS (SageMaker, S3, Lambda)",
    "Azure (ML Studio, Data Factory)",
    "Docker",
    "Kubernetes",
    "MLflow",
  ];

  const machineLearningAndAI = [
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "XGBoost",
    "LightGBM",
    "Statsmodels",
  ];

  const bigDataAndETL = [
    "Apache Spark",
    "Hive",
    "Snowflake",
    "Redshift",
    "Apache Airflow",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-black-600 to-blue-0"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-800 to-orange-400 bg-clip-text text-transparent text-center leading-tight tracking-wide">
            About Me
          </h2>

          <div className="rounded-2xl p-8 bg-black/40 border-white/10 border hover:scale-105 transition-all duration-500 ease-in-out shadow-lg">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Passionate data scientist with expertise in building scalable machine learning models, analyzing complex datasets, and developing innovative data-driven solutions to drive business growth and efficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cloud & DevOps Section */}
              <div className="rounded-xl p-6 bg-gray-800/60 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-3">
                  {cloudAndDevOps.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-300/20 text-red-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all duration-300 ease-in-out"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Machine Learning & AI Section */}
              <div className="rounded-xl p-6 bg-gray-800/60 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Machine Learning & AI</h3>
                <div className="flex flex-wrap gap-3">
                  {machineLearningAndAI.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-300/20 text-red-500 py-1 px-4 rounded-full text-sm hover:bg-purple-500/30 hover:shadow-[0_2px_8px_rgba(156,113,226,0.3)] transition-all duration-300 ease-in-out"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Big Data & ETL Section */}
              <div className="rounded-xl p-6 bg-gray-800/60 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Big Data & ETL</h3>
                <div className="flex flex-wrap gap-3">
                  {bigDataAndETL.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-300/20 text-red-500 py-1 px-4 rounded-full text-sm hover:bg-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all duration-300 ease-in-out"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Education Section */}
              <div className="p-6 rounded-xl bg-gray-800/60 border-white/10 border hover:scale-105 transition-all duration-500 ease-in-out shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-white">📚 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> M.S. in Information Systems </strong> - Stevens Institute of Technology (2023)
                  </li>
                  <li>
                    <strong> B.S. in Information Technology </strong> - Mumbai University (2019)
                  </li>
                  <li>
                    Relevant Coursework: Data Analytics, Machine Learning, Cloud Computing, Data Mining, Predictive Modeling, Neural Networks, Transformers
                  </li>
                </ul>
              </div>

              {/* Area of Interest Section */}
              <div className="p-6 rounded-xl bg-gray-800/60 border-white/10 border hover:scale-105 transition-all duration-500 ease-in-out shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-white">💼 Area of Interest</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold text-lg">Generative AI</h4>
                    <p>Leveraging Generative AI to create innovative, data-driven solutions that push the boundaries of creativity and efficiency.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">Machine Learning</h4>
                    <p>Developing predictive models and recommendation systems.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">Data Analytics</h4>
                    <p>Extracting insights from data and creating visualizations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
