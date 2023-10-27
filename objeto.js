/**
 * Representa un objeto
 */
export class Objeto {
  #nombre = null
  /**
     * Constructor de objeto
     * Constructor que añade el nombre al objeto
     * @param {String} nombre Nombre del objeto
     */
  constructor (nombre) {
    this.#nombre = nombre
  }
}
