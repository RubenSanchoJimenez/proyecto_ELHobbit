import { Personaje } from './personaje.js'
import { razaElfo as raza } from './razas.js'
/**
 * Clase que representa a un elfo en el juego.
 * @extends Personaje
 */
export class Elfo extends Personaje {
  #colorPelo = null
  /**
     * Crea una instancia de la clase Elfo.
     * @param {string} nombre - El nombre del elfo.
     * @param {string} colorPelo - El color del pelo del elfo (por defecto, 'Blanco').
     */
  constructor (nombre, colorPelo = 'Blanco') {
    super(nombre, raza)
    this.#colorPelo = colorPelo
  }
}
