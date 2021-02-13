import React, {useState} from 'react';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';
import Card from './Card';
import useGroups from './useGroup';

export default function Groups (props) {
    const {groups, upsertGroup, deleteGroup} = useGroups();

    lightGroups = groups ? Object.values(groups) : [];
    const {lights, setBright, setPower} = props;
    const [show, setShow] = useState(true)
    return (
    <section className='w-full my-4'>
        <header onClick={() => setShow(!show)} className='select-none w-full h-6 font-bold font-lg flex justify-center items-center mb-4'>
            <h2 className="w-full text-left">All Groups</h2>
            {show && <FaAngleUp />}
            {!show && <FaAngleDown />}
        </header>
        {show && <div className='w-full'>
            { 
                lightGroups.map(({id, lights:lightsIds, name}) => {
                    return (
                    <Card 
                        name={name}
                        key={id} 
                        groupId={id} 
                        deleteGroup={deleteGroup.bind(null, id)} 
                        lights={Object.values(lights).filter(light => lightsIds.includes(light))} 
                    />
                    )
                })
            } 
            <footer>
                <button className='bg-blue-600 border-none py-3 px-8 rounded-3xl focus:outline-none active:bg-blue-500 mt-4 mx-auto block' onClick={() => {
                    const groupId = `group_${Date.now()}`
                    upsertGroup(groupId, {lights:[]})
                }}>Add a Group</button>
            </footer>
        </div>}
    </section>
    )
}