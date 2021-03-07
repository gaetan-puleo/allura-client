import React, {useState} from 'react';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';
import Card from './Card';
import useGroups from './useGroup';
import Button from '../../../components/Button';

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
                <Button onClick={() => {
                    const groupId = `group_${Date.now()}`
                    upsertGroup(groupId, {lights:[]})
                }}>Add a Group</Button>
            </footer>
        </div>}
    </section>
    )
}