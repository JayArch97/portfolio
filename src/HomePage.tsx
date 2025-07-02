import profilepic from "./assets/profile.png";
import github from "./assets/github.jpg";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import sphereTexture from "./assets/4k_haumea_fictional.jpg";
import homePageBackground from "./assets/8k_stars_milky_way.jpg";
import linkedIn from "./assets/linkedin.png";
import meduim from "./assets/medium.png";
import NavBar from "./NavBar.tsx";
import productManagement from "./assets/pm.png";
import { TrendingUp } from "lucide-react";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-5)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

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
        <boxGeometry args={[3, 3, 3]} />
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
        }}
      className="h-screen" >
        <NavBar />
        <div className="p-4 w-[100vw]">
          <h1 className="text-4xl font-serif font-semibold">Julio Quintanilla</h1>
          <p className="mt-2 text-2xl">Check out some of my projects:</p>
          <div className="flex w-[100vw] ">
          <div className="items-center ml-5">
            <p className="text-lg mt-2">Quizar:</p>
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
            <p className="text-lg">Product Management:</p>
            <Link
              to="https://quizapp-frontend-974768286444.us-central1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="canvas-container" className="h-40 w-[10vw]">
                <Canvas>
                  <MyRotatingBox2 />
                  <ambientLight />
                  <directionalLight />
                </Canvas>
              </div>
            </Link>
            </div>
            <div className="flex flex-col absolute items-center justify-center w-[100vw]">
          <img
            src={profilepic}
            alt="Profile"
            className="w-full/2 h-[60vh] rounded-md  shadow-xl shadow-cyan-500/50 mask-b-from-90% mask-b-to-95% shadow-cyan-500/50 opacity-85 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer "
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
              <div className="text-center px-2 py-2 mx-auto ">
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

            <Link
              to="https://quizapp-frontend-974768286444.us-central1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <div id="canvas-container" className="h-[5vh] w-[23vw] absolute right-8 mt-10">
                <Card>
                  <CardHeader>
                    <CardTitle>User Base:</CardTitle>
                    <CardDescription>
                      Showing total visitors for the last 6 months from my projects.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig}>
                      <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                          left: 12,
                          right: 12,
                        }}
                      >
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent />}
                        />
                        <defs>
                          <linearGradient
                            id="fillDesktop"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="var(--color-desktop)"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="var(--color-desktop)"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                          <linearGradient
                            id="fillMobile"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="var(--color-mobile)"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="var(--color-mobile)"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          dataKey="mobile"
                          type="natural"
                          fill="url(#fillMobile)"
                          fillOpacity={0.4}
                          stroke="var(--color-mobile)"
                          stackId="a"
                        />
                        <Area
                          dataKey="desktop"
                          type="natural"
                          fill="url(#fillDesktop)"
                          fillOpacity={0.4}
                          stroke="var(--color-desktop)"
                          stackId="a"
                        />
                      </AreaChart>
                    </ChartContainer>
                  </CardContent>
                  <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2 leading-none font-medium">
                          Trending up by 5.2% this month{" "}
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground flex items-center gap-2 leading-none">
                          January - June 2024
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </Link>
          </div>
          </div>
      
      </div>
    </>
  );
}
