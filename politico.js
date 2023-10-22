import { razaHumano as raza } from "./razas.js";
import { Personaje } from "./personaje.js";

export class Politico extends Personaje{

    #partido=null;

    constructor(nombre, clase = null, partido){
        super(nombre);
        this.#partido = partido;
    }
}