import React from "react";
import { tech } from "../Data/Texh";
import Title from "./Title";
const Tech = () => {
  const stack = <TechCard dataProp={tech.stack} title={`Stack`} />;
  const tools = <TechCard dataProp={tech.tools} title={`Tools`} />;

  return (
    <div className="tech w-full  ">
      <Title h1={`What I Use`} />
      <div className="   p-8  flex flex-col md:flex-row justify-center items-center md:items-start gap-4 w-full ">
        {stack}
        {tools}
      </div>
    </div>
  );
};

export default Tech;

const TechCard = ({ dataProp, title }) => {
  const tabs = dataProp.map((i, k) => {
    return <Tab key={k} prop={i} />;
  });

  return (
    <div className=" row-span-1/2 flex flex-col bg-red-400 w-2/3 md:w-1/4 rounded-b-2xl  last:shadow-white">
      <h1 className="text-white dark:text-black text-center text-xl dark:bg-white  bg-slate-900  w-full">
        {title}
      </h1>
      {tabs}
    </div>
  );
};

const Tab = ({ prop }) => {
  return (
    <div className="w-full flex justify-left items-center rounded-b-2xl p-4 gap-4 shadow-lg shadow-red-600 ">
      <div className="w-[32px] ">{prop.icons}</div>

      <div className="text-left w-full">
        <h2 className="text-white">{prop.name}</h2>
        <div className="w-full h-px bg-white" />
      </div>
    </div>
  );
};
