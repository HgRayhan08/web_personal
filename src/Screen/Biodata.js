import React from "react";
import Desain from "../Assets/Desain.png";
import Mobile from "../Assets/Mobile.png";
import Web from "../Assets/Web.png";

const Biodata = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-3xl font-nurito font-bold ">Biodata</h1>
      <div className="flex justify-center">
        <table className="m-5 font-Verela">
          <tr className="border-b-2">
            <td>Nama</td>
            <td>:</td>
            <td>Hugo Rayhan Firmansyah</td>
          </tr>
          <tr className="border-b-2 ">
            <td>Nama panggilan</td>
            <td>:</td>
            <td>Hugo</td>
          </tr>
          <tr className="border-b-2 ">
            <td>Tanggal Lahir</td>
            <td>:</td>
            <td>08 April 2002</td>
          </tr>
          <tr className="border-b-2 ">
            <td>Jenis Kelamin</td>
            <td>:</td>
            <td>Laki-laki</td>
          </tr>
          <tr className="border-b-2 ">
            <td>Alamat</td>
            <td>:</td>
            <td>Wonokromo, Kota Surabaya</td>
          </tr>
          <tr className="border-b-2 ">
            <td>Nomor Telpon</td>
            <td>:</td>
            <td>081338289247</td>
          </tr>
        </table>
      </div>

      <div>
        <h1 className="text-2xl font-nurito font-bold ml-5 ">Skill</h1>
        <div className="flex flex-col items-center gap-5 md:flex-wrap md:flex-row md:justify-center lg:gap-0 lg:justify-around">
          <div className="bg-white flex flex-col items-center w-99 h-56 p-4 group rounded-xl border-b-4 border-gray-700 sm:h-60 md:w-2/5 lg:w-33 lg:h-52">
            <img
              src={Desain}
              alt="Web Development"
              className="w-3/12  group-hover:p-2 "
            />
            <div className="text-center">
              <h1 className="text-xl font-nurito font-semibold">
                Web Development
              </h1>
              <h2 className="text-sm font-Verela h-10 lg:text-xs lg:mt-3">
                Menguasai bahasa pemrograman seperti Javascript, CSS, HTML.
                
              </h2>
            </div>
          </div>
          <div className="bg-white flex flex-col items-center w-99 h-56 p-4 group rounded-xl border-b-4 border-gray-700 sm:h-60 md:w-2/5 lg:w-33 lg:h-52 ">
            <img
              src={Mobile}
              alt="Mobile Development"
              className="w-3/12  group-hover:p-2 "
            />
            <div className="text-center">
              <h1 className="text-xl font-nurito font-semibold">
                Mobile Development
              </h1>
              <h2 className="text-sm font-Verela h-10 lg:text-xs lg:mt-3">
                Menguasai framework Flutter dalam membuat Mobile
                Application pada platform android dan ios.
              </h2>
            </div>
          </div>
          <div className="bg-white flex flex-col items-center w-99 h-56 p-4 group rounded-xl border-b-4 border-gray-700 sm:h-60 md:w-2/4 lg:w-33 lg:h-52 ">
            <img
              src={Web}
              alt="Web Design"
              className="w-3/12 group-hover:p-2"
            />
            <div className="text-center">
              <h1 className="text-xl font-nurito font-semibold">Web Design</h1>
              <h2 className="text-sm font-Verela h-10 lg:text-xs lg:mt-3">
                Menguasai Figma dalam membuat tampilan atau desain sebuah
                website
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
