import React from 'react';

export default function Button (props) {
    const {children, ...rest} = props;
    return (<button
        {...rest}
        className='bg-blue-600 border-none py-3 px-8 rounded-3xl focus:outline-none active:bg-blue-500 mt-4 mx-auto block focus:ring-4 active:ring-transparent'>
            {children}
    </button>)
}