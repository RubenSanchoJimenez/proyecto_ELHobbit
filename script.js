import { Rama } from "./rama.js";
import { Boton } from "./botones.js";

let rama1 = new Rama();
let rama2 = new Rama();
let rama3 = new Rama();
let boton1= new Boton("1");
let boton2= new Boton("2");
let boton3= new Boton("3");

boton1.mostrar();
boton1.rename("Rama 1");
boton2.mostrar();
boton2.rename("Rama 2");
boton3.mostrar();
boton3.rename("Rama 3");
boton1.avanzarRama(() => {
    rama1.rama1();
    boton2.ocultar();
    boton3.ocultar();
    boton1.rename("continuar");
});
boton2.avanzarRama(() => {
    rama2.rama2();
    boton2.ocultar();
    boton3.ocultar();
    boton1.rename("continuar");
});
boton3.avanzarRama(() => {
    rama3.rama3();
    boton2.ocultar();
    boton3.ocultar();
    boton1.rename("continuar");
});

