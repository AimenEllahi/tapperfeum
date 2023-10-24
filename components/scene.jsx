"use client";
import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";
import { Cloud, Environment } from "@react-three/drei";
// import { LayerMaterial, Color, Depth } from 'lamina'
import * as THREE from "three";
// import { Model } from "./threejs/TP_WORLD_CONCEPT";
// import { Model } from "./threejs/TP_World";
import { gsap } from "gsap";
import Buttons from "./buttons";
import ScrollAnimation from "./ScrollAnimation";
import Loader from "./Loader";
import Model from "./Model";
import MovingLight from "./MovingLight";
import Skybox from "./Skybox";
import Clounds from "./Clouds";

const MovingCloud = () => {
  const [position, setPosition] = useState([0, -0.3, 3.900000000000004]);
  const targetPosition = [
    -5.599999999999999, -0.30000000000000004, 3.0999999999999983,
  ];

  useFrame(() => {
    setPosition((prevPosition) => [
      prevPosition[0] + (targetPosition[0] - prevPosition[0]) * 0.003,
      prevPosition[1] + (targetPosition[1] - prevPosition[1]) * 0.003,
      prevPosition[2] + (targetPosition[2] - prevPosition[2]) * 0.003,
    ]);
  });

  // useEffect(() => {
  //   if (cloudRef.current) {
  //     gsap.to(cloudRef.current.position, {
  //       x: -5.599999999999999,
  //       y: -0.30000000000000004,
  //       z: 6.0999999999999983,
  //       duration: 1,
  //       ease: "power1.inOut",
  //     });
  //   }
  // }, []);

  // console.log(cloudRef);

  return (
    <Cloud
      position={position}
      rotation={[0.2, 0, 0]}
      color="white"
      // ref={cloudRef}
      opacity={5}
      speed={0.4}
      width={0.05}
      depth={1.5}
      segments={2}
      scale={0.5}
    />
  );
};

function scene() {
  const welcomeTextRef = useRef();

  useEffect(() => {
    // Create the fade-out animation for the welcome text
    const fadeOutAnimation = gsap.to(welcomeTextRef.current, {
      duration: 1,
      opacity: 0,
      delay: 5.5,
      onComplete: () => {
        welcomeTextRef.current.style.display = "none";
      },
    });

    return () => {
      fadeOutAnimation.kill();
    };
  }, []);
  return (
    <>
      <div className="h-screen w-[80vw] z-30 relative">
        <div className="fixed w-screen h-screen  top-0 overflow-x-hidden">
          <Canvas camera={{ fov: 75 }}>
            <Environment preset="sunset" />
            <pointLight position={[0, 0, 0]} intensity={1} />

            <Suspense fallback={<Loader />}>
              <Model />
              <MovingCloud />
              <Clounds />
              <MovingLight />
              {/* <Model /> */}
              <Skybox />
              <ScrollAnimation />
            </Suspense>
          </Canvas>
        </div>

        <Buttons />
        <div
          ref={welcomeTextRef}
          className="text-white fixed font-playfair flex flex-col justify-between items-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        >
          <span className="text-center w-[50vw] mb-5 text-6xl font-bold">
            WELCOME TO THE WORLD OF TAPPAREUM
          </span>
        </div>
      </div>
      <section data-scroll-section style={{ height: "1vh" }}></section>
      <section
        className="trigger"
        data-scroll-section
        style={{ height: "20vh" }}
      ></section>
    </>
  );
}

export default scene;
