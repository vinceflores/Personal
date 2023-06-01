import React from "react";

const Title = ({h1, h2}) => {
  return (
    <div className="col-span-2 text-center w-full  ">
      <h2 className="w-full opacity-[0.5]  lg:text-xl">{h2}</h2>
      <h1 className="w-full text-3xl lg:text-4xl">{h1}</h1>
    </div>
  );
};

export default Title;
