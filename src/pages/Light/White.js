import React, { useState } from "react";
import KelvinPicker from "../../components/KelvinPicker";
import styles from "./White.scss";

export default function White(props) {
  const { light, setRGB, setCT } = props;
  const [localCT, setLocalCT] = useState(
    Number(localStorage.getItem("ct" + light.id)) || 5000
  );
  return (
    <div className={styles.white}>
      <div className={styles.picker}>
        <KelvinPicker
          color={light.rgb}
          onChange={(c) => {
            setCT({ ct: c.kelvin, id: light.id });
          }}
        />
      </div>
    </div>
  );
}
