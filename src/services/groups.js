export function removeLightGroup(name) {
    localStorage.removeItem(name);
}

export function getLightGroup(id) {
    JSON.parse(localStorage.getItem(id));
}

export function setLightGroup(id, {lights, name = ''}) {
    localStorage.setItem(id, JSON.stringify({name, id, lights}))
}

export function listLightGroups() {
    return Object.entries(localStorage)
    .filter(([key]) => key.substring(0,5) === 'group')
    .map(([key,values]) => JSON.parse(values))
} 