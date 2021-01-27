import React, { useState } from "react";
import KelvinPicker from "../../components/KelvinPicker";

export default function White(props) {
  const { light, setRGB, setCT } = props;
  const [localCT, setLocalCT] = useState(
    Number(localStorage.getItem("ct" + light.id)) || 5000
  );
  return (
    <div className={'mt-4'}>
      <div className={'mt-8 flex justify-center'}>
        <KelvinPicker
          color={light.rgb}
          onChange={(c) => {
            setCT({ ct: c.kelvin, id: light.id });
          }}
        />
      </div>
    </div>
  );
}
