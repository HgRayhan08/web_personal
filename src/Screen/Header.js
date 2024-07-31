import React from "react";
import { Link } from "react-router-dom";
import Character from "../Assets/Character.png";

const Header = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-col justify-around items-center lg:flex-row lg:h-screen ">
        <div className="h-80 w-full flex flex-col justify-center items-center lg:items-start lg:ml-20">
          <h3 className="text-xl font-extrabold font-nurito sm:text-3xl xl:text-4xl text-neutral-800">
            Hallo! Saya
          </h3>
          <h1 className="text-2xl font-black font-nurito sm:text-4xl lg:text-5xl">
            Hugo Rayhan Firmansyah
          </h1>
          <h2 className="text-xl font-bold font-nurito  sm:text-3xl text-neutral-700">
            Front-End Developer
          </h2>
          <hr className=" w-[500px] border-t-[4px] shadow-lg rounded-full" />
        </div>
        <div className=" flex items-center justify-center lg:h-full lg:items-end">
          <div className=" bg-laut border-10 border-tosca rounded-t-full w-[500px] sm:w-[700px] md:w-[900px] lg:w-[800px] lg:h-[800px] lg:rounded-full lg:translate-x-40 lg:translate-y-32 ">
            <img
              src={Character}
              alt="character"
              className=" w-[400px] sm:w-[500px] mx-auto md:w-[550px] lg:w-[900px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
