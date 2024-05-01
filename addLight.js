import * as THREE from 'three'

export function addLight(){
    const light = new THREE.DirectionalLight
    (0xffffff, 6)
    light.position.set(-5, 5, 8)
    return light
}

export function addLight2(){
    const light = new THREE.DirectionalLight
    (0xffffff, 4)
    light.position.set(-5, -5, 8)
    return light
}

export function addLight3(){
    const light = new THREE.DirectionalLight( 0xffffff, 2 )
    light.position.set(0, 2, -5)
    return light
}