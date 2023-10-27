import { razaEnano as raza } from './razas.js'
import { Personaje } from './personaje.js'
/**
 * Clase que representa a un animal en el juego.
 * @extends Personaje
 */
export class Animal extends Personaje {
  #reinoAnimal = null

  /**
     * Crea una instancia de la clase Animal.
     * @param {string} nombre - El nombre del animal.
     * @param {string|null} clase - La clase a la que pertenece el animal (opcional).
     * @param {string} reinoAnimal - El reino al que pertenece el animal (por defecto, 'Mamífero').
     */
  constructor (nombre, clase = null, reinoAnimal = 'Mamífero') {
    super(nombre, raza, clase)
    this.#reinoAnimal = reinoAnimal
  }
}
