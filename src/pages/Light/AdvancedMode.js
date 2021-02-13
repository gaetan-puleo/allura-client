import React, { useState } from "react";
import {Tabs, Tab} from '../../components/Tabs';
import Colors from "./Colors";
import White from "./White";
import BrightnessSlider from "../Lists/BrightnessSlider";
import {MdWbSunny} from 'react-icons/md';

export default function AdvancedMode(props) {
  const [currentTab, setTab] = useState(0);
  const { setCT, light, setRGB, setBright } = props;

  return (
    <div className={'flex flex-wrap items-center w-full'}>
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
          <div className={'mt-6 flex items-center px-10'}>
            <MdWbSunny className='mr-2 h-6 w-6 ' />
            <BrightnessSlider light={light} setBright={setBright} />
          </div>

        </div>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index} = props;

  return (
    <div>
      {value === index && <div>{children}</div>}
    </div>
  );
}
