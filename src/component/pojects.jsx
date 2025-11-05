import { pojects } from "../data/index";

export const Pojects = () => {
  return (
    <div className="flex justify-center py-12">
      <div className="max-w-5xl w-full px-6">
        <h1 className="text-3xl font-semibold text-center mb-10">my projects</h1>

        <div className="flex flex-col space-y-6">
          {pojects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 border-b border-gray-200 pb-4 hover:bg-gray-50 transition-all duration-300 p-2 rounded-lg"
            >
              <div className="w-28 h-20 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
                <img src={project.img} alt="" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{project.date}</span>
                <span className="text-lg font-medium text-gray-800 transition-transform duration-300 group-hover:scale-105 group-hover:text-blue-600">
                  {project.title}
                </span>
              </div>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-blue-600 text-xl">
                ➜
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
