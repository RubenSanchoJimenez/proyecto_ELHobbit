import { razaEnano as raza } from "./razas.js";
import { Personaje } from "./personaje.js";
/**
 * Clase que representa a un enano en el juego.
 * @extends Personaje
 */
export class Enano extends Personaje{
    /**
     * El nombre del rey enano (propiedad estática).
     * @type {string}
     */
    static rey = ' Thorin Escudo de roble';

    #colorBarba = null;
    /**
     * Crea una instancia de la clase Enano.
     * @param {string} nombre - El nombre del enano.
     * @param {string|null} clase - La clase a la que pertenece el enano (opcional).
     * @param {string} colorBarba - El color de la barba del enano (por defecto, 'Blanca').
     */
    constructor(nombre, clase = null, colorBarba = 'Blanca'){
        super(nombre, raza, clase);
        this.#colorBarba = colorBarba;
    }
}