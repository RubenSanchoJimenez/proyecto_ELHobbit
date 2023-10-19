// Clase Personaje
import { Objeto } from "./objeto.js";

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
    hablar(frase) {
        // Crear un elemento de párrafo
        let dialogo = document.createElement("p");
        dialogo.textContent = `${this.#nombre} : "${frase}"`;
    
        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");
    
        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);
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
