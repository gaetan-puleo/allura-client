import React from "react";
import PowerButton from "../PowerButton";
import { useHistory } from "react-router-dom";
import BrightnessSlider from "../BrightnessSlider";
import useLight from '../../../hooks/useLight';

export default function Card({ light, setPower, setBright }) {
  const { power, rgb } = light;
  const history = useHistory();
  const {name} = useLight(light.id);
  const border = power
    ? `4px solid rgba(${rgb.r},${rgb.g},${rgb.b}, 1 )`
    : `4px solid transparent`;
  return (
    <section
      className='shadow p-4 w-full'
      onClick={() => {
        history.push("/light/" + light.id);
      }}
      style={{
        borderLeft: border,
      }}
    >
      <header className='flex items-center'>
        <p>{name || light.id}</p>
        <PowerButton
          className="ml-auto"
          light={light}
          setPower={setPower}
        />
      </header>

      {power && <BrightnessSlider light={light} setBright={setBright} />}
    </section>
  );
}
