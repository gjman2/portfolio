import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function onClickMenuHandler() {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
    console.log(toggleMenu);
  }

  return (
    <header className="flex flex-row justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-white" href="#">
        Sri Ganapathy
      </a>
      <nav className="hidden md:block">
        <ul className="flex flex-row text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden">
          <ul
            onClick={onClickMenuHandler}
            className="flex flex-col text-white mobile-nav"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button onClick={onClickMenuHandler} className="block md:hidden">
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}
