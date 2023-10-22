import { razaEnano as raza } from "./razas.js";
import { Personaje } from "./personaje.js";
export class Animal extends Personaje{

    #reinoAnimal = null;

    constructor(nombre, clase = null, reinoAnimal = 'Mamífero'){
        super(nombre, raza, clase);
        this.#reinoAnimal = reinoAnimal;
    }
}