import React from 'react';

export function Tabs(props) {
    return <nav className='flex w-full'>
        {props.children}
    </nav>
}

export function Tab(props) {
    const isActive = props.active ? ' border-red-400' : 'border-transparent'
    return <div onClick={props.onChange} className={`flex-1 p-4 border-b-4 font-bold uppercase text-sm ${isActive}`}>{props.label}</div>
}