import React from "react";
import Toggle from '../../components/Toggle'
export default function PowerButton({ light, setPower, className }) {
  return (
    <Toggle
      id={light.id}
      name={light.id}
      className={className}
      checked={light.power}
      onClick={(e) => {
        e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
      }}
      onChange={(e) => {
        setPower({ power: e.target.checked, id: light.id });
        window.navigator.vibrate(100);
      }}
    />
  );
}

PowerButton.defaultProps = {
  className: "",
};
