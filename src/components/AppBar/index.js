import React from 'react';

export default function AppBar (props) {
    const {left, right} = props;
    return <header className="flex w-full items-center h-12 px-4">
        {left && <div className='flex items-center'>{left}</div>}
        {right && <div className="ml-auto flex items-center">{right}</div>}
    </header>
}