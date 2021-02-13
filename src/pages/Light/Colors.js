import React from "react";
import ColorPicker from '../../components/ColorPicker';

export default function Colors(props) {
  const { setRGB, light } = props;

  return (
    <div className='mt-4'>
      <div className='width-full'>
        <div className='mt-8 flex relative justify-center width-full'>
        <ColorPicker color={light.rgb} onChange={(c) =>
          setRGB({ rgb: c.rgb, id: light.id })
        }/>
        </div>
      </div>
    </div>
  );
}
