// Clase Escena

export class Escena {
    constructor(nombre) {
        this.nombre = nombre;
        this.personajes = [];
    }

    agregarPersonaje(personaje) {
        this.personajes.push(personaje);
    }

    hablar(texto) {
        for (const personaje of this.personajes) {
            personaje.hablar(texto);
        }
    }
}