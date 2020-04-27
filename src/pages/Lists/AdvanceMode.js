import React, { useState } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography } from "@material-ui/core";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import styles from "./AdvanceMode.scss";
import Colors from "./Colors";
import White from "./White";
export default function AdvanceMode(props) {
  const [open, setOpen] = useState(true);
  const [currentTab, setTab] = useState(0);
  const { light, setRGB, setCT } = props;

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <div className={styles.advanceMode}>
      <div className={styles.advanceModeLabel} onClick={() => setOpen(!open)}>
        <Typography>Advance Mode</Typography>
        <ExpandMoreOutlinedIcon />
      </div>

      {open && (
        <div className={styles.advanceContainer}>
          <Tabs value={currentTab} onChange={handleChange}>
            <Tab label="Colors" />
            <Tab label="White" />
          </Tabs>
          <TabPanel value={currentTab} index={0}>
            <Colors light={light} setRGB={setRGB} />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <White light={light} setCT={setCT} />
          </TabPanel>
        </div>
      )}
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Typography>
  );
}