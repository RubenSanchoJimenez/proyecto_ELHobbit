import { razaTroll as raza } from "./razas.js";
import { Personaje } from "./personaje.js";

export class Troll extends Personaje{
    
    //static rey = ' Thorin Escudo de roble';

    #colorPelo = null;

    constructor(nombre, clase = null, colorPelo = 'verde'){
        super(nombre, raza, clase);
        this.#colorPelo = colorPelo;
    }
    bostezar() {
        let frase="AAAAAAHHHHA"
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: black;"> El Troll bosteza:"${frase}"</span> `;

        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");

        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);
    }
}   