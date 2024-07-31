import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col items-center w-auto shadow-xl rounded-b-xl my-7 lg:flex-row lg:rounded-r-xl lg:shadow-none border-b-4 border-gray-600">
      <img
        src={props.image}
        alt={props.title}
        className="w-full lg:w-[60%] lg:h-full "
      />
      <div className=" w-full  bg-laut px-3 py-2 rounded-b-xl shadow-gray-400  lg:h-full lg:rounded-none lg:rounded-r-xl lg:shadow-none ">
        <h2 className="text-xl font-bold mt-3 lg:text-3xl  text-white font-nurito">
          {props.title}
        </h2>
        <h4 className="text-sm font-semibold lg:text-lg my-5 text-slate-100 font-Verela">
          {props.descripsi}
        </h4>
        <h4 className="text-gray-50 font-Verela">{props.bahasa}</h4>
      </div>
    </div>
  );
};

export default Card;
