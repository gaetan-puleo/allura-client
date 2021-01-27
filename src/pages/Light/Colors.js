import React, { useState, useEffect, useRef } from "react";
import iro from "@jaames/iro";

export default function Colors(props) {
  const { setRGB, light } = props;
  const [localRGB, setLocaRGB] = useState(light.rgb);
  const pickerRef = useRef(null);
  const picker = useRef(null);
  useEffect(() => {
    if (pickerRef.current && !picker.current) {
      picker.current = new iro.ColorPicker(pickerRef.current, {
        // layout: [{ component: iro.ui.Wheel }],
        color: light.rgb,
      });
      picker.current.on("input:end", (c) =>
        setRGB({ rgb: c.rgb, id: light.id })
      );
    }
  }, [pickerRef.current]);
  return (
    <div className={'mt-4'}>
      <div className={'width-full'}>
        <div className={'mt-8 flex relative justify-center width-full'} ref={pickerRef}></div>
      </div>
    </div>
  );
}
