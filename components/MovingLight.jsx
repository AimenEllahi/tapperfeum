import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const MovingLight = () => {
  const lightRef = useRef();

  useFrame((state, delta) => {
    if (lightRef.current) {
      const time = state.clock.elapsedTime;
      const radius = 25;
      const xPos = radius * Math.cos(time * 0.5);
      const zPos = radius * Math.sin(time * 0.5);
      lightRef.current.position.set(xPos, 10, zPos);
    }
  });

  return <pointLight ref={lightRef} intensity={5} color="white" />;
};

export default MovingLight;
