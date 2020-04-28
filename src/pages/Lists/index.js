import React, { useState } from "react";
import useLights from "../../hooks/useLights";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import IconButton from "@material-ui/core/IconButton";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import { Typography } from "@material-ui/core";
import AdvancedMode from "./AdvancedMode";
import Brightness from "./Brightness";

import styles from "./index.scss";

export default function Lights(props) {
  const { lights, setPower, setBright, setRGB, setCT } = useLights();

  return (
    <div className={styles.list}>
      {Object.values(lights).map((light) => {
        const { power, bright } = light;

        return (
          <div
            className={`${styles.item} ${power ? styles.power : ""}`}
            key={light.id}
          >
            <div className={styles.labelGroup}>
              <EmojiObjectsIcon
                className={styles.bulb}
                fontSize={"large"}
                htmlColor="#ccc"
              />
              <div>
                <Typography> id: {light.id}</Typography>
                <Typography variant="body2" className={styles.powerOnOff}>
                  {light.power ? "On" : "Off"}
                </Typography>
              </div>
            </div>

            {power && <Brightness light={light} setBright={setBright} />}
            <IconButton
              style={{
                background: power ? "#f1c40f" : "#ccc",
                color: "#fff",
              }}
              onClick={() => {
                setPower({ id: light.id, power: !light.power });
              }}
            >
              <PowerSettingsNewOutlinedIcon />
            </IconButton>
            {power && (
              <AdvancedMode setRGB={setRGB} light={light} setCT={setCT} />
            )}
          </div>
        );
      })}
    </div>
  );
}
