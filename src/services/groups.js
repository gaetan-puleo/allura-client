export function getLightGroup(name) {
    return JSON.parse(localStorage.getItem('light-' +  id))
}

export function setLightGroup(name, lights) {
    localStorage.setItem('light-' +  id, JSON.stringify(light))
} 