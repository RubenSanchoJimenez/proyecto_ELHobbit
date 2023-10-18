import { razaEnano as raza } from "./razas.js";
import { Personaje } from "./personaje.js";

export class Enano extends Personaje{
    
    static rey = ' Thorin Escudo de roble';

    #colorBarba = null;

    constructor(nombre, clase = null, colorBarba = 'Blanca'){
        super(nombre, raza, clase);
        this.#colorBarba = colorBarba;
    }
}