import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Scene from "@/components/scene";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Scene />
      <Footer />
    </div>
  );
}
