/**
 * Clase para representar un botón en una interfaz de usuario.
 */
export class Boton {

    #idBoton = null;
    /**
     * Crea una instancia de la clase Boton.
     * @param {string} idBoton - El ID del botón en el DOM.
     */
    constructor(idBoton) {
        this.#idBoton = idBoton;
    }
    /**
     * Muestra el botón en la interfaz.
     */
    mostrar() {
        // Muestra el botón
        document.getElementById(this.#idBoton).style.display = "block";
    }
    /**
     * Oculta el botón en la interfaz.
     */
    ocultar() {
        // Oculta el botón
        document.getElementById(this.#idBoton).style.display = "none";
    }
    /**
     * Cambia el texto del botón.
     * @param {string} text - El nuevo texto para el botón.
     */
    rename(text) {
        // Cambia el texto del botón
        document.getElementById(this.#idBoton).textContent = text;
    }
    /**
     * Configura una acción a realizar cuando se hace clic en el botón.
     * @param {function} rama - La función a ejecutar cuando se hace clic en el botón.
     */
    avanzarRama(rama) {
        document.getElementById(this.#idBoton).onclick = () => {
            rama();
            
        };
    }
}