import { razaRata as raza } from "./razas.js";
import { Personaje } from "./personaje.js";

export class Raton extends Personaje{
    
    //static rey = ' Thorin Escudo de roble';

    #colorPelo = null;

    constructor(nombre, clase = null, colorPelo = 'Blanca'){
        super(nombre, raza, clase);
        this.#colorPelo = colorPelo;
    }
}   