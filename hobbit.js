import { razaHobbit as raza } from './razas.js'
import { Personaje } from './personaje.js'

/**
 * Clase que representa a un hobbit en el juego.
 * @extends Personaje
 */
export class Hobbit extends Personaje {
  #estatura = null
  /**
     * Crea una instancia de la clase Hobbit.
     * @param {string} nombre - El nombre del hobbit.
     * @param {string|null} clase - La clase a la que pertenece el hobbit (opcional).
     * @param {string} estatura - La estatura del hobbit.
     */
  constructor (nombre, clase = null, estatura) {
    super(nombre, raza, clase)
    this.#estatura = estatura
  }

  /**
     * Hace que el hobbit eructe y muestra un mensaje en la historia.
     */
  eructar () {
    const frase = 'brrrrrrrrrr'
    const dialogo = document.createElement('p')
    dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: rgb(182, 123, 56);"> El Troll bosteza:"${frase}"</span> `

    // Obtener el elemento divHistoria del documento HTML
    const divHistoria = document.getElementById('divHistoria')

    // Agregar el elemento de párrafo al div
    divHistoria.appendChild(dialogo)
  }
}
