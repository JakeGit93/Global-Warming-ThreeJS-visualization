import * as THREE from './node_modules/three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const container = document.querySelector('#earthContainer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
const clock = new THREE.Clock();
let mixer;

renderer.setSize( window.innerWidth * 1.2, window.innerHeight * 1.2, true);
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
//scene.background = new THREE.Color(0x6ac2fc);

const light1 = new THREE.DirectionalLight(0xffffff, 1);
const light2 = new THREE.DirectionalLight(0xff9c33, 5);
const light3 = new THREE.DirectionalLight(0xffffff, 1);
const amLight = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
controls.enableRotate = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;

camera.position.z = 5;

light2.position.set(2,0,2);
light3.position.set(0,-2,0);

const loader = new GLTFLoader();

loader.load(
	// resource URL
	'assets/earthwithshaders.glb',
	// called when the resource is loaded
	function ( gltf ) {

		mixer = new THREE.AnimationMixer(gltf.scene);
		var action = mixer.clipAction( gltf.animations[ 0 ] );
		scene.add( gltf.scene );
		scene.add(light1);
		scene.add(light2);
		scene.add(light3);
		//scene.add(amLight);
		action.play();
		renderer.setAnimationLoop( animate );
		container.append(renderer.domElement);
	}
);

controls.update();

function animate() {

	requestAnimationFrame(animate);
	var delta = clock.getDelta();
	controls.update();
	mixer.update( delta );
	renderer.render( scene, camera );

}