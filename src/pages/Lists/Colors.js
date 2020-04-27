import React, { useState } from "react";
import styles from "./Colors.scss";
import { HuePicker, CirclePicker } from "react-color";
import { Typography } from "@material-ui/core";

export default function Colors(props) {
  const { setRGB, light } = props;
  const [localRGB, setLocaRGB] = useState(light.rgb);
  return (
    <div className={styles.colors}>
      {/* <div> */}
      {/* <div className={styles.label}> */}
      {/*   <Typography>Predefined colors</Typography> */}
      {/* </div> */}
      {/* <CirclePicker */}
      {/*   onChangeComplete={({ rgb }) => { */}
      {/*     setRGB({ rgb, id: light.id }); */}
      {/*     setLocaRGB(rgb); */}
      {/*   }} */}
      {/*   width={400} */}
      {/*   colors={[ */}
      {/*     "#f44336", */}
      {/*     "#e91e63", */}
      {/*     "#9c27b0", */}
      {/*     "#3f51b5", */}
      {/*     "#03a9f4", */}
      {/*     "#00bcd4", */}
      {/*     "#8bc34a", */}
      {/*     "#ffeb3b", */}
      {/*     "#ff9800", */}
      {/*   ]} */}
      {/* /> */}
      {/* </div> */}
      <div className={styles.choose}>
        <div className={styles.label}>
          <Typography>Choose a color</Typography>
        </div>
        <HuePicker
          className={styles.huePicker}
          onChange={({ rgb }) => setLocaRGB(rgb)}
          color={localRGB}
          onChangeComplete={({ rgb }) => setRGB({ rgb, id: light.id })}
        />
      </div>
    </div>
  );
}
