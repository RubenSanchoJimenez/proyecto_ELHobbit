import { Objeto } from "./objeto.js";


export class Arma extends Objeto{

    #nombre=null;
    
    constructor(nombre){
        super(nombre);
    }

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