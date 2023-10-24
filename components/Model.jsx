import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useControls } from "leva";
import { PresentationControls } from "@react-three/drei";
import { gsap } from "gsap";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/Models/TP_World.glb");
  const model = useRef();
  useEffect(() => {
    gsap.to(model.current.rotation, {
      x: 0.36,
      y: -0.36000000000000015,
      z: 3.469446951953614e-18,
      duration: 1,

      ease: "power1.inOut",
    });
  }, []);

  // const { pos, rot } = useControls("belle", {
  //   pos: {
  //     value: [-0.04, -0.20999999999999996, 2.800000000000001],
  //     step: 0.01,
  //   },
  //   rot: {
  //     value: [0.36, -0.36000000000000015, 3.469446951953614e-18],
  //     step: 0.01,
  //   },
  // });

  return (
    <primitive
      ref={model}
      object={gltf.scene}
      scale={0.028}
      position={[-0.04, -0.20999999999999996, 2.800000000000001]}
      rotation={[0.36, -1.36000000000000015, 3.469446951953614e-18]}
    />
  );
};

export default Model;
