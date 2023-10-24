import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html className="text-xl mt-20 w-20" center>
      {progress} %
    </Html>
  );
};

export default Loader;
