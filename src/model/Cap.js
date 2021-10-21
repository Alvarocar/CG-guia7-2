import { Group } from 'three'
import Colors from '../consts/colors'
import { createCube } from '../config/generic'
export default function Cap() {
  const layer1 = Layer1()
  const layer2 = Layer2()
  const layer3 = Layer3()
  return new Group()
  .add(
    layer1,
    layer2,
    layer3,
  )
}

function Layer1() {
  const zAxis = createCube(Colors.cap)
  zAxis.scale.set(2, .6, 3)
  const RSide = createCube(Colors.cap)
  RSide.position.x = -1.5
  RSide.scale.y = .6
  const LSide = RSide.clone()
  LSide.position.x *= -1

  return new Group()
  .add(
    zAxis,
    RSide,
    LSide
  )
}

function Layer2() {
  const L1 = LFigure()
  L1.position.set(.5, -1.3, 2)
  const L2 = L1.clone()
  L2.position.set(1.5, -1.3, 1)
  const L3 = L2.clone()
  L3.position.set(2.5, -1.3, 0)
  const L4 = L3.clone()
  L4.position.set(1.5, -1.3, -1)

  const L5 = LFigure()
  L5.position.set(1.5, -1.3, -2)
  L5.rotation.y = 0.5 * Math.PI
  const L6 = L5.clone()
  L6.position.x -= 1
  const L7 = L6.clone()
  L7.position.x -= 1
  const L8 = L7.clone()
  L8.position.x -= 1

  const L9 = LFigure()
  L9.position.set(-1.5, -1.3, -1)
  L9.scale.x *= -1
  const L10 = L9.clone()
  L10.position.set(-2.5, -1.3, 0)
  const L11 = L10.clone()
  L11.position.set(-1.5, -1.3, 1)
 return new Group()
 .add(
   L1, L2, L3, L4,
   L5, L6, L7, L8,
   L9, L10, L11
 )
}

// Figure with L Form
function LFigure() {
  const LTop = createCube(Colors.cap)
  LTop.scale.set(1, 2, 1)
  const LBottom = createCube(Colors.cap)
  LBottom.position.set(1, -1, 0)
  LBottom.scale.y = 2
  return new Group()
  .add(
    LTop,
    LBottom
  )
}

function Layer3 () {
  const L1 = createCube(Colors.cap)
  L1.position.set(-4, -2.80, 1)
  L1.scale.x = 2
  const L2 = createCube(Colors.cap)
  L2.position.set(-4.5, -2.80, 0)
  return new Group()
  .add(L1, L2)
}

