import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUser,
  faHouse,
  faPhone,
  faBook,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-scroll'

const Navbar = () => {
  return <div>Navbar</div>;
};

export default Navbar;

export const NavFloat = () => {
  const [hide, sethide] = useState(true);

  const changeHide = () => {
    sethide(hide ? false : true);
  };
  // bg-red-400 dark:bg-red-600
  return (
    <div className="sticky bottom-4 w-full inset-x-0   ">
      <div
        onClick={changeHide}
        className={` 
      bg-transparent
         flex gap-8 z-20 justify-center items-center p-2
         absolute bottom-4 inset-x-0 mx-auto w-[300px]
         shadow-sm dark:shadow-slate-300

          rounded-r-[100px]
          rounded-l-xl
        
        backdrop-inver backdrop-blur-lg
        text-blue-400 dark:text-blue-500
        ${hide ? "hidden" : ""}
    `}
      > 
        <Link to="hero" smooth={true} spy={true} offset={-100} className=" cursor-pointer"> 
        <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link to="portfolio" smooth={true} spy={true}  className=" cursor-pointer">
        <FontAwesomeIcon icon={faBook} />
        </Link>
        <Link to="about" smooth={true} spy={true} offset={-100} className=" cursor-pointer">
        <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="tech" smooth={true} spy={true} offset={-50} className=" cursor-pointer">
        <FontAwesomeIcon icon={faThumbtack} />
        </Link>
        <Link to="footer" smooth={true} spy={true}  className=" cursor-pointer">
        <FontAwesomeIcon icon={faPhone} />
        </Link>
        <button>
          <FontAwesomeIcon icon={faEye} className="text-blue-500" />
        </button>
      </div>

      <button
        onClick={changeHide}
        className={`

        ${hide ? "" : "hidden"}
        backdrop-invert
          absolute bottom-4 right-0  h-[50px] w-[50px]  rounded-l-3xl rounded-r-xl 
      `}
      >
        <FontAwesomeIcon icon={faEyeSlash} className="text-white dark:text-slate-700" />
      </button>
    </div>
  );
};
