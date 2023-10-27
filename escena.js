import { Narrador } from './narrador.js'
import { Personaje } from './personaje.js'
import { ReyTroll } from './rey_troll.js'
import { Troll } from './troll.js'
import { Objeto } from './objeto.js'
import { Arma } from './arma.js'
import { Coche } from './coche.js'
import { Politico } from './politico.js'
import { Enano } from './enano.js'
import { Hobbit } from './hobbit.js'
import { Elfo } from './elfo.js'
import { Raton } from './raton.js'
import { Conejo } from './conejo.js'
import { Artista } from './artista.js'

export class Escena {
  #divElement = null
  #titulo = ''
  // personajes
  #narrador = new Narrador('narrador')
  #bilbo = new Hobbit('Bilbo Bolsón', 'Hobbit')
  #gandalf = new Personaje('Gandalf El Gris', 'mayor')
  #kili = new Enano('Kili')
  #fili = new Enano('Fili')
  #legolas = new Elfo('Legolas')
  #troll = new Troll('Troll')
  #rajoy = new Politico('Mariano Rajoy', null, 'PP')
  #reyTroll = new ReyTroll('Rey Troll')
  #mickeyMouse = new Raton('Mickey Mouse')
  #dwalin = new Enano('Dwalin')
  #guardiaCivil = new Personaje('Guardia Civil')
  #viajeroMisterioso = new Personaje('Viajero Misterioso')
  #elBasto = new Personaje('El Basto')
  #liebre = new Conejo('Liebre')
  #Slenderman = new Personaje('Slenderman')
  #SeguridadPrivada = new Personaje('Seguridad Privada')
  #elArrebato = new Artista('Flamenquillo')

  // Objetos
  #lampara = new Objeto('Lampara')
  #objetoMisterioso = new Objeto('ObjetoMisterioso')
  #carta = new Objeto('carta')
  #arco = new Arma('arco')
  #misteriosaHerramienta = new Objeto('Misteriosa Herramienta')
  #cassete = new Objeto('Cassete - Los Chichos')
  #crema = new Objeto('crema')
  #multa = new Objeto('multa')
  #bolsa = new Objeto('bolsa')
  #orejas = new Objeto('orejas')
  #ak = new Arma('ak')
  #cargador = new Objeto('cargador')
  #mira = new Objeto('mira')
  #coche = new Coche('Opel Kaddet')

  constructor (titulo) {
    this.#divElement = document.getElementById('divHistoria')
    this.#titulo = titulo
  }

  crearTitulo () {
    const h2Element = document.createElement('h2')
    h2Element.textContent = this.#titulo
    this.#divElement.appendChild(h2Element)
  }

