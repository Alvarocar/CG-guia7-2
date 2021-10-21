import { Mesh, BoxGeometry, Color, MeshStandardMaterial } from 'three'

/**
 * 
 * @param {number} color Hexadecimal Color
 */
export function createCube(color) {
  return new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: new Color(color) }))
}