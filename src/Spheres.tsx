import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import sphereTexture from "./assets/4k_haumea_fictional.jpg";
import productManagement from "./assets/2k_mars.jpg";
import earth from "./assets/2k_earth_daymap.jpg";
import { Link } from "react-router-dom";


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
  
  function MyRotatingBox2(props) {
    const colorMap = useLoader(TextureLoader, productManagement);
    const meshRef = useRef<Mesh>(null!);
    const spotLightRef = useRef<Mesh>(null!);
  
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      meshRef.current.rotation.y = -a / 2;
    });
  
    const handleClick = () => {
      window.open("https://quizapp-frontend-974768286444.us-central1.run.app/", "_blank");
    };
  
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
        <mesh {...props} ref={meshRef} position={[0, 0, 0]} receiveShadow onClick={handleClick}
        >
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial map={colorMap} />
        </mesh>
      </>
    );
  }
  
  function MyRotatingBox3(props) {
    const colorMap = useLoader(TextureLoader, earth);
    const meshRef = useRef<Mesh>(null!);
    const spotLightRef = useRef<Mesh>(null!);
  
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      meshRef.current.rotation.y = -a / 2;
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

  export default function Spheres(){
    return (
        <>
        <p className="text-lg font-bungee mt-5">Product Management</p>
        <div id="canvas-container " className="h-40 w-[10vw] relative z-10 hover:cursor-pointer">
              <Canvas>
                <MyRotatingBox2/>
                <ambientLight />
                <directionalLight />
              </Canvas>
            </div>
          <p className="text-lg mt-4 font-bungee">Quizar</p>
          <Link
            to="https://quizapp-frontend-974768286444.us-central1.run.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="canvas-container " className="h-40 w-[10vw] relative z-10">
              <Canvas>
                <MyRotatingBox />
                <ambientLight />
                <directionalLight />
              </Canvas>
            </div>
          </Link>
          <p className="text-lg font-bungee">Maps</p>
          <Link
            to="https://quizapp-frontend-974768286444.us-central1.run.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="canvas-container" className="h-40 w-[10vw] relative z-10">
              <Canvas>
                <MyRotatingBox3 />
                <ambientLight />
                <directionalLight />
              </Canvas>
            </div>
          </Link>
          </>
    )
  }