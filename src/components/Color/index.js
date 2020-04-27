import React, { useState } from "react";
import { HuePicker } from "react-color";

const types = {
  hue: HuePicker
}
export default function ColorPicker({ color, onChange }) {
  return <[hue] color={color} onChangeComplete={onChange} />;
}
