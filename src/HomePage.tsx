import profilepic from "./assets/profile.png";
import github from "./assets/github.png";
import { Link } from "react-router-dom";
import homePageBackground from "./assets/8k_stars_milky_way.jpg";
import linkedIn from "./assets/linkedin2.png";
import meduim from "./assets/nmedium.png";
import NavBar from "./NavBar.tsx";
import Chart from "./Charts";
import Spheres from "./Spheres"

export default function HomePage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${homePageBackground})`,
          backgroundSize: "cover",
        }}
      className="h-screen" >
        <NavBar />
        <div className="p-4 w-[100vw]">
          <h1 className="text-5xl font-bungee">Julio Quintanilla</h1>
          <p className="mt-2 text-4xl honk-white-shadow">Check out some of my projects:</p>
          <div className="flex w-[100vw] ">
          <div className="items-center ml-5">
          <Spheres />
            </div>
            <div className="flex flex-col absolute items-center justify-center w-[100vw]">
          <img
            src={profilepic}
            alt="Profile"
            className="w-full/2 h-[60vh] rounded-md  shadow-xl shadow-cyan-500/50 mask-b-from-90% mask-b-to-95% opacity-85 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer "
          />
          <div className="flex items-center justify-center mb-20">
            <Link
              to="https://www.linkedin.com/in/julio-armando-quintanilla-acosta-bb0582318/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedIn}
                alt="Github"
                className="w-12 h-12 mt-10 rounded-full mx-auto object-contain  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
              />
              <div className="text-center  px-2 py-2 mx-auto">
                <p className="text-lg"></p>
              </div>
            </Link>
            <Link
              to="https://github.com/JayArch97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="Github"
                className="w-15 h-15 mt-10 rounded-full  object-contain  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer ml-6 mr-6"
              />
              <div className="text-center px-2 py-2 mx-auto ">
                <p className="text-lg"></p>
              </div>
            </Link>
            <Link
              to="https://medium.com/@jayarch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={meduim}
                alt="Github"
                className="w-12 h-12 mt-10 rounded-full mx-auto object-contain shadow-xl/30 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
              />
              <div className="text-center px-2 py-2 mx-auto">
                <p className="text-lg"></p>
              </div>
            </Link>
          </div>
        </div>
            <Link
              to="https://quizapp-frontend-974768286444.us-central1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Chart />
            </Link>
          </div>
          </div>
      </div>
    </>
  );
}
