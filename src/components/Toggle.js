import React from 'react';

export default function Switch (props) {
    const {id, name, checked, onChange, className} = props;
    const toggleThumb = checked ? 'right-0' : 'right-100';
    const toggleBackgroud = checked ? 'bg-blue-400' : '';
    return <>
        <div
            onClick={(e) => e.stopPropagation()}
            className={"relative inline-block w-10 align-middle select-none transition duration-200 ease-in " + className}>
            <input type="checkbox" onChange={onChange} checked={checked} name={name} id={id} className={`shadow-lg absolute block w-6 h-6 rounded-full bg-white appearance-none cursor-pointer ${toggleThumb}`}/>
            <label htmlFor={name} className={`block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${toggleBackgroud} `}></label>
        </div>
    </>
}