// Clase Personaje
import { Objeto } from "./objeto.js";
import { Personaje } from "./personaje.js";
export class Coche{
    #nombre = null; // La # hace a un atributo privado
    #anio = null;
    #clase = null;
    #inventario = new Set();

    constructor(nombre, clase = null, anio){
        this.#nombre = nombre;
        this.#anio = anio;
        this.#clase = clase;
    }
    arrancar() {
        // Crear un elemento de párrafo
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px;">${this.#nombre} :</span> "${"BRRRNNN"}"`;

    
        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");
    
        // Agregar el elemento de párrafo al div
        divHistoria.appendChild("brrrrrrnnnn");
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
