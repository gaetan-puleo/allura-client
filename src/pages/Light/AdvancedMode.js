import React, { useState } from "react";
import {Tabs, Tab} from '../../components/Tabs';
import Colors from "./Colors";
import White from "./White";

export default function AdvancedMode(props) {
  const [open, setOpen] = useState(true);
  const [currentTab, setTab] = useState(0);
  const { setCT, light, setRGB } = props;

  return (
    <div className={'flex flex-wrap items-center w-full'}>
      {open && (
        <div className={'w-full'}>
          <Tabs value={currentTab} variant="fullWidth" >
            <Tab label="Colors" active={currentTab === 0} onChange={setTab.bind(null, 0)}/>
            <Tab label="White" active={currentTab === 1} onChange={setTab.bind(null, 1)}/>
          </Tabs>
          <TabPanel value={currentTab} index={0}>
            <Colors light={light} setRGB={setRGB} />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <White light={light} setRGB={setRGB} setCT={setCT} />
          </TabPanel>
        </div>
      )}
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && <div>{children}</div>}
    </div>
  );
}
