import resumeConfig from "../data/resumeConfig.js";

export default function Resume() {
  return (
    <section
      className="flex flex-col md:flex-row bg-secondary px-5"
      id="resume"
    >
      <div className="py-5 md:w-1/2 flex flex-row justify-center md:justify-end">
        <img className="w-[300px]" src={resumeConfig.image} />
      </div>
      <div className="md:w-1/2 flex justify-center text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold border-b-4 mt-5 mb-5 w-[140px]">
            Resume
          </h1>
          <p className="pb-5">
            <a
              className="btn"
              href={resumeConfig.link}
              download={resumeConfig.name}
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
