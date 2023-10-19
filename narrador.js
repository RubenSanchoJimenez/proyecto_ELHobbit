export class Narrador {

    #nombre='Narrador'
    narrar(frase) {
        // Crear un elemento de párrafo
        let dialogo = document.createElement("p");
        dialogo.innerHTML = `<strong>${this.#nombre} :</strong> "${frase}"`;
    
        // Obtener el elemento divHistoria del documento HTML
        let divHistoria = document.getElementById("divHistoria");
    
        // Agregar el elemento de párrafo al div
        divHistoria.appendChild(dialogo);
    }
}
