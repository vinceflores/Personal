import React from "react";
import me from "../Assets/Me.png";
import Title from "./Title";
const About = () => {
  return (
    <div className="about flex md:mt-[200px] flex-col justify-center items-center gap-4 py-4 w-full ">
        <Title h1={`About me`} /> 
      <div className="w-full flex justify-center items-center">
        <img src={me} alt="me" />
      </div>
      <div className=" md:relative -left-[300px] p-8 bg-blue-500 text-white -top-[140px] border-[0.5px] rounded-3xl  md:rounded-l-full md:rounded-b-full  ">
        <p className=" w-[300px]  opacity-[0.7]">
          Driven Computer Science Student with 2 yrs. of web design and development
          experience. Who happens to be passionate about fitness and Computer
          Science.
        </p>
      </div>   

      <div className=" px-8 dark:shadow-white bg-blue-500 border-[0.5px] rounded-3xl md:rounded-r-full md:rounded-b-full grid last:col-span-2 grid-cols-2 w-[300px] -top-[350px] md:relative -right-[300px]  ">
            <Stat h3={`1+ year`} h2={`Web Developer`} /> 
            <Stat h3={`6+ `} h2={`Projects`}/> 
            <Stat h3={`6 months`}  h2={`Full-Stack Dev`}/> 
      </div>


    </div>
  );
};

export default About;

const Stat = ({h3 , h2}) => {
    return (
        <div className="last:col-span-2 text-white justify-self-center flex flex-col w-[160px] p-4 h-[100px] justify-center items-center">
            <h3 className="text-xs font-bold">{h3}</h3>
            <div className="w-full h-px bg-white"/> 
            <h2 className="sm">{h2}</h2>
        </div>
    )
}