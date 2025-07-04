export const ProjectCard = ({ project }) => {
    return (
      <div className="relative group flex flex-col bg-[#1a2a3d] rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="project-image w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90 z-10"
        />
  
        {/* Project Info */}
        <div className="project-info p-4 flex flex-col justify-between flex-grow relative z-20">
          <h3 className="text-2xl font-semibold text-gray-300 mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <div className="tech-stack text-sm text-gray-70 0">
            {project.techStack.map((tech, index) => (
              <span key={index} className="mr-2 inline-block bg-red-600 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="mt-4 text-red-400 hover:text-orange-600 transition duration-300 ease-in-out flex justify-center items-center"
          >
            View Project →
          </a>
        </div>
  
        {/* Hover Gradient Border Effect */}
        <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-blue-400 to-purple-800 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-0"></div>
      </div>
    );
  };
  