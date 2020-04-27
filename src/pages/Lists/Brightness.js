import React, { useState } from "react";

import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import { Slider } from "@material-ui/core";
import styles from "./Brightness.scss";
import stylesSlider from "./SliderBrightness.scss";
export default function Brightness(props) {
  const { light, setBright } = props;
  const [sliderBright, setSlideBright] = useState(light.bright);
  return (
    <div className={styles.brightness}>
      <WbSunnyOutlinedIcon style={{ marginRight: 8 }} />
      <Slider
        valueLabelDisplay="auto"
        style={{
          color: "#f1c40f",
        }}
        onChange={(e, val) => setSlideBright(val)}
        value={sliderBright}
        min={0}
        max={100}
        onChangeCommitted={(e, val) => setBright({ bright: val, id: light.id })}
      />
    </div>
  );
}
