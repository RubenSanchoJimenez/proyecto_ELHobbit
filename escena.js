import { Narrador } from "./narrador.js";
import { Personaje } from "./personaje.js";

export class Escena {

    #divElement = null;
    #titulo = '';

    constructor(titulo) {
        this.#divElement = document.getElementById("divHistoria");
        this.#titulo = titulo;
    }

    crearTitulo() {
        const h2Element = document.createElement("h2");
        h2Element.textContent = this.#titulo;
        this.#divElement.appendChild(h2Element);
    }

    escena1(){
        this.crearTitulo(this.#titulo);
        let narrador = new Narrador('narrador');
        let bilbo = new Personaje('Bilbo Bolsón', 'Hobbit');
        let gandalf = new Personaje('Gandalf El Gris', 'mayor');
        let kili = new Personaje('Kili');
        let fili = new Personaje('Fili');
        let legolas = new Personaje('Legolas');

        gandalf.hablar('Buenos días, mi viejo amigo');
        bilbo.hablar('¡Gandalf! Me alegro de verte');
        bilbo.hablar('Deja eso en su sitio');
        kili.hablar('Cogelo, Fili');
        fili.hablar('Ya la tengo');
        kili.hablar('Cogelo, Bilbo');
        gandalf.hablar('SILENCIO, TODO EL MUNDO');
        narrador.narrar('De repente, entra Legolas muy nervioso.');
        legolas.hablar('No os lo vais a creer, ¡está sucediendo!'); 
    }

    escena2_1() {

    this.crearTitulo(this.#titulo);
    let narrador = new Narrador('narrador');
    let bilbo = new Personaje('Bilbo Bolsón', 'Hobbit');
    let gandalf = new Personaje('Gandalf El Gris', 'mayor');
    let kili = new Personaje('Kili');
    let fili = new Personaje('Fili');
    let legolas = new Personaje('Legolas');

    kili.hablar('Cogelo, Bilbo');
    gandalf.hablar('SILENCIO, TODO EL MUNDO');
    narrador.narrar('De repente, entra Legolas muy nervioso.');
    legolas.hablar('isaac te quiero');
    bilbo.hablar('¿Qué pasa, Legolas?');
    gandalf.hablar('Veo el miedo en tus ojos y no lo puedo creer.');
    kili.hablar('¡Nosotros nos piramos!');
    fili.hablar('¡Sí, no nos llevamos bien con los elfos!');
    legolas.hablar('Esperaos ahí, no sabéis lo que se avecina. Mirad.');
    narrador.narrar('Legolas le pasa el objeto misterioso a Bilbo.');
    bilbo.hablar('¿Qué es esto?');
    narrador.narrar('Bilbo se lo pasa a Gandalf.');
    gandalf.hablar('Llegó el momento, no puede ser.');
    fili.hablar('¡Quiero verlo!');
    kili.hablar('¡Eso, déjarnos verlo!');
    gandalf.hablar('No se lo deis a esos irresponsables, vámonos rápido.');
    bilbo.hablar('Pero, Gandalf, ¿qué ocurre?');
    gandalf.hablar('¡Es hora de ir a Cáceres!');
}

escena3_1() {
    this.crearTitulo(this.#titulo)

    let narrador = new Narrador('narrador');
    let bilbo = new Personaje('Bilbo Bolsón', 'Hobbit');
    let gandalf = new Personaje('Gandalf El Gris', 'mayor');
    let troll = new Personaje('Troll');

    narrador.narrar('De camino a Cáceres, Bilbo tiene muchas preguntas para Gandalf, pero este no le responde. De camino, escuchan un ruido.');
    troll.hablar('Hola, necesito que me deis una cosa para poder pasar por la autopista Cáceres Badajoz.');
    bilbo.hablar('gandalf Ayudanos!!!!!')
    gandalf.hablar('¿Qué quieres?');
    troll.hablar('Necesito que os hagáis una foto conmigo y se la llevéis al alcalde de Cáceres, y le deis esta carta.');
    gandalf.hablar('Perfecto, si es lo que quieres.');
    narrador.narrar('Gandalf toma la carta y se toma la foto, y siguen su camino.');
}

escena3_2() {

    this.crearTitulo()
    let narrador = new Narrador('narrador');
    let bilbo = new Personaje('Bilbo Bolsón', 'Hobbit');
    let gandalf = new Personaje('Gandalf El Gris', 'mayor');
    let troll = new Personaje('Troll');
    let reyTroll = new Personaje('Rey Troll');

    narrador.narrar('De camino a Cáceres, Bilbo tiene muchas preguntas para Gandalf, pero este no le responde. De camino, escuchan un ruido.');
    troll.hablar('Hola, necesito que me deis una cosa para poder pasar por la autopista Cáceres Badajoz.');
    gandalf.hablar('¿Qué quieres?');
    troll.hablar('Necesito que os hagáis una foto conmigo y se la llevéis al alcalde de Cáceres, y le deis esta carta.');
    gandalf.hablar('Nunca nos fiaremos de un viejo sucio troll.');
    narrador.narrar('Gandalf intenta lanzar un hechizo, pero el troll lo esquiva.');
    narrador.narrar('En ese momento, aparece el Rey Troll.');
    reyTroll.hablar('Nunca llegaréis a Cáceres.');
    narrador.narrar('El Rey Troll golpea el suelo tan fuerte que lanza a los personajes tan lejos que terminan debajo del camalote del Guadiana.');
}

escena3_3() {
    this.crearTitulo()

    let narrador = new Narrador('narrador');
    let bilbo = new Personaje('Bilbo Bolsón', 'Hobbit');
    let gandalf = new Personaje('Gandalf El Gris', 'mayor');
    let troll = new Personaje('Troll');
    let reyTroll = new Personaje('Rey Troll');
    let legolas = new Personaje('Legolas');

    narrador.narrar('De camino a Cáceres, Bilbo tiene muchas preguntas para Gandalf, pero este no le responde. De camino, escuchan un ruido.');
    troll.hablar('Hola, necesito que me deis una cosa para poder pasar por la autopista Cáceres Badajoz.');
    gandalf.hablar('¿Qué quieres?');
    troll.hablar('Necesito que os hagáis una foto conmigo y se la llevéis al alcalde de Cáceres, y le deis esta carta.');
    gandalf.hablar('Nunca nos fiaremos de un viejo sucio troll.');
    narrador.narrar('Gandalf intenta lanzar un hechizo, pero el troll lo esquiva.');
    narrador.narrar('En ese momento, aparece el Rey Troll.');
    reyTroll.hablar('Nunca llegaréis a Cáceres.');
    narrador.narrar('El Rey Troll golpea el suelo tan fuerte que lanza a los personajes por los aires.');
    legolas.hablar('Desde aquí puedo dispararle.');
    narrador.narrar('Legolas toma su arco y se prepara para disparar al Rey Troll. Si falla, tendrán que elegir otro camino.');
}

    escena4_1() {
    this.crearTitulo("Escena 4: Encuentro con el Alcalde de Cáceres");

    let narrador = new Narrador('narrador');
    let bilbo = new Personaje('Bilbo Bolsón', 'Hobbit');
    let gandalf = new Personaje('Gandalf El Gris', 'mayor');
    let legolas = new Personaje('Legolas');
    let alcalde = new Personaje('Alcalde');
    let mikeyMouse = new Personaje('Mikey Mouse');

    narrador.narrar('Llegando a Cáceres, se encuentran al alcalde pescando en un barril.');
    bilbo.hablar('¿Este es el estúpido que buscamos?');
    gandalf.hablar('Sí, pero no le haremos caso a ese viejo troll.');
    legolas.hablar('Aquí está.');
    bilbo.hablar('¿El qué?');
    narrador.narrar('Legolas encuentra la misteriosa herramienta debajo de una piedra y aparece Mikey Mouse.');
    mikeyMouse.hablar('¡Jaja! Buenas tardes, estoy aquí para recoger mi pedido, Legolas.');
    narrador.narrar('Legolas era repartidor de Amazon y solo quería ayuda para pasar la autopista.');
}

}
    
    