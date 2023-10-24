import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";
import { PresentationControls } from "@react-three/drei";
import { gsap } from "gsap";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/Models/TP_World.glb");
  const model = useRef();

  return (
    <PresentationControls polar={[0, 0]}>
      <primitive
        ref={model}
        object={gltf.scene}
        scale={0.028}
        position={[-0.04, -0.20999999999999996, 2.800000000000001]}
        rotation={[0.26, -0.36000000000000015, 3.469446951953614e-18]}
      />
    </PresentationControls>
  );
};

export default Model;
