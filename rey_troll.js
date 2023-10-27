import { Troll } from './troll.js'

export class ReyTroll extends Troll {
  static #frase = 'Pummmmmmmmmmmmm catapun chin pum'

  aporrear () {
    const dialogo = document.createElement('p')
    dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: rgb(182, 123, 56);"> "${ReyTroll.#frase}"</span> `

    // Obtener el elemento divHistoria del documento HTML
    const divHistoria = document.getElementById('divHistoria')

    // Agregar el elemento de párrafo al div
    divHistoria.appendChild(dialogo)
  }
}
