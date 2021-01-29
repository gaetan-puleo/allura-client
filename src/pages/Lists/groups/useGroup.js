import { useState, useEffect } from "react";
import {listLightGroups, setLightGroup, removeLightGroup} from "../../../services/groups";
export default function useGroups() {
    const [groups, setGroups] = useState(null);

    const upsertGroup = (name, lights = []) => {
        setLightGroup(name, lights);
        const newGroups = {...groups};
        newGroups[name] = [name,  lights];
        setGroups(newGroups);
    };

    const deleteGroup = (name) => {
        removeLightGroup(name);
        const newGroups = {...groups};
        delete newGroups[name];
        setGroups(newGroups)
    };

    useEffect(() => {
        if(!groups) {
            // set the group
            setGroups(listLightGroups().reduce((acc, current) => {
                return {...acc, [current[0]] : current[1]}
            }, {}))
        }
    }, [groups, upsertGroup, deleteGroup])

    

    return {groups, upsertGroup, deleteGroup}
}