
import { Objeto } from "./objeto.js";
import { Personaje } from "./personaje.js";
export class Equipamiento{

    #inventario = new Set();

    constructor(){

    }
    coger(objeto){
        this.#inventario.add(objeto);
    }
    
    pasar(objeto, personaje){
        if(!(objeto instanceof  Objeto)){
            throw 'Objeto inválido';
        }
        if(!(personaje instanceof  Personaje)){
            throw 'Personaje inválido';
        }
        this.#inventario.delete(objeto);
        personaje.coger(objeto);
    }
}
