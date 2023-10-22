import { razaConejo as raza } from "./razas.js";
import { Animal } from "./animal.js";

export class Conejo extends Animal{
    

    #colorPelo = null;

    constructor(nombre, clase = null, colorPelo = 'Blanca'){
        super(nombre, raza, clase);
        this.#colorPelo = colorPelo;
    }
}   