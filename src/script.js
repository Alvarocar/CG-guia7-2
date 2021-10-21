import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import Head from './model/Head'
import Cap from './model/Cap'
import Body from './model/Body'
import Stats from 'three/examples/jsm/libs/stats.module'
// Debug
export const GUI = new dat.GUI()

// Stats
const stats = Stats()
document.body.appendChild(stats.dom)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// HEAD

const head = Head()

scene.add(head)

// Cap

const cap = Cap()
cap.position.y = -2.4
scene.add(cap)

// Body

const body = Body()
body.position.y = -3.2
scene.add(body)

// Lights

//Point Light 1
const PL1 = new THREE.PointLight(0xffffff, 1)
PL1.position.x = 2
PL1.position.y = 3
PL1.position.z = 4
scene.add(PL1)

const PL2 = PL1.clone()
PL2.position.x = -2
PL2.position.y = 3
PL2.position.z = -4
scene.add(PL2)

const PL3 = PL1.clone()
PL3.position.set(5.6, -5.3, -4)
scene.add(PL3)

const PL4 = PL1.clone()
PL4.position.set(-6.8, -6.1, 2.8)
scene.add(PL4)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = -2
camera.position.z = 12
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects

    // Update Orbital Controls
    controls.update()

    stats.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()