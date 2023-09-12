import React from "react";
import resume from "../Data/Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { hero } from "../Data/Hero";
const Hero = () => {
  const links = hero.map((i, k) => {
    return <Button dataProp={i} key={k} />;
  });

  return (
    <div className="hero w-full py-8  mt-[100px]  flex flex-col md:flex-row gap-4 justify-center items-center  ">
      <div className=" flex  flex-col  md:w-1/3 md:justify-start md:items-start  justify-center items-center  px-4  gap-4">
        <h1 className="w-full text-2xl md:text-6xl font-bold text-center md:text-left">
          Vince Flores
        </h1>
        <h2 className="w-[250px] text-2xl md:text-3xl opacity-[0.5] text-center">
          Hi, Welcome to my personal Website
        </h2>
        <button className="w-32 rounded-r-2xl dark:border-[.5px] text-white bg-slate-900">
          <a href={"https://drive.google.com/file/d/14QffQM_gyWAAw9yBIc0yYOLAatiJ9-OU/view?usp=drive_link"} target="_blank">
            Download CV
          </a>
        </button>
      </div>
      <div className=" w-full md:w-1/3 flex gap-1 flex-row md:flex-col justify-center items-center">{links}</div>
    </div>
  );
};

export default Hero;

export const Button = ({ dataProp }) => {
  return (
    <button className={` md:w-32 ${dataProp.bg_color} rounded-full md:rounded-r-2xl p-2 md:p-1`}>
      <a
        href={dataProp.url}
        className="flex gap-2 items-center justify-center "
      >
        <FontAwesomeIcon icon={dataProp.fa} size="lg"  className="text-white"/>
        <span className="text-xs max-sm:hidden text-white">{dataProp.name}</span>
      </a>
    </button>
  );
};
