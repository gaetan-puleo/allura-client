import React, {useState} from 'react';
import Card from "./Card";
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';

export default function Lights (props) {
    const {lights, setBright, setPower} = props;
    const [show, setShow] = useState(true)
    return (
    <section className="w-full my-4">
        <header onClick={() => setShow(!show)} className='select-none w-full h-6 font-bold font-lg flex justify-center items-center mb-4'>
            <h2 className="w-full text-left">All Lights</h2>
            {show && <FaAngleUp />}
            {!show && <FaAngleDown />}
        </header>
        {show && <div className='w-full'>
            {Object.values(lights).map((light) => {
            return <Card 
                key={light.id} 
                light={light} 
                setPower={setPower} 
                setBright={setBright} />;
            })}
        </div>}
    </section>
    )
}