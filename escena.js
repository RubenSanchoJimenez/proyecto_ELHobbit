// Clase Escena

export class Escena {

    #nombre = null;
    #descripcion = null;
    #texto = null;

    constructor(nombre, descripcion, texto) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.texto = texto;
    }
}