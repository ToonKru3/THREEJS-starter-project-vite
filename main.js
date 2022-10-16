import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Pane } from 'tweakpane'




let renderer , canvasWebGl , scene , camera , control;
let box , material , mesh;



const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const params = {
  data: 'test'
}

// Tweakpane for devolpment




// localhost:5173/#   Open tweakpane 
if(window.location.href.includes('#'))
{
  const pane = new Pane()
  pane.addInput(params, 'data')
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




  box = new THREE.BoxGeometry(1,1,1)
  material =new THREE.MeshBasicMaterial({color: 'yellow'})
  mesh = new THREE.Mesh(box, material)
  scene.add(mesh)
}
init()

function animate()
{
  requestAnimationFrame(animate)


  // mesh.position.x += 0.1
  
  // stats.update()
  control.update()
  renderer.render( scene, camera );
}



animate()






