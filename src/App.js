// import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Particle from "./Components/Particle";
import AboutMe from "./Screen/AboutMe";
import Biodata from "./Screen/Biodata";
import Education from "./Screen/Education";
import Header from "./Screen/Header";
import Portofolio from "./Screen/Portofolio";

function App() {
  return (
    <div>
      <Particle />
      <Header />
      <div className=" pb-10 flex flex-col justify-center items-center  lg:flex-row lg:items-start lg:h-screen lg:mt-10">
        <AboutMe id={"aboutME"} />
        <div className="  flex flex-col items-center lg:items-center lg:justify-center lg:w-[1500px] lg:mr-20 ">
          <nav className="bg-laut flex justify-around w-[350px] p-3 rounded-full mt-3 shadow-md shadow-tosca lg:w-full">
            <li className="list-none">
              <Link
                to="/Portofolio"
                className="text-lg font-semibold text-white"
              >
                Portfolio
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/Education"
                className="text-lg font-semibold text-white"
              >
                Pendidikan
              </Link>
            </li>
            <li className="list-none">
              <Link to="/Biodata" className="text-lg font-semibold text-white">
                Biodata
              </Link>
            </li>
          </nav>
          <Routes>
            <Route path="/Portofolio" element={<Portofolio />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Biodata" element={<Biodata />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
