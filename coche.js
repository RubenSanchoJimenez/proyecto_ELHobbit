// Clase Personaje
import { Objeto } from "./objeto.js";
import { Personaje } from "./personaje.js";
/**
 * Clase que representa un coche en el juego.
 */
export class Coche{
    #nombre = null; // La # hace a un atributo privado
    #anio = null;
    #clase = null;
    #inventario = new Set();
    /**
     * Crea una instancia de la clase Coche.
     * @param {string} nombre - El nombre del coche.
     * @param {string|null} clase - La clase a la que pertenece el coche (opcional).
     * @param {number} anio - El año de fabricación del coche.
     */
    constructor(nombre, clase = null, anio){
        this.#nombre = nombre;
        this.#anio = anio;
        this.#clase = clase;
    }
    /**
     * Arranca el coche y muestra un mensaje en la historia.
     */
    arrancar() {
        // Crear un elemento de párrafo
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px;">${this.#nombre} :</span> "${"BRRRNNN"}"`;

    
        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");
    
        // Agregar el elemento de párrafo al div
        divHistoria.appendChild("brrrrrrnnnn");
        }
    /**
     * Agrega un objeto al inventario del coche.
     * @param {Objeto} objeto - El objeto a agregar al inventario del coche.
     */
    coger(objeto){
        this.#inventario.add(objeto);
    }
    /**
     * Transfiere un objeto del coche a un personaje.
     * @param {Objeto} objeto - El objeto a transferir.
     * @param {Personaje} personaje - El personaje al que se le transfiere el objeto.
     * @throws {string} Lanza una excepción si el objeto o el personaje no son válidos.
     */
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