  escena1 () {
    this.crearTitulo(this.#titulo)

    this.#gandalf.hablar('Buenos días, mi viejo amigo')
    this.#bilbo.hablar('¡Gandalf! Me alegro de verte')
    this.#bilbo.hablar('Deja eso en su sitio')
    this.#kili.coger(this.#lampara)
    this.#kili.hablar('Cogelo, Fili')
    this.#kili.pasar(this.#lampara, this.#fili)
    this.#fili.hablar('Ya la tengo')
    this.#kili.hablar('Cogelo, Bilbo')
    this.#gandalf.hablar('SILENCIO, TODO EL MUNDO')
    this.#narrador.narrar('De repente, entra legolas muy nervioso.')
    this.#legolas.hablar('No os lo vais a creer, ¡está sucediendo!')
  }

  escena2_1 () {
    this.crearTitulo(this.#titulo)

    this.#legolas.coger(this.#objetoMisterioso)
    this.#legolas.hablar('Esta pasando algo maloo')
    this.#bilbo.hablar('¿Qué pasa, legolas?')
    this.#gandalf.hablar('Veo el miedo en tus ojos y no lo puedo creer.')
    this.#kili.hablar('¡Nosotros nos piramos!')
    this.#fili.hablar('¡Sí, no nos llevamos bien con los elfos!')
    this.#legolas.hablar('Esperaos ahí, no sabéis lo que se avecina. Mirad.')
    this.#narrador.narrar('legolas le pasa el objeto misterioso a Bilbo.')
    this.#legolas.pasar(this.#objetoMisterioso, this.#bilbo)
    this.#bilbo.hablar('¿Qué es esto?')
    this.#narrador.narrar('Bilbo se lo pasa a Gandalf.')
    this.#bilbo.pasar(this.#objetoMisterioso, this.#gandalf)
    this.#gandalf.hablar('Llegó el momento, no puede ser.')
    this.#fili.hablar('¡Quiero verlo!')
    this.#kili.hablar('¡Eso, déjarnos verlo!')
    this.#gandalf.hablar('No se lo deis a esos irresponsables, vámonos rápido.')
    this.#bilbo.hablar('Pero, Gandalf, ¿qué ocurre?')
    this.#gandalf.hablar('¡Es hora de ir a Cáceres!')
  }

  escena3_1 () { // directo
    this.crearTitulo(this.#titulo)
    this.#troll.coger(this.#carta)
    this.#narrador.narrar('De camino a Cáceres, Bilbo tiene muchas preguntas para Gandalf, pero este no le responde. De camino, escuchan un ruido.')
    this.#troll.hablar('Hola, necesito que me deis una cosa para poder pasar por la autopista Cáceres Badajoz.')
    this.#bilbo.hablar('gandalf Ayudanos!!!!!')
    this.#gandalf.hablar('¿Qué quieres?')
    this.#troll.hablar('Necesito que os hagáis una foto conmigo y se la llevéis al alcalde de Cáceres, y le deis esta carta.')
    this.#gandalf.hablar('Perfecto, si es lo que quieres.')
    this.#narrador.narrar('Gandalf toma la carta y se toma la foto, y siguen su camino.')
    this.#troll.pasar(this.#carta, this.#gandalf)
  }

  escena3_2 () { // final
    this.crearTitulo(this.#titulo)

    this.#narrador.narrar('De camino a Cáceres, Bilbo tiene muchas preguntas para Gandalf, pero este no le responde. De camino, escuchan un ruido.')
    this.#troll.hablar('Hola, necesito que me deis una cosa para poder pasar por la autopista Cáceres Badajoz.')
    this.#gandalf.hablar('¿Qué quieres?')
    this.#troll.bostezar()
    this.#troll.hablar('Necesito que os hagáis una foto conmigo y se la llevéis al alcalde de Cáceres, y le deis esta carta.')
    this.#gandalf.hablar('Nunca nos fiaremos de un viejo sucio troll.')
    this.#narrador.narrar('Gandalf intenta lanzar un hechizo, pero el troll lo esquiva.')
    this.#narrador.narrar('En ese momento, aparece el Rey Troll.')
    this.#reyTroll.hablar('Nunca llegaréis a Cáceres.')
    this.#reyTroll.aporrear()
    this.#narrador.narrar('El Rey Troll golpea el suelo tan fuerte que lanza a los personajes tan lejos que terminan debajo del camalote del Guadiana.')
  }

  escena3_3 () { // buccle
    this.crearTitulo(this.#titulo)

    this.#narrador.narrar('De camino a Cáceres, Bilbo tiene muchas preguntas para Gandalf, pero este no le responde. De camino, escuchan un ruido.')
    this.#troll.hablar('Hola, necesito que me deis una cosa para poder pasar por la autopista Cáceres Badajoz.')
    this.#gandalf.hablar('¿Qué quieres?')
    this.#troll.hablar('Necesito que os hagáis una foto conmigo y se la llevéis al alcalde de Cáceres, y le deis esta carta.')
    this.#gandalf.hablar('Nunca nos fiaremos de un viejo sucio troll.')
    this.#narrador.narrar('Gandalf intenta lanzar un hechizo, pero el troll lo esquiva.')
    this.#narrador.narrar('En ese momento, aparece el Rey Troll.')
    this.#reyTroll.hablar('Nunca llegaréis a Cáceres.')
    this.#narrador.narrar('El Rey Troll golpea el suelo tan fuerte que lanza a los personajes por los aires.')
    this.#legolas.hablar('Desde aquí puedo dispararle.')
    this.#narrador.narrar('legolas materializa su arco y se prepara para disparar al Rey Troll. Si falla, tendrán que elegir otro camino.')
    this.#legolas.coger(this.#arco)
    this.#arco.disparar()
  }

  escena4_1 () { // Final
    this.crearTitulo(this.#titulo)

    this.#narrador.narrar('Llegando a Cáceres, se encuentran al alcalde pescando en un barril.')
    this.#bilbo.hablar('¿Este es el estúpido que buscamos?')
    this.#gandalf.hablar('Sí, pero no le haremos caso a ese viejo troll.')
    this.#legolas.hablar('Aquí está.')
    this.#bilbo.hablar('¿El qué?')
    this.#narrador.narrar('legolas encuentra la misteriosa herramienta debajo de una piedra y aparece Mickey Mouse.')
    this.#legolas.coger(this.#misteriosaHerramienta)
    this.#mickeyMouse.hablar('¡Jaja! Buenas tardes, estoy aquí para recoger mi pedido, legolas.')
    this.#narrador.narrar('legolas era repartidor de Amazon y solo quería ayuda para pasar la autopista. Mickey Mouse coge su paquete y todos felilces')
    this.#legolas.pasar(this.#misteriosaHerramienta, this.#mickeyMouse)
  }

  escena2_2 () { // decision
    this.crearTitulo(this.#titulo)

    this.#bilbo.hablar('¿Amenaza? ¿De qué están hablando?')
    this.#gandalf.hablar('Sauron se alza de nuevo, Bilbo, y debemos detenerlo.')
    this.#legolas.hablar('¿Dónde se encuentra esa amenaza?')
    this.#gandalf.hablar('Tendremos que viajar hasta una tierra seca y cálida, casi como el infierno en la tierra.')
    this.#bilbo.hablar('No te referirás a…')
    this.#gandalf.hablar('Exactamente, tenemos que viajar a Badajoz.')
    this.#kili.hablar('Nosotros somos débiles al calor, deberemos llevar protección.')
    this.#fili.hablar('Creo que podremos apañarnos con esto.')
    this.#narrador.narrar('Fili coge el objeto crema solar.')
    this.#fili.coger(this.#crema)
    this.#dwalin.hablar('Tenemos que afrontar un largo camino hacia esta tierra.')
    this.#bilbo.hablar('Señores, creo que la mejor opción para desplazarnos hacia allá será en coche aunque aún no dispongamos de un vehículo.')
    this.#gandalf.hablar('Será hora de elegir el camino: Olivenza, Valverde, Mérida.')
  }

  escena3_1_r2 () { /// /directo
    this.crearTitulo(this.#titulo)

    this.#coche.coger(this.#cassete)
    this.#narrador.narrar('Finalmente, tras robarse un Opel Kadett, empezaron a viajar a Badajoz por la carretera de Olivenza. Bilbo conduce el automóvil.')
    this.#bilbo.hablar('Este coche es un desastre, ¿por qué no pudimos coger el BMW que teníamos al lado?')
    this.#gandalf.hablar('Porque este coche ni siquiera tiene alarma y para abrirlo solo hemos tenido que forzar la cerradura.')
    this.#kili.hablar('No te quejes, al menos se mueve.')
    this.#fili.hablar('Pon algo de música, Dwalin.')
    this.#dwalin.hablar('Creo que hay un cassette viejo en la guantera.')

    this.#narrador.narrar('Dwalin coge un cassette de Los Chichos y empieza a sonar El Vaquilla.')
    this.#coche.pasar(this.#cassete, this.#dwalin)

    this.#bilbo.hablar('Oh no, estoy viendo luces azules en el retrovisor, creo que es la Guardia Civil.')
    this.#kili.hablar('¡Oh no! Si se dan cuenta de que el coche es robado, nuestra aventura terminará aquí.')
    this.#fili.hablar('Será mejor que paremos, y si nos paran porque el coche es robado intentaremos escapar.')
    this.#bilbo.hablar('Creo que pararé.')
    this.#narrador.narrar('Bilbo detiene el vehículo en el arcén de la carretera de Olivenza. La Guardia Civil para delante de ellos.')
    this.#guardiaCivil.hablar('Buenas tardes, ¿sabe usted por qué le paro?')
    this.#bilbo.hablar('Buenas tardes señor agente, no, no sé, dígame.')
    this.#guardiaCivil.hablar('Lleva usted caducada la ITV, tome una multa de 250€.')
    this.#guardiaCivil.coger(this.#multa)
    this.#narrador.narrar('Bilbo recoge la multa.')
    this.#guardiaCivil.pasar(this.#multa, this.#bilbo)
    this.#bilbo.hablar('Disculpe señor agente, en cuanto llegue a Badajoz paso la revisión.')
    this.#guardiaCivil.hablar('Si la paga en un plazo de 15 días se queda en 125€, no se apure. Siga circulando, buenas tardes.')
    this.#bilbo.hablar('Menos mal que no se ha dado cuenta de que es robado.')
    this.#narrador.narrar('Los personajes prosiguieron su aventura en el Opel Kadett robado y llegaron a Badajoz.')
  }

  escena3_2_r2 () { // final
    this.crearTitulo(this.#titulo)

    this.#narrador.narrar("Bilbo Bolsón: 'No creo que haya sido buena idea coger el tren a Extremadura, ¿cuánto queda para llegar a Badajoz?'")
    this.#gandalf.hablar('En teoría estamos a 45 minutos de Badajoz en coche, acabamos de pasar Mérida. Pero, con el tren, posiblemente posible que haremos lo imposible si lo imposible es posible para llegar si lo que es imposible es posible.')
    this.#kili.hablar('Gandalf, estás muy mayor ya.')
    this.#fili.hablar('Esto de la dehesa Extremeña lo está volviendo loco.')
    this.#dwalin.hablar('Gandalf, como no espabiles te doy con mi mazo.')
    this.#legolas.hablar('Ese que viene al fondo del vagón no será…, Gandalf, despierta.')
    this.#gandalf.hablar('Estoy viendo más olivos que en la carretera Úbeda-Baeza.')
    this.#narrador.narrar('Gandalf se vomita todo encima y el revisor que venía al fondo lo ve, rápidamente Bilbo le da una bolsa para que no siga ensuciando.')
    this.#bilbo.coger(this.#bolsa)
    this.#bilbo.pasar(this.#bolsa, this.#gandalf)
    this.#bilbo.hablar('Corre, Gandalf, vámonos.')
    this.#gandalf.hablar('Me gustan los catalanes, hacen cosas, tenemos que hacer máquinas que hagan más máquinas.')
    this.#narrador.narrar('legolas ve una cremallera en la espalda de Gandalf y se encuentra a Mariano Rajoy cuando la abre.')
    this.#rajoy.hablar('Me pillasteis, ahora mismo llamo a los Servicios de Inmigración para que envíen a la policía a por vosotros.')
    this.#narrador.narrar('Tardaron 15 minutos en detenerlos y deportarlos a la Tierra Media.')
  }

  escena3_3_r2 () { // bucle
    this.crearTitulo(this.#titulo)

    this.#narrador.narrar('Mientras están todos apretados en el coche y con el calor, empieza a sonar un silbido.')
    this.#gandalf.hablar('Mantengan la calma. Todo estará bien bajo mi protección.')
    this.#bilbo.hablar('Esto va a reventar, Gandalf.')
    this.#narrador.narrar('El chofer que era uno al que le pagaron para que les llevara haciendo autostop.')
    this.#elBasto.hablar('El volante tiembla mucho, creo que las ruedas se están derritiendo del calor.')
    this.#narrador.narrar('El Basto tira de repente del freno de mano porque se le cruza una liebre.')
    this.#liebre.hablar('Por favor, montadme para ir a Badajoz, tengo mucha calor.')
    this.#gandalf.hablar('No cabemos, socia, estamos full.')
    this.#liebre.hablar('Vais a sufrir las consecuencias.')
    this.#narrador.narrar('El Basto se enfada, retoma la marcha y atropella a la liebre, saca la navaja del salchichón y le pela las orejas.')
    this.#elBasto.coger(this.#orejas)
    this.#elBasto.hablar('Laso, orejas para calcetines en inviern vámonos.')
    this.#narrador.narrar('Decide si el conejo estaba maldito; si estaba maldito, se le aparece la niña de la curva y tienen un accidente y vuelven a la casa del hobbit. Si no, continuarán la aventura.')
  }

  escena4_2 () { // final
    this.crearTitulo(this.#titulo)

    this.#narrador.narrar('Hemos llegado a Badajoz, finalmente. Ahora, tenemos que centrarnos en nuestra misión.')
    this.#bilbo.hablar('Badajoz es un lugar lleno de historia y secretos. Necesitamos encontrar las respuestas que buscamos.')
    this.#kili.hablar('¿Por dónde empezamos? No sabemos cuál es nuestra amenaza, estamos aquí únicamente por un presentimiento de legolas.')
    this.#fili.hablar('Busquemos en la estación, siempre hay chusma por ahí dormida.')
    this.#dwalin.hablar('Tal vez deberíamos buscar un lugar tranquilo para planear nuestro próximo movimiento. Un café o restaurante, tal vez.')
    this.#bilbo.hablar('En un lugar tranquilo no hacemos nada.')
    this.#gandalf.hablar('Mejor, vamos a la piscina de los bomberos, hace calor.')
    this.#narrador.narrar('Y así terminaron en Badajoz bañándose en la piscina de los bomberos, olvidándose de la amenaza porque se perdió legolas por el camino y no se dieron cuenta.')
  }

  escena2_3 () { // decision
    this.crearTitulo(this.#titulo)

    this.#bilbo.hablar('Una aventura no es para mí, pero, ¿qué misión tienes en mente?')
    this.#legolas.hablar('Canta el arrebato en Taliga, debemos impedirlo.')
    this.#gandalf.hablar('¡Que cante sería un desastre! Se llevaría a todas las mujeres de 50 para arriba a su concierto y las casas serían robadas.')
    this.#bilbo.hablar('Necesitaremos pararlo.')
    this.#legolas.hablar('Solo tengo este equipamiento militar.')
    this.#legolas.coger(this.#ak)
    this.#legolas.coger(this.#cargador)
    this.#legolas.coger(this.#mira)
    this.#narrador.narrar('legolas saca una bolsa militar con un AK-47 que tiene un cargador y mira reflex con solamente 1 bala del 7.62mm.')
    this.#legolas.hablar('Para que no nos pillen, cada uno tendrá que esconder cada cosa como pueda en su ropa. Bilbo, tú llevarás el cargador con la bala, yo llevaré la mira y Gandalf, tú llevarás el arma plegada en tu túnica.')
    this.#legolas.pasar(this.#ak, this.#gandalf)
    this.#legolas.pasar(this.#cargador, this.#gandalf)
  }

  escena3_2_r3 () { // final
    this.crearTitulo(this.#titulo)

    this.#viajeroMisterioso.hablar('¿Qué haces por esta carretera? Tiene muchas curvas.')
    this.#bilbo.hablar('¿Quién eres?')
    this.#viajeroMisterioso.hablar('¡Eso son zapatos que a ti no te aprietan!')
    this.#narrador.narrar('Gandalf le lanza un conjuro con su bastón y le quita la capucha.')
    this.#Slenderman.hablar('Me pillasteis, Bilbo. Llevo mucho tiempo intentando atraparte.')
    this.#legolas.hablar('Aquí tienes tu desayuno, te pareces a la torre del faro, que estás más blanco que los folios galgo.')
    this.#Slenderman.hablar('Jaja, no puedes darme, me teletransporto.')
    this.#narrador.narrar('Slenderman se lleva a Bilbo y abandonan la misión ya que Bilbo llevaba la bala.')
  }

  escena3_1_r3 () { // directo
    this.crearTitulo(this.#titulo)

    this.#bilbo.hablar('Llegamos a Taliga.')
    this.#legolas.hablar('Cuidado, esconded las armas, hay controles cerca del concierto.')
    this.#SeguridadPrivada.hablar('Buenas tardes chicos, tened cuidado dentro , portaros bien.')
    this.#narrador.narrar('Consiguen pasar al concierto con éxito y nadie sospecha nada.')
  }

  escena3_3_r3 () { // bucle
    this.crearTitulo(this.#titulo)

    this.#bilbo.hablar('No podemos seguir así. Esto es una locura. Deberíamos volver.')
    this.#viajeroMisterioso.hablar('No, hemos llegado muy lejos para rendirnos ahora. Debemos continuar, ya no tenemos cobertura, eso es que estamos cerca de Taliga.')
    this.#bilbo.hablar('Tenemos que tomar una decisión pronto. La división no nos llevará a ninguna parte.')
    this.#narrador.narrar('Volver y descansar o continuar')
  }

  escena4_3 () { // final
    this.crearTitulo(this.#titulo)

    this.#bilbo.hablar('legolas, estamos dentro. Corre y saca la mira reflex. Gandalf, saca el cuerpo de Avtomat Kalashnikov modelo 1947.')
    this.#narrador.narrar('Gandalf y legolas le entregan las partes del arma a Bilbo para armarla.')
    this.#gandalf.pasar(this.#ak, this.#bilbo)
    this.#legolas.pasar(this.#mira, this.#bilbo)
    this.#gandalf.hablar('No falles el disparo. Solo tenemos un intento y una bala. Espera a que el arrebato esté quieto para poder darle.')
    this.#narrador.narrar('Bilbo se apoya en un poste y apunta directamente al arrebato mientras este canta. En la parte de "Búscate un hombre que te quiera," Bilbo dispara y...')
    this.#elArrebato.cantar('Buscate un hombre que te quiera, que te tenga llenita la neveeeraaa')
    this.#ak.disparar()
    this.#SeguridadPrivada.hablar('¡Noooooo!')
    this.#narrador.narrar('La seguridad de Donald Trump salta y bloquea la bala con su pecho. Por culpa de este hombre, todas las casas de las mujeres quedaron desprotegidas, y los ladrones tuvieron tiempo de robar mientras ellas cantaban.')
  }
}
