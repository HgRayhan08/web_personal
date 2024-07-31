import React from "react";
import Card from "../Components/Card";
import Data from "../Components/Data";

const Portofolio = () => {
  const DataCard = Data.map((data) => {
    return (
      <Card
        key={data.key}
        image={data.image}
        title={data.title}
        descripsi={data.descripsi}
        bahasa={data.bahasa}
      />
    );
  });

  return (
    <div className="h-screen ">
      <div className="text-center mt-5">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <h3 className="font-semibold">Projek Terbaru</h3>
      </div>
      <div className="mx-5 h-screen md:flex md:justify-around md:flex-wrap lg:mx-0 lg:justify-center">
        {DataCard}
      </div>
    </div>
  );
};

export default Portofolio;
