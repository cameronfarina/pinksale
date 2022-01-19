import React from "react";

const SectionHeading = ({ text }) => {
  return (
    <div className="flex items-center justify-center pb-8 drop-shadow-xl pt-24 whitespace-nowrap">
      <div className="w-full mr-8 sm:mr-16">
        <div className="w-full h-2 bg-pink"></div>
        <div className="w-full h-2 bg-white"></div>
        <div className="w-full h-2 bg-pink"></div>
      </div>
      <div className="inline-block">
        <div className="flex items-center w-full text-center mx-auto">
          <div className="text-center text-pink ">
            <h1 className="text-3xl sm:text-5xl font-black mb-2">{text}</h1>
          </div>
        </div>
      </div>
      <div className="w-full ml-8 sm:ml-16">
        <div className="w-full h-2 bg-pink"></div>
        <div className="w-full h-2 bg-white"></div>
        <div className="w-full h-2 bg-pink"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
