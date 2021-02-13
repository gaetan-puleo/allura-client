import React, {useState} from "react";
import PowerButton from "../PowerButton";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import BrightnessSlider from "../BrightnessSlider";
import {FaTrash} from 'react-icons/fa';
import CircleButton from '../../../components/CircleButton'
import {removeLightGroup} from '../../../services/groups'

export default function Card({ lights, name, setPower, groupId , deleteGroup}) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  // const [deleted, setDeleted] = useState(false)
  // const { power, rgb } = light;
  const history = useHistory();
  // const border = power
  //   ? `4px solid rgba(${rgb.r},${rgb.g},${rgb.b}, 1 )`
  //   : `4px solid transparent`;
  // const deleteGroup = () => {
  //   setDeleted(true);
  //   removeLightGroup(groupId);
  // }
  console.log(name)

  return (
    <section
      onClick={() => history.push('light-group/' + groupId)}
      className='shadow p-4 w-full'
    >
      <header className='flex items-center'>
        {!isEditing && <div>{groupId || name}</div>}
        {isEditing && <div><input autoFocus value={tempName}  /></div>}
        {/* <PowerButton
          className="ml-auto"
          light={light}
          setPower={setPower}
        /> */}
        <CircleButton className='ml-auto' onClick={(evt) => {
            evt.stopPropagation();
            deleteGroup()
          }}>
            <FaTrash className='w-4 h-4' />
        </CircleButton>

      </header>

      {/* {power && <BrightnessSlider light={light} setBright={setBright} />} */}
    </section>
  );
}
