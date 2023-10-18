import { Enano } from "./enano.js";
import { claseGuerrero } from "./razas.js";
export class ReyEnano extends Enano{
    
    static frase =  'Si apreciaramos la comida, la alegría y el canto más que al oro, el mundo sería un mejor lugar'

    constructor(nombre = 'Thorin Escudo de roble', clase = claseGuerrero, colorBarba = 'Negra'){
        super(nombre, clase, colorBarba);
    }
}