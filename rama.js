import { Escena } from "./escena.js";
import { Boton } from "./botones.js";
let boton1= new Boton("1");
let boton2= new Boton("2");
let boton3= new Boton("3");
export class Rama {
    
    rama1() {
        // Crea varias instancias de la clase Escena para representar diferentes escenas en la aplicación o juego
    let escena1 = new Escena('El inicio de una Locura');
    let escena2 = new Escena('Comienza el viaje a Cáceres');
    let escena3_1 = new Escena('Un Troll y una foto en la carretera de Cáceres');
    let escena3_2 = new Escena('Un Troll y un rey en la carretera de Cáceres');
    let escena3_3 = new Escena('Un Troll, un rey y un arco en la carretera de Cáceres');
    let escena4 = new Escena('Amazon Mouse');
    
    
    // Llama al método escena1() de la instancia escena1 para iniciar la aplicación en la primera escena
    escena1.escena1();
    


    // Define un controlador de evento para el elemento con ID "1"
    document.getElementById("1").onclick = () => {
        boton1.rename("Opción 1");
        boton2.rename("Opción 2");
        boton3.rename("Opción 3");

        // Llama al método escena2() de la instancia escena2 cuando se hace clic en el elemento "1"
        bucler1();
        function bucler1(){
            boton1.rename("Opción 1");
            boton2.rename("Opción 2");
            boton2.mostrar();
            boton3.mostrar();

        escena2.escena2_1();

        // Define un nuevo controlador de evento para el elemento con ID "1" (anidado)
        document.getElementById("1").onclick = () => {

            // Oculta los elementos con IDs "2" y "3" estableciendo su estilo "display" en "none"
            boton2.ocultar();
            boton3.ocultar();
            // Llama al método escena3_1() de la instancia escena3_1
            escena3_1.escena3_1();
            
            // Define un nuevo controlador de evento para el elemento con ID "1" (anidado)
            document.getElementById("1").onclick = () => {

                // Llama al método escena4() de la instancia escena4
                escena4.escena4_1();
                
                // Oculta los elementos con IDs "1", "2" y "3"
                boton1.ocultar();
                boton2.ocultar();
                boton3.ocultar();
            };
        };

        // Define un controlador de evento para el elemento con ID "2"
        document.getElementById("2").onclick = () => {

            // Llama al método escena3_2() de la instancia escena3_2
            escena3_2.escena3_2();

            // Oculta los elementos con IDs "1", "2" y "3"
            boton1.ocultar();
            boton2.ocultar();
            boton3.ocultar();
        };

        // Define un controlador de evento para el elemento con ID "3"
        document.getElementById("3").onclick = () => {
            // Llama al método escena3_3() de la instancia escena3_3
            boton3.ocultar()
                escena3_3.escena3_3();
                    boton1.rename("Acertar");
                    boton2.rename("Fallar");
                    document.getElementById("1").onclick = () => {
                        escena4.escena4_2();
                        boton1.ocultar();
                        boton2.ocultar();
                        boton3.ocultar();
                    };
                    document.getElementById("2").onclick = () => {

                        bucler1();      
                    };       
        };
    }
    };
    }
    
