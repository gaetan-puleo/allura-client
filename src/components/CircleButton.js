import React from 'react';

export default function CircleButton (props) {
    return <button onClick={props.onClick} className="rounded-full w-8 h-8 flex items-center justify-center focus:ring-4 focus:outline-none">{props.children}</button>
}