import * as THREE from 'three'

export function addBoilerPlateMesh(){
    const box = new THREE.BoxGeometry(0.3,0.15,2.5)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(20.1, 0.9, -10.2)
    boxMesh.userData.groupName = 'target1'
    return boxMesh
}

export function addMesh1(){
    const box = new THREE.BoxGeometry(0.3,0.15,2)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(0, 0.7, 8.02)
    boxMesh.userData.groupName = 'target2'
    return boxMesh
}

export function addMesh2(){
    const box = new THREE.BoxGeometry(0.3,0.15,2.1)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(20.5, 1.3, -22.1)
    boxMesh.userData.groupName = 'target3'
    return boxMesh
}

export function addMesh3(){
    const box = new THREE.BoxGeometry(0.3,0.15,2.5)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(20, 0.8, -26.5)
    boxMesh.userData.groupName = 'target4'
    return boxMesh
}

export function addMesh4(){
    const box = new THREE.BoxGeometry(0.3,0.15,1.6)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(25, 1.3, -25)
    boxMesh.userData.groupName = 'target5'
    return boxMesh
}

export function addMesh5(){
    const box = new THREE.BoxGeometry(0.3,0.15,2.5)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(21.5, 0.9, -16)
    boxMesh.userData.groupName = 'target6'
    return boxMesh
}

export function addMesh6(){
    const box = new THREE.BoxGeometry(0.3,0.15,2.7)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(9, 0.9, -10)
    boxMesh.userData.groupName = 'target7'
    return boxMesh
}

export function addMesh7(){
    const box = new THREE.BoxGeometry(0.3,0.15,2.8)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(-17, 0.9, -14)
    boxMesh.userData.groupName = 'target8'
    return boxMesh
}

export function addMesh8(){
    const box = new THREE.BoxGeometry(0.3,0.15,2.5)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(-2, 0.9, -3)
    boxMesh.userData.groupName = 'target9'
    return boxMesh
}

export function addMesh9(){
    const box = new THREE.BoxGeometry(0.3,0.15,2)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(-10, 1.4, -11.5)
    boxMesh.userData.groupName = 'target10'
    return boxMesh
}

export function addMesh10(){
    const box = new THREE.BoxGeometry(0.3,0.15,2.8)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(-2, 2.9, 4)
    boxMesh.userData.groupName = 'target11'
    return boxMesh
}

export function addMesh11(){
    const box = new THREE.BoxGeometry(0.3,0.15,1.6)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(4, 1.4, -0.5)
    boxMesh.userData.groupName = 'target12'
    return boxMesh
}

export function addMesh12(){
    const box = new THREE.BoxGeometry(0.3,0.15,1.6)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(12.3, 0.4, -14)
    boxMesh.userData.groupName = 'target13'
    return boxMesh
}

export function addMesh13(){
    const box = new THREE.BoxGeometry(0.3,0.15,1.6)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(17, 0.9, -15.5)
    boxMesh.userData.groupName = 'target14'
    return boxMesh
}

export function addMesh14(){
    const box = new THREE.BoxGeometry(0.3,0.15,2.7)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(-23, 0.1, -6)
    boxMesh.userData.groupName = 'target15'
    return boxMesh
}
