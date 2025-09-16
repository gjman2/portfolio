import myWeatherImg from "../assets/my_weather.png";
import snackOrderingAppImg from "../assets/snack_ordering_app_mockup.png";
import portfolioImg from "../assets/data.jpeg";
import contactManagerImg from "../assets/contact_manager.png";
import singerSystemImg from "../assets/singer_system.png";
import praSystemImg from "../assets/pra_system.png";
const data = {
  projects: [
    {
      image: snackOrderingAppImg,
      title: "Movie Theatres Snack Ordering App - UX Design Mockup",
      description:
        "As part of a UX design course, I created a mockup for a mobile snack ordering app for cinema-goers. The goal was to streamline the ordering process and reduce queue times. I designed wireframes, user flows, and a high-fidelity prototype using Figma.",
      link: "https://www.behance.net/gallery/176884483/Design-a-snack-ordering-app-for-movie-theatres",
      type: "internal",
    },
    {
      image: myWeatherImg,
      title: "Weather App",
      description:
        "A simple and responsive weather application built using React.js and Tailwind CSS. The app fetches real-time weather data from a public API (such as OpenWeatherMap) based on user input for any city",
      link: "https://github.com/gjman2/my-weather",
      type: "internal",
    },
    {
      image: contactManagerImg,
      title: "Contact Manager App",
      description:
        "A simple contact management application built with React.js, React Router, and Tailwind CSS. The app allows users to create, view and delete contact information in an organized interface.",
      link: "https://github.com/gjman2/contact-manager",
      type: "internal",
    },
    {
      image: portfolioImg,
      title: "Portfolio",
      description:
        "A personal portfolio website developed using React.js and styled with Tailwind CSS. The website showcases my background, technical skills, personal projects, and contact information.",
      link: "https://github.com/gjman2/portfolio",
      type: "internal",
    },
    {
      image: portfolioImg,
      title: "SOGO Gift Card Management System",
      description:
        "A web-based gift card management system developed for SOGO, enabling users to manage gift cards efficiently. The application allows operations such as purchasing and activating gift cards, checking card status, and processing transactions for goods purchased with gift cards. The solution integrated with the Point-of-Sale (POS) system via SOAP APIs to ensure real-time synchronization of card operations. Additionally, the system generates Month-to-Date (MTD) and Year-to-Date (YTD) sales reports using JasperReports. Tools & Technologies: Java, Struts 2, SOAP Web Services, Microsoft SQL Server, JasperReports, Apache Tomcat",
      link: "https://github.com/gjman2",
      type: "External",
    },
    {
      image: singerSystemImg,
      title: "Singer Malaysia Credit Application System",
      description:
        "A credit application system developed for Singer Malaysia to streamline the process of applying for hire purchase financing. The system enables dealers to submit credit applications on behalf of customers for purchasing appliances, motorbikes, and other products under the Singer Easy Instalment Scheme (Hire Purchase Financing). Credit officers can then review, verify, and process these applications through an efficient workflow. Tools & Technologies: Java, Spring Boot, MySQL Server, JasperReports, Apache Tomcat",
      link: "https://github.com/gjman2",
      type: "External",
    },
    {
      image: praSystemImg,
      title:
        "TPCA (Third Party Claim Administration) System - Pra Assist Medical Network Sdn Bhd",
      description:
        "A claims administration system developed for Pra Assist Medical Network Sdn Bhd to manage insurance claims on behalf of insurers. The system is integrated with the SPIKPA system (Skim Perlindungan Insurans Kesihatan Pekerja Asing), allowing users to seamlessly receive medical claim data from SPIKPA and process them within the platform. This integration streamlined the workflow of handling insured workers' medical claims, ensuring faster validation, approval, and reporting. Tools & Technologies: Java, Strut 1, MySQL Server, JasperReports, Apache Tomcat",
      link: "https://github.com/gjman2",
      type: "External",
    },
  ],
};

export default data;
