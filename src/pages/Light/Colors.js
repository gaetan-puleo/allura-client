import React, { useState, useEffect, useRef } from "react";
import styles from "./Colors.scss";
import iro from "@jaames/iro";
import { Typography } from "@material-ui/core";

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
    <div className={styles.colors}>
      <div className={styles.choose}>
        <div className={styles.label}></div>
        <div className={styles.huePicker} ref={pickerRef}></div>
      </div>
    </div>
  );
}
