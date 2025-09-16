import heroImg from "../assets/Hero.jpg";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const data = {
  image: heroImg,
  name: "I'm Sri Ganapathy",
  subtitle: "Full Stack Software Developer",
  social: [
    {
      type: "GitHub",
      value: "https://github.com/gjman2",
      icon: AiOutlineGithub,
    },
    {
      type: "Linkedin",
      value:
        "https://www.linkedin.com/in/sri-ganapathy-superamaniam-5bb59027a/",
      icon: AiOutlineLinkedin,
    },
    {
      type: "Instagram",
      value: "https://www.instagram.com/sri_gana.s",
      icon: AiOutlineInstagram,
    },
  ],
};
export default data;
