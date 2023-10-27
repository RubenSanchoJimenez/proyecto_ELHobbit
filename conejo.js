import { razaConejo as raza } from './razas.js'
import { Animal } from './animal.js'
/**
 * Clase que representa a un conejo en el juego.
 * @extends Animal
 */
export class Conejo extends Animal {
  #colorPelo = null
  /**
     * Crea una instancia de la clase Conejo.
     * @param {string} nombre - El nombre del conejo.
     * @param {string|null} clase - La clase a la que pertenece el conejo (opcional).
     * @param {string} colorPelo - El color del pelo del conejo (por defecto, 'Blanca').
     */
  constructor (nombre, clase = null, colorPelo = 'Blanca') {
    super(nombre, raza, clase)
    this.#colorPelo = colorPelo
  }
}
