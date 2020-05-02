import React, { useState } from "react";
import KelvinPicker from "../../components/KelvinPicker";
import styles from "./White.scss";

export default function White(props) {
  const { light, setRGB } = props;
  const [localCT, setLocalCT] = useState(
    Number(localStorage.getItem("ct" + light.id)) || 5000
  );
  return (
    <div className={styles.white}>
      <div className={styles.picker}>
        <KelvinPicker
          color={light.rgb}
          onChange={(c) => setRGB({ rgb: c.rgb, id: light.id })}
        />
      </div>
    </div>
  );
}
