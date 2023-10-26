import { razaHumano as raza } from "./razas.js";
import { Personaje } from "./personaje.js";
/**
 * Clase que representa a un artista en el juego.
 * @extends Personaje
 */
export class Artista extends Personaje{
    
    #generoMusical = null;
    /**
     * Crea una instancia de la clase Artista.
     * @param {string} nombre - El nombre del artista.
     * @param {string|null} clase - La clase a la que pertenece el artista (opcional).
     * @param {string|null} generoMusical - El género musical al que pertenece el artista (opcional).
     */
    constructor(nombre, clase = null, generoMusical = null){
        super(nombre, raza, clase);
        this.#generoMusical = generoMusical;
    }
    /**
     * Hace que el artista cante una frase y muestra un mensaje en la historia.
     * @param {string} frase - La frase que el artista va a cantar.
     */
    cantar(frase) {
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: rgb(182, 123, 56);"> El Arrebato:</span>"🎵🎶${frase}" `;

        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");

        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);
    }
}