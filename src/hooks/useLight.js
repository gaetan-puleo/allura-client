import {useEffect, useState} from 'react';

export default function useLight (id) {
    const [name, setName] = useState('');

    useEffect(() => {
        const localName = localStorage.getItem(`light-${id}`);
        
        // if name is not set
        if(!name) {
            // check if the name is set in localStorage
            if(localName) {
                // get the name and store it in the state
                setName(localStorage.getItem(`light-${id}`))
            }
        }
        // else set new name in localStage (used normally only when the name is updated with setName)
        else {
            localStorage.setItem(`light-${id}`, name)
        }
        
        
    }, [name, id])

    return {name, setName};
}