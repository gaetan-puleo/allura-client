import React from "react";
import WhitePicker from "../../components/WhitePicker";

export default function White(props) {
  const { light, setCT } = props;

  return (
    <div className={'mt-4'}>
      <div className={'mt-8 flex justify-center'}>
        <WhitePicker
          color={light.rgb}
          onChange={(c) => {
            setCT({ ct: c.kelvin, id: light.id });
          }}
        />
      </div>
    </div>
  );
}
