// Clase Personaje
import { Objeto } from "./objeto.js";
/**
 * Representa un personaje de la historia
 */
export class Personaje{
    #nombre = null; // La # hace a un atributo privado
    #raza = null;
    #clase = null;
    #inventario = new Set();
    /**
     * Constructor de la clase
     * Inicializa los atributos de la clase
     * @param {String} nombre El nombre del personaje
     * @param {String} raza Raza del personaje
     * @param {String} clase Clase del personaje
     */
    constructor(nombre, raza, clase = null){
        this.#nombre = nombre;
        this.#raza = raza;
        this.#clase = clase;
    }
    hablar(frase) {
        // Crear un elemento de párrafo
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: rgb(182, 123, 56);">${this.#nombre} :</span> "${frase}"`;

    
        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");
    
        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);
    }
    /**
     * Se asigna objeto a personaje
     * @param {Objeto} objeto 
     */
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
