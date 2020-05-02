import React from "react";
import Typography from "@material-ui/core/Typography";
import PowerButton from "./PowerButton";
import styles from "./Card.scss";
import { useHistory } from "react-router-dom";
import BrightnessSlider from "./BrightnessSlider";

export default function Card({ light, setPower, setBright }) {
  const { power, rgb } = light;
  const history = useHistory();
  const border = power
    ? `4px solid rgba(${rgb.r},${rgb.g},${rgb.b}, 1 )`
    : `4px solid transparent`;
  return (
    <section
      className={styles.card}
      onClick={() => {
        history.push("/light/" + light.id);
      }}
      style={{
        borderLeft: border,
      }}
    >
      <header className={styles.header}>
        <Typography>{light.id}</Typography>
        <PowerButton
          className={styles.power}
          light={light}
          setPower={setPower}
        />
      </header>

      {power && <BrightnessSlider light={light} setBright={setBright} />}
    </section>
  );
}
