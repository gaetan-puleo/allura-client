import React, { useState } from "react";
import {Range} from 'react-range';

const MIN = 0;
const MAX = 100;
export default function BrightnessSlider(props) {
  const { light, setBright } = props;

  const [sliderBright, setSlideBright] = useState(light.bright);
  return (
    <Range
      renderTrack={({props, children}) => {
        return <div 
          onClick={(e) => e.stopPropagation()}
          style={props.style}
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className={'w-full h-6 relative flex items-center my-4'}
        >
          <div ref={props.ref}
          className='w-full h-6 '
            style={
              {
                background: `linear-gradient(to right,rgba(255,255,255,0.1) 0%, rgba(255,255,255,${sliderBright / 100}) ${sliderBright}%, #010101 ${sliderBright}% ,#010101 100%)`,
              }
            }
          >
          {children}</div>
        </div>
      }}
      renderThumb={({props, children}) => {
        return <div {...props} className='w-6 h-6 bg-gray-100 rounded-full' >
          {children}
        </div>
      }}
      min={MIN}
      max={MAX}
      values={[sliderBright]}
      onChange={(values) => setSlideBright(values[0])}
      onFinalChange={(values) => setBright({ bright: values[0], id: light.id })}
    />
  );
}
