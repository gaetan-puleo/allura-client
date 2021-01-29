import React, {useState} from "react";
import PowerButton from "../PowerButton";
import { useHistory } from "react-router-dom";
import BrightnessSlider from "../BrightnessSlider";

export default function Card({ light, setPower, setBright }) {
  const { power, rgb } = light;
  const history = useHistory();
  const [checked, setChecked] = useState(false);
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
        <p>{light.id}</p>
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
