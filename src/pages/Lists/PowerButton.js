import React from "react";
import Switch from "@material-ui/core/Switch";

export default function PowerButton({ light, setPower, className }) {
  return (
    <Switch
      className={`${className}`}
      checked={light.power}
      onClick={(e) => {
        e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
      }}
      onChange={(e) => {
        setPower({ power: e.target.checked, id: light.id });
        window.navigator.vibrate(100);
      }}
      color="primary"
    />
  );
}

PowerButton.defaultProps = {
  className: "",
};
