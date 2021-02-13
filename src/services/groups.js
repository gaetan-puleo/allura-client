export function removeLightGroup(name) {
    localStorage.removeItem(name);
}

export function getLightGroup(name) {
    JSON.parse(localStorage.getItem(name));
}

export function setLightGroup(name, lights) {
    localStorage.setItem(name, JSON.stringify({name, lights}))
}

export function listLightGroups() {
    return Object.entries(localStorage)
    .filter(([key]) => key.substring(0,5) === 'group')
    .map(([key,values]) => JSON.parse(values))
} 