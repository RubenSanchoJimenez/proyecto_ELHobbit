// Aquí se almacenan todos los personajes posibles

import { Personaje } from "./personaje.js";
import { Objeto } from "./objeto.js";
import { Enano } from "./enano.js";
import { ReyEnano } from "./rey_enano.js";
import { razaElfo } from "./razas.js";
import { razaEnano } from "./razas.js";
import { razaHobbit } from "./razas.js";
import { razaHumano } from "./razas.js";
import { claseClerigo } from "./razas.js";
import { claseGuerrero } from "./razas.js";
import { claseMago } from "./razas.js";
import { claseSaqueador } from "./razas.js";

const bilbo = new Personaje('Bilbo Bolsón', razaHobbit);
const gandalf = new Personaje('Gandalf El Gris', razaHumano, claseMago);
const lampara = new Objeto('Lampara de mesa azul');
const reloj = new Objeto('Reloj del abuelo');
const thorin = new ReyEnano('Thorin Escudo de Roble', razaEnano, claseGuerrero);
const kili = new Enano('Kili', razaEnano);
const fili = new Enano('Fili', razaEnano);
const dwalin = new Enano('Dwalin', razaEnano);

export {bilbo, gandalf, lampara, reloj, thorin, kili, fili, dwalin}