import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default function Model() {
  const gltf = useLoader(GLTFLoader, "/Textures/HeartMadeOfStrings/scene.gltf");
  gltf.scene.scale.set(20, 20, 20);
  return (
    <>
      <primitive position={[0, -70, 0]} object={gltf.scene} dispose={null} />
    </>
  );
}
