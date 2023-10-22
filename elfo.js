import { Personaje } from "./personaje.js";
import { razaElfo as raza } from "./razas.js";

export class Elfo extends Personaje{

    #colorPelo = null;

    constructor(nombre, colorPelo = 'Blanco'){
        super(nombre, raza);
        this.#colorPelo = colorPelo;
    }
}