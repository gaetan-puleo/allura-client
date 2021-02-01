import React, { useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import AdvancedMode from "./AdvancedMode";
import BrightnessSlider from "../Lists/BrightnessSlider";
import PowerButton from "../Lists/PowerButton";
import CircleButton from '../../components/CircleButton'
import {FiArrowLeft} from 'react-icons/fi'
import {MdWbSunny} from 'react-icons/md';
import {FaPen, FaSave} from 'react-icons/fa';
import useLight from '../../hooks/useLight';
import {RiAlarmWarningFill} from 'react-icons/ri';

export default function Light({ lights, setRGB, setBright, setPower, setCT }) {
  const history = useHistory();
  const { id } = useParams();
  const {name, setName} = useLight(id);
  const light = lights[id];
  // input text
  const [edit, setEdit] = useState('')
  // editable mode
  const [editable, setEditable] = useState(false);

  if (!light) {
    return <div>Not Found</div>;
  }
  return (
    <>
        <header className='flex w-full items-center h-12 px-4'>
          <CircleButton className='mr-4' onClick={() => history.goBack()}><FiArrowLeft className='w-6 h-6' /></CircleButton>
          {!editable && <div>{name || id}</div>}
          {editable && <input 
            className={' p-1 bg-gray-900 border-b border-gray-500 border-solid focus:border-gray-300'} 
            placeholder='enter a new name' 
            type='text' 
            onChange={(e) => setEdit(e.target.value)} 
            value={edit}/>}
          {!editable && <CircleButton className='ml-auto' onClick={() => {
            setEditable(true); 
            setEdit(name)
            }}><FaPen /></CircleButton>}
          {editable && <CircleButton className='ml-auto' onClick={() => {
              //close input
              setEditable(false);
              // set name to localstorage
              setName(edit);
            }}><FaSave />
            </CircleButton>}
          <PowerButton
            className={'ml-4'}
            light={light}
            setPower={setPower}
          />
      </header>
   
      <AdvancedMode light={light} setRGB={setRGB} setCT={setCT} />
      <div className={'mt-6 flex items-center px-10'}>
        <MdWbSunny className={'mr-2 h-6 w-6 '} />
        <BrightnessSlider light={light} setBright={setBright} />
      </div>
    </>
  );
}
