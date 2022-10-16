import './style.css'
import * as THREE from 'three';

let renderer , canvasWebGl , scene , camera;

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

function init()
{
  canvasWebGl = document.querySelector('canvas.webgl');
  scene = new THREE.Scene()


  renderer = new THREE.WebGLRenderer({
    canvas: canvasWebGl,
    antialias: true
  })
  renderer.setSize(sizes.width, sizes.height)


  camera = new THREE.PerspectiveCamera(45 , sizes.width / sizes.height , 0.1 , 3000 )
  camera.position.z = 3
  scene.add(camera)

  const box = new THREE.BoxGeometry(1,1,1)
  const material =new THREE.MeshBasicMaterial({color: 'red'})
  const mesh = new THREE.Mesh(box, material)
  scene.add(mesh)



}

init()



function animate()
{
  requestAnimationFrame(animate)


  // controls.update()
  // stats.update()
  renderer.render( scene, camera );
}



animate()






