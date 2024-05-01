import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh} from './addmeshes'
import { addLight } from './addLight'
import { addLight2 } from './addLight'
import { addLight3 } from './addLight'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Model from './Model'
import{gsap} from "gsap"
import { addMesh1, addMesh2, addMesh3, addMesh4, addMesh5, addMesh6, addMesh7, addMesh8, addMesh9, addMesh10, addMesh11, addMesh12, addMesh13, addMesh14 } from './addmeshes'

const mixers = []
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialas:true})

var width = window.innerWidth;
var height = window.innerHeight;
var camera = new THREE.PerspectiveCamera(10, width/height, 1, 1000)

camera.position.set(85, 85, 85); 
const controls = new OrbitControls(camera, renderer.domElement)

controls.enableRotate = false;
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
const meshes = {}
const clock = new THREE.Clock()

init()
clock.start()

function init(){
  showLoadingScreen();
  setTimeout(hideLoadingScreen, 1000);
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  meshes.default = addBoilerPlateMesh()
  meshes.mesh1 = addMesh1()
  meshes.mesh2 = addMesh2()
  meshes.mesh3 = addMesh3()
  meshes.mesh4 = addMesh4()
  meshes.mesh5 = addMesh5()
  meshes.mesh6 = addMesh6()
  meshes.mesh7 = addMesh7()
  meshes.mesh8 = addMesh8()
  meshes.mesh9 = addMesh9()
  meshes.mesh10 = addMesh10()
  meshes.mesh11 = addMesh11()
  meshes.mesh12 = addMesh12()
  meshes.mesh13 = addMesh13()
  meshes.mesh14 = addMesh14()

  meshes.defaultLight = addLight()
  meshes.light2 = addLight2()
  meshes.light3 = addLight3()

  scene.add(meshes.default)
  scene.add(meshes.defaultLight)
  scene.add(meshes.light2)
  scene.add(meshes.light3)
  scene.add(meshes.mesh1)
  scene.add(meshes.mesh2)
  scene.add(meshes.mesh3)
  scene.add(meshes.mesh4)
  scene.add(meshes.mesh5)
  scene.add(meshes.mesh6)
  scene.add(meshes.mesh7)
  scene.add(meshes.mesh8)
  scene.add(meshes.mesh9)
  scene.add(meshes.mesh10)
  scene.add(meshes.mesh11)
  scene.add(meshes.mesh12)
  scene.add(meshes.mesh13)
  scene.add(meshes.mesh14)

  var textureLoader = new THREE.TextureLoader();
textureLoader.load(
    'painted.png',
    function(texture) {
        scene.background = texture;
    }
);
  console.log(camera.position);
  raycast()
  resize()
  animate()
  models()
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate(){
  requestAnimationFrame(animate)
  renderScene();
  
}

function renderScene() {
  renderer.render(scene, camera);
}

function models(){
	const land = new Model({
		name: 'landscape',
		url:'/map.glb',
		scene: scene,
		meshes: meshes, 
		scale: new THREE.Vector3(6,6,6),
		position: new THREE.Vector3(0, -1.5, 0),
		replace: false,
		animationState: true,
		mixers: mixers,

	})
	land.init();

  const minus = new Model({
		name: 'minus',
		url:'/minus.glb',
		scene: scene,
		meshes: meshes, 
		scale: new THREE.Vector3(0.1,0.1,0.1),
		position: new THREE.Vector3(20, 0, -8),
		replace: false,
		animationState: true,
		mixers: mixers,

	})
	minus.init();
  console.log(minus);
  const rotationAngle = Math.PI / 2; 
  minus.rotation = new THREE.Euler(0, rotationAngle, 0);

  const mitext = new Model({
		name: 'mitext',
		url:'/mitext.glb',
		scene: scene,
		meshes: meshes, 
		scale: new THREE.Vector3(0.5,0.5,0.5),
		position: new THREE.Vector3(20.2, 1, -9),
		replace: false,
		animationState: true,
		mixers: mixers,

	})
	mitext.init();
  mitext.rotation = new THREE.Euler(0, rotationAngle, 0);

  const hopit = new Model({
		name: 'hopit',
		url:'/hopitblend.glb',
		scene: scene,
		meshes: meshes, 
		scale: new THREE.Vector3(1,1,1),
		position: new THREE.Vector3(-24, -0.7, -3),
		replace: false,
		animationState: true,
		mixers: mixers,
	})
	hopit.init();
  hopit.rotation = new THREE.Euler(0, -rotationAngle-0.5, 0);

  const hobtext = new Model({
		name: 'hobtext',
		url:'/hobtext.glb',
		scene: scene,
		meshes: meshes, 
		scale: new THREE.Vector3(0.5,0.5,0.5),
		position: new THREE.Vector3(-23, 0.2, -6),
		replace: false,
		animationState: true,
		mixers: mixers,

	})
	hobtext.init();
  hobtext.rotation = new THREE.Euler(0, rotationAngle, 0);

  const lorian = new Model({
		name: 'lorian',
		url:'/lorian.glb',
		scene: scene,
		meshes: meshes, 
		scale: new THREE.Vector3(0.1,0.1,0.1),
		position: new THREE.Vector3(4, 1.5, 3),
		replace: false,
		animationState: true,
		mixers: mixers,

	})
	lorian.init();
  	lorian.rotation = new THREE.Euler(0, -rotationAngle, 0);

  const esen = new Model({
	name: 'esen',
	url:'/esenblend.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.015,0.015,0.015),
	position: new THREE.Vector3(18, 0.5, -14),
	replace: false,
	animationState: true,
	mixers: mixers,

})
esen.init();

const lonley = new Model({
	name: 'lonley',
	url:'/lonleymo.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(1,1,1),
	position: new THREE.Vector3(-20, -0.3, -15),
	replace: false,
	animationState: true,
	mixers: mixers,

})
lonley.init();
lonley.rotation = new THREE.Euler(0, -rotationAngle, 0);

const riven = new Model({
	name: 'riven',
	url:'/rivengard.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.08,0.08,0.08),
	position: new THREE.Vector3(-2, 0.1, 8),
	replace: false,
	animationState: true,
	mixers: mixers,

})
riven.init();
riven.rotation = new THREE.Euler(0, -rotationAngle, 0);

const doomm = new Model({
	name: 'doomm',
	url:'/mountaindoom.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.4,0.6,0.4),
	position: new THREE.Vector3(19, 0.6, -25),
	replace: false,
	animationState: true,
	mixers: mixers,

})
doomm.init();

const bar = new Model({
	name: 'bar',
	url:'/barad.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.3,0.3,0.3),
	position: new THREE.Vector3(19, 1.2, -22),
	replace: false,
	animationState: true,
	mixers: mixers,

})
bar.init();

const morg = new Model({
	name: 'morg',
	url:'/morgur.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.05,0.05,0.05),
	position: new THREE.Vector3(20, 0.61, -16),
	replace: false,
	animationState: true,
	mixers: mixers,

})
morg.init();

const lohan = new Model({
	name: 'lohan',
	url:'/lohan.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.05,0.05,0.05),
	position: new THREE.Vector3(11, 0.26, -14),
	replace: false,
	animationState: true,
	mixers: mixers,

})
lohan.init();

const isen = new Model({
	name: 'isen',
	url:'/isen.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(17, 1, -15.5),
	replace: false,
	animationState: true,
	mixers: mixers,

})
isen.init();
isen.rotation = new THREE.Euler(0, rotationAngle, 0);

const edor = new Model({
	name: 'edor',
	url:'/edor.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(12.3, 0.5, -14),
	replace: false,
	animationState: true,
	mixers: mixers,

})
edor.init();
edor.rotation = new THREE.Euler(0, rotationAngle, 0);

const lor = new Model({
	name: 'lor ',
	url:'/lor.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(4, 1.5, -0.5),
	replace: false,
	animationState: true,
	mixers: mixers,

})
lor.init();
lor.rotation = new THREE.Euler(0, rotationAngle, 0);

const mist = new Model({
	name: 'mist',
	url:'/mist.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(-2, 3, 4),
	replace: false,
	animationState: true,
	mixers: mixers,

})
mist.init();
mist.rotation = new THREE.Euler(0, rotationAngle, 0);

const mirk = new Model({
	name: 'mirk',
	url:'/mirk.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(-10, 1.5, -11.5),
	replace: false,
	animationState: true,
	mixers: mixers,

})
mirk.init();
mirk.rotation = new THREE.Euler(0, rotationAngle, 0);

const and = new Model({
	name: 'and',
	url:'/and.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(-2, 1, -3),
	replace: false,
	animationState: true,
	mixers: mixers,

})
and.init();
and.rotation = new THREE.Euler(0, rotationAngle, 0);

const lon = new Model({
	name: 'lon',
	url:'/lon.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(-17, 1, -14),
	replace: false,
	animationState: true,
	mixers: mixers,

})
lon.init();
lon.rotation = new THREE.Euler(0, rotationAngle, 0);

const fang = new Model({
	name: 'fang',
	url:'/fang.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(9, 1, -10),
	replace: false,
	animationState: true,
	mixers: mixers,

})
fang.init();
fang.rotation = new THREE.Euler(0, rotationAngle, 0);

const morgu = new Model({
	name: 'morgu',
	url:'/morgu.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(21.5, 1, -16),
	replace: false,
	animationState: true,
	mixers: mixers,

})
morgu.init();
morgu.rotation = new THREE.Euler(0, rotationAngle, 0);

const mord = new Model({
	name: 'mord',
	url:'/mord.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(25, 1.5, -25),
	replace: false,
	animationState: true,
	mixers: mixers,

})
mord.init();
mord.rotation = new THREE.Euler(0, rotationAngle, 0);

const doom = new Model({
	name: 'doom',
	url:'/doom.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(20, 1, -26.5),
	replace: false,
	animationState: true,
	mixers: mixers,

})
doom.init();
doom.rotation = new THREE.Euler(0, rotationAngle, 0);

const bara = new Model({
	name: 'bara',
	url:'/bara.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(20.5, 1.5, -22),
	replace: false,
	animationState: true,
	mixers: mixers,

})
bara.init();
bara.rotation = new THREE.Euler(0, rotationAngle, 0);

const rive = new Model({
	name: 'rive',
	url:'/rive.glb',
	scene: scene,
	meshes: meshes, 
	scale: new THREE.Vector3(0.5,0.5,0.5),
	position: new THREE.Vector3(0, 0.9, 8),
	replace: false,
	animationState: true,
	mixers: mixers,

})
rive.init();
rive.rotation = new THREE.Euler(0, rotationAngle, 0);
}

let statue = false
function raycast(){
	window.addEventListener('click', (event) => {
		pointer.x = (event.clientX / window.innerWidth) * 2 - 1
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1 
		raycaster.setFromCamera(pointer, camera)
		const intersects = raycaster.intersectObjects(scene.children, true)
		console.log(intersects)
		for(let i = 0; i < intersects.length; i++){
			let object = intersects[i].object
      		console.log(object)
			while(object){
				if(object.userData.groupName === 'target1'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 32, 
							y: 13, 
							z: 5, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("The white royal city of Gondor stands at the foot of the mountains. Here ends the age of God and here begins the age of man.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target2'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 6.9, 
							y: 9, 
							z: 16.9, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("Legend has it that this is a fairyland inhabited by the last of the elves, isolated and uncontested, where the long-lived gray elves linger for thousands of years, and rivendell has remained unchanged.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target3'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 30, 
							y: 12.9, 
							z: -10.1, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("The former fallen Demon King of Middle Earth has long since fallen, leaving only a single eye to observe the land. Unbeknownst to him, the king of thousands years ago was only a servant at the feet of the gods.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target4'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 29, 
							y: 11.5, 
							z: -15, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("Barad-dur is bordered by an inferno of volcanoes, with traumatized lands and scorched earth underneath.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target5'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 76, 
							y: 62, 
							z: 35.5, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("Surrounded by mountains on three sides, the mordor is the last frontier of the former demon lord. This land has seen its rise and its fall.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target6'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 30.7, 
							y: 11.5, 
							z: -5, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("The former human fortress is not immune to the Lich King's control, and it is rumored that this once beautiful city has become a dragon's lair.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target7'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 27.7, 
							y: 21, 
							z: 10.5, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("The small forest at the foot of this mountain is dense and terrifying, and the trees here are rumored to be intelligent and wary of humans.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target8'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: -3, 
							y: 17, 
							z: 2.8, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("The Lonely Mountain at the end of the Misty Forest was once a dragon's lair, and the dragons have long since faded away, leaving behind a mountain full of treasures and the remains of the dwarves.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target9'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 13.7, 
							y: 18.4, 
							z: 14.8, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("This river, which runs north and south, is the lifeblood of the earth, the lifeblood of civilization, and one of the few legacies left from the time of the gods.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target10'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 3.4, 
							y: 17, 
							z: 5, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("How many secrets are hidden in the dangerous but rich forest is unknown even to the wise men and gods originally from the West.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target11'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 25.4, 
							y: 33.7, 
							z: 34.7, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("Like the Anduin River, the Misty Mountains were once traumatized by the Twilight of the Gods, so massive that it isolated the land, and some races were blessed by it.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target12'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 15.3, 
							y: 14.2, 
							z: 14, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("Golden forests with golden palaces, golden elves and the legendary ring of the original gem. Perhaps this is the only pure land in the land.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target13'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 20.6, 
							y: 10.4, 
							z: -3.6, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("This is the palace of the warlike steppe people of Lohan, and a monument to the glorious history of mankind.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target14'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: 27.6, 
							y: 12, 
							z: -2.4, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("The tower that used to represent the authority of the white-robed sorcerer has fallen, the tower remains, but underneath it is a miserable black scorched earth.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}

				if(object.userData.groupName === 'target15'){
					if(statue == false){
						statue = true
						controls.enabled = false
						gsap.to(camera.position, { duration: 1, 
							x: -5.7, 
							y: 19.7, 
							z: 15.6, 
							onUpdate: renderScene,
							onComplete: function() {
								revealText("Legend has it that Hobbits have lived here for generations, at the land's end, principle earthly strife, while unbeknownst to them, the change of an era began here.");
							}
						});
						break;
					}

					if(statue == true){
						statue = false
						document.getElementById('text-container').style.display = 'none';
						gsap.to(camera.position, {
						duration: 1,
						x: 85,
						y: 85,
						z: 85,
						onUpdate: renderScene,
						onComplete: function() {
							controls.reset();
							controls.enabled = true
						}
						});
						break;
					}
				}
				object = object.parent
			}
		}
	})
}

function revealText(text) {
    const textContainer = document.getElementById('text-container');
    const textContent = document.getElementById('text-content');
    
    textContent.innerHTML = text;
    textContainer.style.display = 'block';
}

function showLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'flex';
}

function hideLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'none';
}

//Really, I don't have time to organize the code, 
//so that's it, I know it's very childish to write like that, 
//but the model alone is a headache, at least it runs and is smooth.
