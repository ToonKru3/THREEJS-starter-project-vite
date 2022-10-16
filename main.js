import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let renderer , canvasWebGl , scene , camera , control;

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
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


  camera = new THREE.PerspectiveCamera(45 , sizes.width / sizes.height , 0.1 , 3000 )
  camera.position.z = 3
  scene.add(camera)

  control = new OrbitControls(camera, canvasWebGl)
  control.enableDamping = true

  window.addEventListener('resize', () =>
  { 
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width , sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })




  const box = new THREE.BoxGeometry(1,1,1)
  const material =new THREE.MeshBasicMaterial({color: 'red'})
  const mesh = new THREE.Mesh(box, material)
  scene.add(mesh)



}
init()



function animate()
{
  requestAnimationFrame(animate)


  // stats.update()
  control.update()
  renderer.render( scene, camera );
}



animate()






