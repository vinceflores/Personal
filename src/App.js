import logo from "./logo.svg";
import "./App.css";
import { NavFloat } from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon ,faSun , faDroplet, faDropletSlash} from "@fortawesome/free-solid-svg-icons";
import Tech from './Components/Tech'
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";

export const themeContext = React.createContext();
function App() {
  const [dark, setdark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [paint, setPaint ] = useState(false); 

  React.useEffect(() => {
    localStorage.setItem("theme", `${dark ? "dark" : "light"}`);
    // console.log(localStorage.theme)
    console.log(window.matchMedia("(prefers-color-scheme: dark)"));
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    if (dark) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setdark(false);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setdark(true);
    }
  };

  return (
    <themeContext.Provider value={[dark, setdark]}>
      <div
        className={`
    dark:bg-slate-900 
    dark:text-slate-100

    ${paint? ` bg-gradient-to-b from-white to-slate-400 dark:to-red-400 dark:from-black `: ''}
   
    scroll-smooth
    bg-white text-slate-900
       w-full 
      flex flex-col justify-start items-center
    `}
      >
        <div className="fixed top-3 w-full lg:right-5  z-50 ">
          <button
            onClick={changeTheme}
            className="w-10 h-10 absolute top-0  right-0 rounded-l-3xl  border border-black dark:border-white   bg-transparent backdrop-blur-sm "
          >
            <FontAwesomeIcon icon={faMoon} className={dark ? "" : "hidden"} />
            <FontAwesomeIcon icon={faSun} className={`${!dark ? "" : "hidden"}`}  />
          </button>
        </div>
        <div className="fixed top-14 w-full lg:right-5  z-50 ">
          <button
            onClick={() => setPaint(paint ? false: true)}
            className="w-10 h-10 absolute top-0  right-0 rounded-l-3xl  border border-black dark:border-white   bg-transparent backdrop-blur-sm "
          >
            <FontAwesomeIcon icon={faDropletSlash} className={!paint ? "" : "hidden"} />
            <FontAwesomeIcon icon={faDroplet} className={`${paint ? "" : "hidden"}`}  />
          </button>
        </div>

        <Hero/> 
        <About/> 
        <Tech /> 
        <Portfolio />

        <Footer/> 
        <NavFloat />
      </div>
    </themeContext.Provider>
  );
}

export default App;