    rama2() {
        // Crea varias instancias de la clase Escena para representar diferentes escenas en la aplicación o juego
    let escena1 = new Escena('El inicio de una Locura');
    let escena2 = new Escena('Viaje a Badajoz');
    let escena3_1 = new Escena('guardia civil');
    let escena3_2 = new Escena('Mariano Rajoy');
    let escena3_3 = new Escena('Pisa a un buen Conejo');
    let escena4 = new Escena('La piscina de los bomberos y legolas perdido');

    // Llama al método escena1() de la instancia escena1 para iniciar la aplicación en la primera escena
    escena1.escena1();


    // Define un controlador de evento para el elemento con ID "1"
    document.getElementById("1").onclick = () => {

        // Llama al método escena2() de la instancia escena2 cuando se hace clic en el elemento "1"
        bucler2();
        function bucler2(){
            boton2.mostrar();
            boton3.mostrar();

        escena2.escena2_2();
        boton1.rename("Carretera de Olivenza - Autostop");
        boton2.rename("Carretera de Valverde - Coche robado");
        boton3.rename("Mérida - Tren");
        // Define un nuevo controlador de evento para el elemento con ID "1" (anidado)
        document.getElementById("1").onclick = () => {
            
            boton1.rename("Continuar");
            
            // Oculta los elementos con IDs "2" y "3" estableciendo su estilo "display" en "none"
            boton2.ocultar();
            boton3.ocultar();

            // Llama al método escena3_1() de la instancia escena3_1
            escena3_1.escena3_1_r2();
            
            // Define un nuevo controlador de evento para el elemento con ID "1" (anidado)
            document.getElementById("1").onclick = () => {

                // Llama al método escena4() de la instancia escena4
                escena4.escena4_2();
                
                // Oculta los elementos con IDs "1", "2" y "3"
                boton1.ocultar();
                boton2.ocultar();
                boton3.ocultar();
            };
        };

        // Define un controlador de evento para el elemento con ID "2"
        document.getElementById("2").onclick = () => {

            // Llama al método escena3_2() de la instancia escena3_2
            escena3_2.escena3_2_r2();

            // Oculta los elementos con IDs "1", "2" y "3"
            boton1.ocultar();
            boton2.ocultar();
            boton3.ocultar();
        };

        // Define un controlador de evento para el elemento con ID "3"
        document.getElementById("3").onclick = () => {
            boton1.rename("El conejo no estaba maldito");
            boton2.rename("El conejo estaba maldito");
            // Llama al método escena3_3() de la instancia escena3_3
            boton3.ocultar()
                escena3_3.escena3_3_r2();

                    document.getElementById("1").onclick = () => {
                        escena4.escena4_2();
                        boton1.ocultar();
                        boton2.ocultar();
                        boton3.ocultar();
                    };
                    document.getElementById("2").onclick = () => {

                        bucler2();      
                    };       
        };
    }
    };
    }
    
    rama3() {
        // Crea varias instancias de la clase Escena para representar diferentes escenas en la aplicación o juego
    let escena1 = new Escena('El inicio de una Locura');
    let escena2 = new Escena('Matar a El Arrebato');
    let escena3_1 = new Escena('Slenderman Enamorado de Bilbo');
    let escena3_2 = new Escena('Llegada al concierto');
    let escena3_3 = new Escena('Cansados');
    let escena4 = new Escena('Arrebato tiene mas entradas que el Bernabeu');

    // Llama al método escena1() de la instancia escena1 para iniciar la aplicación en la primera escena
    escena1.escena1();
    

    // Define un controlador de evento para el elemento con ID "1"
    document.getElementById("1").onclick = () => {

        // Llama al método escena2() de la instancia escena2 cuando se hace clic en el elemento "1"
        bucler2();
        function bucler2(){
            boton2.mostrar();
            boton3.mostrar();

        escena2.escena2_3();
        boton1.rename("Opción 1");
        boton2.rename("Opción 2");
        boton3.rename("Opción 3");
        // Define un nuevo controlador de evento para el elemento con ID "1" (anidado)
        document.getElementById("1").onclick = () => {
            boton1.rename("Continuar");

            // Oculta los elementos con IDs "2" y "3" estableciendo su estilo "display" en "none"
            boton2.ocultar();
            boton3.ocultar();

            // Llama al método escena3_1() de la instancia escena3_1
            escena3_1.escena3_1_r3();
            
            // Define un nuevo controlador de evento para el elemento con ID "1" (anidado)
            document.getElementById("1").onclick = () => {

                // Llama al método escena4() de la instancia escena4
                escena4.escena4_3();
                
                // Oculta los elementos con IDs "1", "2" y "3"
                boton1.ocultar();
                boton2.ocultar();
                boton3.ocultar();
            };
        };

        // Define un controlador de evento para el elemento con ID "2"
        document.getElementById("2").onclick = () => {

            // Llama al método escena3_2() de la instancia escena3_2
            escena3_2.escena3_2_r3();

            // Oculta los elementos con IDs "1", "2" y "3"
            boton1.ocultar();
            boton2.ocultar();
            boton3.ocultar();
        };

        // Define un controlador de evento para el elemento con ID "3"
        document.getElementById("3").onclick = () => {
            // Llama al método escena3_3() de la instancia escena3_3
            boton3.ocultar()
                escena3_3.escena3_3_r3();
                    boton1.rename("Continuar");
                    boton2.rename("Descansar");

                    document.getElementById("1").onclick = () => {
                        escena4.escena4_3();
                        boton1.ocultar();
                        boton2.ocultar();
                        boton3.ocultar();
                    };
                    document.getElementById("2").onclick = () => {

                        bucler2();      
                    };       
        };
    }
    };
    }
}
