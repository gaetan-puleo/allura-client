import React from "react";
import { useParams, useHistory } from "react-router-dom";
import AdvancedMode from "./AdvancedMode";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "../Lists/Card";
import AppBar from "@material-ui/core/AppBar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import BrightnessSlider from "../Lists/BrightnessSlider";
import PowerButton from "../Lists/PowerButton";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import styles from "./index.scss";
export default function Light({ lights, setRGB, setBright, setPower }) {
  const history = useHistory();
  const { id } = useParams();
  const light = lights[id];
  if (!light) {
    return <div>Not Found</div>;
  }
  return (
    <>
      <AppBar position="static" color={"transparent"} elevation={0}>
        <Toolbar>
          <IconButton edge="start" onClick={() => history.goBack()}>
            <ArrowBackIcon style={{ color: "#fff" }} />
          </IconButton>
          <PowerButton
            className={styles.power}
            light={light}
            setPower={setPower}
          />
        </Toolbar>
      </AppBar>
      <AdvancedMode light={light} setRGB={setRGB} />
      <div className={styles.brightness}>
        <WbSunnyIcon className={styles.sun} />
        <BrightnessSlider light={light} setBright={setBright} />
      </div>
    </>
  );
}
