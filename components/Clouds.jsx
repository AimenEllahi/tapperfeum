import React, { useRef, useEffect } from "react";
import { useControls } from "leva";
import { Cloud } from "@react-three/drei";
import { gsap } from "gsap";

const Clounds = () => {
  const clouds = [
    {
      pos: [10.799999999999994, -0.30000000000000004, -5.399999999999999],
      rot: [0.2, 0, 0],
      color: "white",
    },
    {
      pos: [0.2999999999999831, -0.30000000000000004, -1.3999999999999875],

      rot: [0.1, 0.2, 0],
      color: "pink",
    },

    {
      pos: [-10.899999999999986, -0.30000000000000004, -5.799999999999998],
      rot: [0.2, 0, 0],
      color: "pink",
    },
    // { pos: [-4.5, -4.8, 2], rot: [0.1, 0.2, 0], color: "pink" },
    // { pos: [0, 4, -10], rot: [0.2, 0, 0], color: "white" },
    { pos: [8.1, 0, -13], rot: [0.1, 0.2, 0], color: "#C0C0C0" },
    //{ pos: [3, 3.5, -15], rot: [0.1, 0.2, 0], color: 'white' },
    { pos: [-3, 5, -13], rot: [0.2, 0, 0], color: "#C0C0C0" },
    { pos: [8, 5.5, -12], rot: [0.1, 0.2, 0], color: "#C0C0C0" },
    { pos: [-7, 4.5, -15], rot: [0.1, 0.2, 0], color: "white" },
    { pos: [-15, 5, -13], rot: [0.2, 0, 0], color: "#F675A8" },
    { pos: [15, 5.5, -12], rot: [0.1, 0.2, 0], color: "#C0C0C0" },
    { pos: [-16, 5.5, -12], rot: [0.1, 0.2, 0], color: "#C0C0C0" },
    { pos: [-18, 4.5, -15], rot: [0.1, 0.2, 0], color: "#F675A8" },
    { pos: [-20, 4.5, -17], rot: [0.1, 0.2, 0], color: "#F675A8" },
    { pos: [12, 6, -18], rot: [0.15, 0, 0], color: "#C0C0C0" },
    { pos: [18, 6, -17], rot: [0.1, 0.1, 0], color: "#F675A8" },
    { pos: [-8, 4.5, -15], rot: [0.2, 0.15, 0], color: "#C0C0C0" },
    { pos: [-12, 5, -18], rot: [0.1, 0.1, 0], color: "#C0C0C0" },
    { pos: [20, 6, -16], rot: [0.12, 0.18, 0], color: "#F675A8" },
    { pos: [-20, 5, -18], rot: [0.1, 0.2, 0], color: "pink" },
    { pos: [22, 4.5, -17], rot: [0.15, 0.1, 0], color: "#C0C0C0" },
    { pos: [-24, 5, -14], rot: [0.1, 0.1, 0], color: "#C0C0C0" },
    { pos: [-18, 6.5, -18], rot: [0.1, 0.2, 0], color: "white" },
    { pos: [-22, 6.5, -17], rot: [0.12, 0.18, 0], color: "pink" },
    { pos: [28, 6, -19], rot: [0.1, 0.2, 0], color: "white" },
    { pos: [30, 4.5, -15], rot: [0.2, 0.1, 0], color: "#C0C0C0" },

    // Add more clouds here with different positions, rotations, and colors
  ];
  return (
    <>
      {clouds.map((cloud, index) => (
        <Cloud
          key={index}
          position={cloud.pos}
          rotation={cloud.rot}
          opacity={5}
          speed={0.4} // Rotation speed
          width={0.05} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={2} // Number of particles
          color={cloud.color} // Cloud color
          scale={cloud.scale}
        />
      ))}
    </>
  );
};

export default Clounds;
