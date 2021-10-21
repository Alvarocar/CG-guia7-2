import { Group } from 'three'
import Colors from '../consts/colors'
import { createCube } from '../config/generic'

export default function Body () {
  const bodyTop = BodyTop()
  const legs = Legs()
  return new Group()
  .add(
    bodyTop, legs
  )
}

function BodyTop () {
  const bodyUp = createCube(Colors.body)
  bodyUp.scale.set(4, 4, 3)
  bodyUp.position.y = -1.51
  bodyUp.position.z = -0.01
  return bodyUp
}

function Legs () {
  const Rleg = createCube(Colors.body)
  Rleg.position.set(-1, -4, 0)
  const Lleg = Rleg.clone()
  Lleg.position.x *= -1
  return new Group()
  .add(Rleg, Lleg)
}
