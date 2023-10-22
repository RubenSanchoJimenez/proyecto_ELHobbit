import { razaHumano as raza } from "./razas.js";
import { Personaje } from "./personaje.js";

export class Artista extends Personaje{
    
    #generoMusical = null;

    constructor(nombre, clase = null, generoMusical = null){
        super(nombre, raza, clase);
        this.#generoMusical = generoMusical;
    }
    cantar(frase) {
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: rgb(182, 123, 56);"> El Arrebato:</span>"🎵🎶${frase}" `;

        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");

        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);
    }
}