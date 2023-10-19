// Importa la clase Escena desde el archivo "escena.js"
import { Escena } from "./escena.js";

// Crea varias instancias de la clase Escena para representar diferentes escenas en la aplicación o juego
let escena1 = new Escena('El inicio de una Locura');
let escena2_1 = new Escena('Legolas Emparanollao');
let escena3_1 = new Escena('Carretera de Caceres');
let escena3_2 = new Escena('Carretera de Caceres');
let escena3_3 = new Escena('Carretera de Caceres');
let escena4_1 = new Escena('Llegada a Caceres');

// Llama al método escena1() de la instancia escena1 para iniciar la aplicación en la primera escena
escena1.escena1();

// Muestra tres elementos con IDs "1", "2" y "3" estableciendo su estilo "display" en "block"
document.getElementById("1").style.display = "block";
document.getElementById("2").style.display = "block";
document.getElementById("3").style.display = "block";

// Define un controlador de evento para el elemento con ID "1"
document.getElementById("1").onclick = () => {

    // Llama al método escena2_1() de la instancia escena2_1 cuando se hace clic en el elemento "1"
    escena2_1.escena2_1();

    // Define un nuevo controlador de evento para el elemento con ID "1" (anidado)
    document.getElementById("1").onclick = () => {

        // Oculta los elementos con IDs "2" y "3" estableciendo su estilo "display" en "none"
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";

        // Llama al método escena3_1() de la instancia escena3_1
        escena3_1.escena3_1();
        
        // Define un nuevo controlador de evento para el elemento con ID "1" (anidado)
        document.getElementById("1").onclick = () => {

            // Llama al método escena4_1() de la instancia escena4_1
            escena4_1.escena4_1();
            
            // Oculta los elementos con IDs "1", "2" y "3"
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";
        };
    };

    // Define un controlador de evento para el elemento con ID "2"
    document.getElementById("2").onclick = () => {

        // Llama al método escena3_2() de la instancia escena3_2
        escena3_2.escena3_2();

        // Oculta los elementos con IDs "1", "2" y "3"
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
    };

    // Define un controlador de evento para el elemento con ID "3"
    document.getElementById("3").onclick = () => {
        // Llama al método escena3_3() de la instancia escena3_3
        escena3_3.escena3_3();
    };
};
