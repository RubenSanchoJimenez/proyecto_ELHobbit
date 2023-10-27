import { razaTroll as raza } from './razas.js'
import { Personaje } from './personaje.js'

export class Troll extends Personaje {
  #colorPelo = null

  constructor (nombre, clase = null, colorPelo = 'verde') {
    super(nombre, raza, clase)
    this.#colorPelo = colorPelo
  }

  bostezar () {
    const frase = 'AAAAAAHHHHA'
    const dialogo = document.createElement('p')
    dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: rgb(182, 123, 56);"> El Troll bosteza:</span>"${frase}" `

    // Obtener el elemento divHistoria del documento HTML
    const divHistoria = document.getElementById('divHistoria')

    // Agregar el elemento de párrafo al div
    divHistoria.appendChild(dialogo)
  }
}
