import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import styles from "./White.scss";
import SliderBrightness from "./SliderBrightness.scss";

export default function White(props) {
  const { light, setCT } = props;
  const [localCT, setLocalCT] = useState(
    Number(localStorage.getItem("ct" + light.id)) || 5000
  );
  return (
    <div className={styles.white}>
      Color Temperature
      <div className={styles.slider}>
        <Slider
          classes={SliderBrightness}
          onChangeCommitted={(e, ct) => {
            setCT({ id: light.id, ct });
            localStorage.setItem("ct" + light.id, ct);
          }}
          onChange={(e, ct) => setLocalCT(ct)}
          value={localCT}
          min={1700}
          max={6500}
        />
      </div>
    </div>
  );
}
