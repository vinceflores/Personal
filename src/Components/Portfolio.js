import React from "react";
import portfolio from "../Data/Portfolio";
import { useContext } from "react";
import { themeContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForwardStep,
  faCodeCompare,
} from "@fortawesome/free-solid-svg-icons";
import github from '../Assets/github.svg'
import github_dark from '../Assets/github_dark.svg'
import {faAlternateGitHub} from '@fortawesome/free-brands-svg-icons'
import {  faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import Title from "./Title";

const Portfolio = () => {
  const [dark] = React.useContext(themeContext)
  const card_list = portfolio.map((i, k) => {
    return <Card dataProp={i} key={k} type={k%2 === 0 ? 'even' : 'odd'} />;
  });

  return (
    <div className="portfolio flex flex-col gap-4 py-12">
      <Title h1={`Latest Projects`} h2={`My Portfolio`} /> 
      <div>{card_list}</div>
    </div>
  );
};

export default Portfolio;

const Card = ({ dataProp, type }) => {
  const [dark, setdark] = useContext(themeContext);

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 items-center lg:items-start">
      <button className={`${type === 'even' ? 'md:order-1': 'md:order-2'} shadow-slate-700 shadow-2xl scale-75  rounded-xl`}>
        <a href={dataProp.url}>
          <img
            src={dark ? dataProp.img_dark : dataProp.img_light}
            alt="card"
            className=" aspect-[4/3] object-cover rounded-xl "
          />
        </a>
      </button>

      <div className={`${type !== 'even' ? 'md:order-1': 'md:order-2'} flex flex-col lg:mt-12 flex-1 p-1  gap-4  justify-start items-start`}>
        <div className="flex flex-col  justify-start items-start">
        <h3 className="text-2xl">{dataProp.title}</h3>
        <p className="w-[300px] opacity-[0.5]">{dataProp.description}</p>
        </div>

        <div className="w-full h-px bg-black dark:bg-white"/> 

        <div className="flex justify-center items-center lg:justify-start lg:items-start w-full gap-4">
          <a href={dataProp.url} className="hover:opacity-[0.5] ">
            <FontAwesomeIcon icon={faForwardStep} size="xl" />
          </a>
          <a href={dataProp.github} className="hover:opacity-[0.5] " >
            <FontAwesomeIcon icon={faGithubAlt} size="xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
