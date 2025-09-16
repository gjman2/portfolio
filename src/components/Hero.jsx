import heroConfig from "../data/heroConfig.js";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center px-5 py-32 bg-primary">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="font-bitcount text-white text-6xl">
          Hi,
          <br /> {heroConfig.name}
          <p className="font-bitcount text-2xl">{heroConfig.subtitle}</p>
        </h1>
        <div className="flex flex-row py-10">
          {heroConfig.social.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                className="mr-3 text-white hover:text-gray-500"
                href={item.value}
                target="_blank"
              >
                <Icon size={40} />
              </a>
            );
          })}
        </div>
      </div>
      <img
        className="w-[200px] md:w-[280px] rounded-full mx-auto md:mx-0"
        src={heroConfig.image}
        alt="Sri Gana"
      />
    </section>
  );
}
