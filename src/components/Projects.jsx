import projectConfig from "../data/projectConfig.js";

export default function Projects() {
  return (
    <section
      className="flex flex-col py-20 px-5 bg-primary text-white"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl font-bold border-b-4 mt-5 mb-5 w-[140px]">
            Projects
          </h1>
          <p>There are some of my best projects. Check them out.</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:flex-wrap px-10 gap-5">
          {projectConfig.projects.map((item, index) => (
            <div
              key={index}
              className="relative bg-secondary rounded-lg shadow-lg overflow-hidden w-full md:w-[48%] lg:w-[30%]"
            >
              <img
                className="w-full h-[200px] object-cover"
                src={item.image}
                alt={`Project ${index}`}
              />
              <div className="p-4">
                <p className="font-bold text-center mb-2 break-words">
                  {item.title}
                </p>
                <p className="text-center text-sm break-words mb-4">
                  {item.description}
                </p>
                {item.type === "internal" && (
                  <div className="flex justify-center">
                    <a
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
