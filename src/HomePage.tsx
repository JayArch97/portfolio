import profilepic from "./assets/profile.png";
import github from "./assets/github.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto p-4 ">
        <h1 className="text-4xl font-mono">Julio Quintanilla</h1>
        <p className="mt-2">Just a chill guy who likes to code</p>
        <div className="mt-4">
          <li>Test 1</li>
          <li>Test 2</li>
        </div>
      </div>
      <div>
        <img
          src={profilepic}
          alt="Profile"
          className="w-full/2 h-[60vh] rounded-md mx-auto mt-4 object-contain shadow-xl/30 shadow-cyan-500/50 opacity-85 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer "
        />
        <Link
          to="https://github.com/JayArch97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="Github"
            className="w-10 h-10 mt-10 rounded-full mx-auto mt-4 object-contain shadow-xl/30 shadow-cyan-500/50 opacity-85 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
          />
          <div className="text-center mt-2">
            <p className="text-lg">GitHub</p>
          </div>
        </Link>
      </div>
    </>
  );
}
