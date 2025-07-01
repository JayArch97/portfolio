import profilepic from "./assets/profile.png";
import github from "./assets/github.jpg";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import sphereTexture from "./assets/4k_haumea_fictional.jpg";
import homePageBackground from "./assets/8k_stars_milky_way.jpg";
import linkedIn from './assets/linkedin.png'
import meduim from './assets/medium.png'
import NavBar from './NavBar.tsx'

function MyRotatingBox(props) {
  const colorMap = useLoader(TextureLoader, sphereTexture);
  const meshRef = useRef<Mesh>(null!);
  const spotLightRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    meshRef.current.rotation.y = a / 2;
  });

  return (
    <>
      <spotLight
        ref={spotLightRef}
        position={[5, 10, 5]}
        intensity={10}
        angle={Math.PI / 4}
        penumbra={0.5}
        castShadow
      />
      <mesh {...props} ref={meshRef} position={[0, 0, 0]} receiveShadow>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </>
  );
}

export default function HomePage() {
  return (
    <>
 
      <div
      
        style={{
          backgroundImage: `url(${homePageBackground})`,
          backgroundSize: "cover",
        }}>
             <NavBar/>
        <div className="container mx-auto p-4 ">
          <h1 className="text-4xl font-mono">Julio Quintanilla</h1>
          <p className="mt-2">Check out some of my projects:</p>
          <div className="flex items-center">
            <p className="text-2xl">Quizar:</p>
            <Link
              to="https://quizapp-frontend-974768286444.us-central1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="canvas-container" className="h-40 w-[10vw]">
                <Canvas>
                  <MyRotatingBox />
                  <ambientLight />
                  <directionalLight />
                </Canvas>
              </div>
            </Link>
          </div>
          <div></div>
          <img
            src={profilepic}
            alt="Profile"
            className="w-full/2 h-[60vh] rounded-md mx-auto mt-4  shadow-xl shadow-cyan-500/50 mask-b-from-90% mask-b-to-95% shadow-cyan-500/50 opacity-85 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer "
          />
          <div className="flex items-center justify-center ">
          <Link
            to="https://www.linkedin.com/in/julio-armando-quintanilla-acosta-bb0582318/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedIn}
              alt="Github"
              className="w-10 h-10 mt-10 rounded-full mx-auto object-contain  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
            />
            <div className="text-center  px-2 py-2 mx-auto">
              <p className="text-lg">LinkedIn</p>
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
              className="w-10 h-10 mt-10 rounded-full mx-auto object-contain  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
            />
            <div className="text-center px-2 py-2 mx-auto">
              <p className="text-lg">GitHub</p>
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
              className="w-10 h-10 mt-10 rounded-full mx-auto object-contain shadow-xl/30 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
            />
            <div className="text-center px-2 py-2 mx-auto">
              <p className="text-lg">Meduim</p>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}
