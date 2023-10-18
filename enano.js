import { Personaje } from "./Personaje.js";
import { razaEnano as raza } from "./Razas.js";

export class Enano extends Personaje{
    
    static rey = ' Thorin Escudo de roble';

    #colorBarba = null;

    constructor(nombre, clase = null, colorBarba = 'Blanca'){
        super(nombre, raza, clase);
        this.#colorBarba = colorBarba;
    }
}