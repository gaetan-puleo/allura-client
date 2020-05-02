import React, { useState } from "react";
import styles from "./index.scss";
import Card from "./Card";

export default function Lights(props) {
  const { lights, setPower, setBright } = props;
  return (
    <div className={styles.list}>
      {Object.values(lights).map((light) => {
        return <Card light={light} setPower={setPower} setBright={setBright} />;
      })}
    </div>
  );
}
