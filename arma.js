import { Objeto } from "./objeto.js";

/**
 * Clase que representa un arma en el juego.
 * @extends Objeto
 */
export class Arma extends Objeto{

    #nombre=null;
    /**
     * Crea una instancia de la clase Arma.
     * @param {string} nombre - El nombre del arma.
     */
    constructor(nombre){
        super(nombre);
    }
    /**
     * Realiza un disparo con el arma y muestra un mensaje en la historia.
     */
    disparar(){
        let frase="PUMMMM";
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: rgb(182, 123, 56); "> Disparos:</span>"${frase}" `;

        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");

        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);
    }
}