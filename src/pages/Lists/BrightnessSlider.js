import React, { useState } from "react";
import {Range, getTrackBackground} from 'react-range';

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
          className='w-full h-4 rounded-lg'
            style={
              {
                background: getTrackBackground({
                  values: [sliderBright],
                  colors: ['#548BF4', '#ccc'],
                  min: MIN,
                  max: MAX
                }),
              }
            }
          >
          {children}</div>
        </div>
      }}
      renderThumb={({props, children}) => {
        return <div {...props} className='w-4 h-4 bg-gray-100 rounded-full' >
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
