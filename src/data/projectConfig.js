import myWeatherImg from "../assets/my_weather.png";
import snackOrderingAppImg from "../assets/snack_ordering_app_mockup.png";
const data = {
  projects: [
    {
      image: snackOrderingAppImg,
      title: "Movie Theatres Snack Ordering App - UX Design Mockup",
      description:
        "As part of a UX design course, I created a mockup for a mobile snack ordering app for cinema-goers. The goal was to streamline the ordering process and reduce queue times. I designed wireframes, user flows, and a high-fidelity prototype using Figma.",
      link: "https://www.behance.net/gallery/176884483/Design-a-snack-ordering-app-for-movie-theatres",
    },
    {
      image: myWeatherImg,
      title: "Weather App",
      description:
        "A simple and responsive weather application built using React.js and Tailwind CSS. The app fetches real-time weather data from a public API (such as OpenWeatherMap) based on user input for any city",
      link: "https://github.com/gjman2/my-weather",
    },
    {
      image: myWeatherImg,
      title: "Portfolio",
      description:
        "A personal portfolio website developed using React.js and styled with Tailwind CSS. The website showcases my background, technical skills, personal projects, and contact information.",
      link: "https://github.com/gjman2/portfolio",
    },
  ],
};

export default data;
