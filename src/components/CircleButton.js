import React from 'react';

export default function CircleButton (props) {
    return <button onClick={props.onClick} className={`rounded-full w-8 h-8 flex items-center justify-center active:bg-gray-700 active:ring-transparent focus:ring-4 focus:ring-4 focus:outline-none ${props.className}`}>{props.children}</button>
}