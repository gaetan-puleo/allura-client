import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import AdvancedMode from "./AdvancedMode";
import BrightnessSlider from "../Lists/BrightnessSlider";
import PowerButton from "../Lists/PowerButton";
import CircleButton from '../../components/CircleButton'
import {FiArrowLeft} from 'react-icons/fi'
import {MdWbSunny} from 'react-icons/md';

export default function Light({ lights, setRGB, setBright, setPower, setCT }) {
  const history = useHistory();
  const { id } = useParams();
  const light = lights[id];
  if (!light) {
    return <div>Not Found</div>;
  }
  return (
    <>
      <header className='flex w-full items-center h-12 px-4'>
        <CircleButton onClick={() => history.goBack()}><FiArrowLeft className='w-6 h-6' /></CircleButton>
          <PowerButton
            className={'ml-auto'}
            light={light}
            setPower={setPower}
          />
      </header>
   
      <AdvancedMode light={light} setRGB={setRGB} setCT={setCT} />
      <div className={'mt-6 flex items-center px-10'}>
        <MdWbSunny className={'mr-4'} />
        <BrightnessSlider light={light} setBright={setBright} />
      </div>
    </>
  );
}
