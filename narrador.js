/**
 * Clase que representa un narrador en el juego.
 */
export class Narrador {

    #nombre='Narrador'
    /**
     * Narra una frase y muestra un mensaje en la historia.
     * @param {string} frase - La frase que el narrador va a narrar.
     */
    narrar(frase) {
        // Crear un elemento de párrafo
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<span style="color: white; padding: 5px; border-radius: 5px; background-color: grey;">${this.#nombre} :</span>"${frase}" `;
    
        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");
    
        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);
    }
}
