import React, { useRef } from "react";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";
import { quotes } from "./QuotesData";
import "./Quote.css";
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={5} color='red' />
      <directionalLight position={[0, 10, 0]} intensity={5} color='red' />
    </>
  );
};
const HeartModel = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const rotation = clock.getElapsedTime();

    ref.current.rotation.y = rotation / 3;
  });
  return (
    <mesh ref={ref}>
      <Model />
    </mesh>
  );
};
export default function Quote() {
  return (
    <div className='quoteSection'>
      <Canvas colorManagement camera={{ position: [50, 50, 120], fov: 70 }}>
        <Suspense fallback={null}>
          <Lights />
          <HeartModel />
        </Suspense>
      </Canvas>
      <div className='quoteTextBox'>
        <span className='quote'>
          {quotes[Math.floor(Math.random() * quotes.length)]}
        </span>
      </div>
      <hr
        style={{
          marginBottom: "50px",
          width: "92%",
          color: "lightgrey",
          border: "4px solid lighgrey",
        }}
      ></hr>
    </div>
  );
}
