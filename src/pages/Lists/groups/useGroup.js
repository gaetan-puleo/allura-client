import { useState, useEffect } from "react";
import {
    listLightGroups, 
    setLightGroup, 
    removeLightGroup
} from "../../../services/groups";
export default function useGroups() {
    const [groups, setGroups] = useState(null);

    const upsertGroup = (id, group) => {
        setLightGroup(id, group);
        const newGroups = {...groups};
        newGroups[id] = {
            id, 
            lights:group.lights,
            name: group.name
        };
        setGroups(newGroups);
    };

    const deleteGroup = (id) => {
        removeLightGroup(id);
        const newGroups = {...groups};
        delete newGroups[id];
        setGroups(newGroups)
    };

    useEffect(() => {
        if(!groups) {
            // set the group
            setGroups(listLightGroups().reduce((acc, current) => {
                return {...acc, [current.id] : current}
            }, {}))
        }
    }, [groups, upsertGroup, deleteGroup])

    

    return {groups, upsertGroup, deleteGroup}
}