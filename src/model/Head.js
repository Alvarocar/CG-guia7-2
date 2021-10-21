import { BoxGeometry, MeshStandardMaterial, Mesh, Color, Group } from 'three'
import Colors from '../consts/colors'

export default function Head() {
  const horns = Horns()
  const headTop = HeadTop()
  const front = Front()
  const eyes = Eyes()
  const mouth = Mouth()
  return new Group()
    .add(
      front,
      eyes,
      mouth,
      headTop,
      horns
    )
  }

  function Horns() {
    const hornR = Horn()
    const hornL = hornR.clone()
    hornL.scale.x *= -1
    hornL.position.x *= -1
    return new Group()
    .add(
      hornR,
      hornL
    )
  }

  function Horn() {
    const baseHorn = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: new Color(Colors.main) }))
    baseHorn.position.set(-2.5, 2, 0)
    const topHorn = baseHorn.clone()
    baseHorn.scale.y = 3
    topHorn.position.set(-2, 4, 0)
    return new Group()
    .add(
      topHorn,
      baseHorn
    )
  }
  
  function HeadTop() {
    const headTop = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: new Color(Colors.main) }))
    headTop.position.y = 1
    headTop.scale.set(4, 1, 3)
    return headTop
  }

function Front() {
  const front = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: new Color(Colors.main) }))
  front.scale.x = 4
  front.scale.z = 4
  const frontbottom1 = front.clone()
  frontbottom1.scale.x = .5
  frontbottom1.position.set(-1.75, -1, 0)
  const frontbottom2 = frontbottom1.clone()
  frontbottom2.scale.x = 1
  frontbottom2.position.set(0, -1, 0)
  const frontbottom3 = frontbottom1.clone()
  frontbottom1.position.set(1.75, -1, 0)
  return new Group()
  .add(
    front,
    frontbottom1,
    frontbottom2,
    frontbottom3
  )
}

function Eyes() {
  const eyeR = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: new Color(Colors.eyes) }))
  eyeR.position.set(-1, -1, 1)
  const eyeL = eyeR.clone()
  eyeL.position.x = 1

  const backEyeR = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: new Color(Colors.main) }))
  backEyeR.position.set(-1, -1, -1.5)
  const backEyeL = backEyeR.clone()
  backEyeL.position.x = 1

  return new Group()
  .add(
    eyeR,
    eyeL,
    backEyeL,
    backEyeR
  )
}


function Mouth() {
  const mouth = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: new Color(Colors.main) }))
  mouth.position.y = -1.8
  mouth.scale.set(3, .6, 3)
  return mouth
}
