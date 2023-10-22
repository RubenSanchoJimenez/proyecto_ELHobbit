import { razaHobbit as raza } from "./razas.js";
import { Personaje } from "./personaje.js";


export class Hobbit extends Personaje{


    #estatura = null;

    constructor(nombre, clase = null, estatura ){
        super(nombre, raza, clase);
        this.#estatura = estatura;
    }
    
    eructar() {

        let frase="brrrrrrrrrr";
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: rgb(182, 123, 56);"> El Troll bosteza:"${frase}"</span> `;

        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");

        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);

    }

}