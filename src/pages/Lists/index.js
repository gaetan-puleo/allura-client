import React from "react";
import Lights from './lights';
import Groups from './groups';

export default function Lists(props) {
  const { lights, setPower, setBright } = props;

  return (
    <div className={'w-full flex flex-col items-center p-4'}>
      <Lights lights={lights} setPower={setPower} setBright={setBright}  />
      <Groups lights={lights} setPower={setPower} setBright={setBright}  />
    </div>
  );
}
