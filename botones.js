export class Boton {
    #idBoton = null;

    constructor(idBoton) {
        this.#idBoton = idBoton;
    }

    mostrar() {
        // Muestra el botón
        document.getElementById(this.#idBoton).style.display = "block";
    }

    ocultar() {
        // Oculta el botón
        document.getElementById(this.#idBoton).style.display = "none";
    }

    rename(text) {
        // Cambia el texto del botón
        document.getElementById(this.#idBoton).textContent = text;
    }
    avanzarRama(rama) {
        document.getElementById(this.#idBoton).onclick = () => {
            rama();
            
        };
    }
}
