import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-r from-black-600 to-black-600"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-6 max-w-5xl mx-auto">
          {/* Heading with One-Time Typing Animation */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight tracking-wide">
            <Typewriter
              words={["Rahul Singh", "Data Science","Machine Learning","Gen AI", "Rahul Singh"]}
              loop={1} // Runs only once
              cursor={false} // Hides cursor after animation
              typeSpeed={100}
              delaySpeed={1000}
            />
          </h1>

          {/* Paragraph with Hover Effects */}
          <p className="text-gray-300 text-lg mb-12 max-w-4xl mx-auto leading-relaxed">
            {`I’m a data scientist with a passion for transforming raw data into valuable insights through advanced analytics and machine learning.
My goal is to develop scalable models and data-driven solutions that enhance decision-making and drive measurable business impact.
By leveraging statistical analysis, predictive modeling, and data visualization, I strive to uncover meaningful patterns and optimize strategies for growth and innovation.`
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-white hover:shadow-md"
                >
                  {word}&nbsp;
                </span>
              ))}
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-6">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
 