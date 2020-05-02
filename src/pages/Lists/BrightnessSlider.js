import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import styles from "./BrightnessSlider.scss";

export default function BrightnessSlider(props) {
  const { light, setBright } = props;

  const [sliderBright, setSlideBright] = useState(light.bright);
  return (
    <Slider
      onClick={(e) => e.stopPropagation()}
      classes={styles}
      min={0}
      max={100}
      value={sliderBright}
      onChange={(e, val) => setSlideBright(val)}
      onChangeCommitted={(e, val) => setBright({ bright: val, id: light.id })}
    />
  );
}
