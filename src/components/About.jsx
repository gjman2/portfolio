import aboutConfig from "../data/aboutConfig.js";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="py-5 md:w-1/2 flex justify-center">
        <img
          src={aboutConfig.image}
          alt="About"
          className="w-64 md:w-80 lg:w-96 max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 flex justify-center text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold border-b-4 mt-5 mb-5 w-[170px]">
            About me
          </h1>
          {aboutConfig.description.map((item, index) => {
            return (
              <p key={index} className="pb-5">
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
