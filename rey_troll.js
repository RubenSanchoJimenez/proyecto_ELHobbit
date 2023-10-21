import { Troll } from "./troll.js";

export class ReyTroll extends Troll {
    static #frase = 'Pummmmmmmmmmmmm catapun chin pum';

    aporrear() {
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: black;"> "${ReyTroll.#frase}"</span> `;

        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");

        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);
    }
}
