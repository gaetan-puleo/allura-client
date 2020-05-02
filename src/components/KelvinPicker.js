import React, { useRef, useEffect } from "react";
import iro from "@jaames/iro";

export default function KelvinPicker({ color, onChange }) {
  const pickerRef = useRef(null);
  const picker = useRef(null);
  useEffect(() => {
    if (pickerRef.current && !picker.current) {
      picker.current = new iro.ColorPicker(pickerRef.current, {
        layout: [
          {
            component: iro.ui.Slider,
            options: {
              sliderType: "kelvin",
              sliderShape: "circle",
            },
          },
        ],
        color: color,
      });
      picker.current.on("input:end", onChange);
    }
  }, [pickerRef.current]);
  return <div ref={pickerRef}></div>;
}
