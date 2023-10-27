import { razaRata as raza } from './razas.js'
import { Animal } from './animal.js'

export class Raton extends Animal {
  #colorPelo = null

  constructor (nombre, clase = null, colorPelo = 'Blanca') {
    super(nombre, raza, clase)
    this.#colorPelo = colorPelo
  }
}
