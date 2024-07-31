import React from "react";
import Profil from "../Assets/foto.jpeg";
import Instagram from "../Assets/instagram.png";
import Github from "../Assets/github.png";
import Linkedin from "../Assets/linkedin.png";

const AboutMe = () => {
  return (
    <div className="mt-5 flex flex-col items-center lg:w-3/4" >
      <div className="flex items-center rounded-full">
        <img
          src={Profil}
          alt="Profile"
          className=" w-[80px] rounded-full lg:w-[100px]"
        />
        <h1 className="font-nurito font-bold text-lg ml-4 lg:text-3xl text-gray-600">
          Hugo Rayhan Firmansyah
        </h1>
      </div>
      <div className="w-[300px] text-justify mt-3 lg:w-[500px]">
        <h2 className="font-Verela lg:text-lg font-semibold">
          Mahasiswa Sistem Informasi Telkom University Surabaya. Hobi
          traveling dan suka bermain game. Menyukai hal baru dalam dunia
          pemograman serta mudah beradaptasi. Saya mempunyai memiliki keterampilan sebagai flutter developer dengan keahlihan saya dalam slicing dengan menggunakan framework flutter.
        </h2>
        <div className=" mt-2 flex justify-center bg-laut py-2 rounded-full w-[200px] mx-auto lg:w-[400px] lg:justify-evenly">
          <a href="https://www.instagram.com/hugoryhn?igsh=cGRudXBiMjIxYm80">
            <img src={Instagram} alt="instagram" className="w-10 mx-3" />
          </a>
          <a href="https://github.com/HgRayhan08">
            <img src={Github} alt="Github" className="w-10 mx-3" />
          </a>
          <a href="https://www.linkedin.com/in/hugo-rayhan-firmansyah/">
            <img src={Linkedin} alt="Github" className="w-10 mx-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
