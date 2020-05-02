import React from "react";
import { useParams } from "react-router-dom";
import AdvancedMode from "./AdvancedMode";
import Card from "../Lists/Card";

export default function Light({ lights, setRGB }) {
  const { id } = useParams();
  const light = lights[id];
  if (!light) {
    return <div>Not Found</div>;
  }
  return (
    <>
      <AdvancedMode light={light} setRGB={setRGB} />
    </>
  );
}
