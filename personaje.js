// Clase Personaje

export class Personaje{
    #nombre = null; // La # hace a un atributo privado
    #raza = null;
    #clase = null;
    #inventario = new Set();

    constructor(nombre, raza, clase = null){
        this.#nombre = nombre;
        this.#raza = raza;
        this.#clase = clase;
    }
    hablar(texto){
        let textoMejorado = `<br/>${this.#nombre}: "${texto}"`;
        document.getElementById('divHistoria').innerHTML += textoMejorado;
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
import { Objeto } from "./objeto.js";