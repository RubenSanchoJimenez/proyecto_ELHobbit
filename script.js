import { Rama } from './rama.js'
import { Boton } from './botones.js'

/**
 * Realizamos las declaraciones corresposndientes y asignamos los botones
 */

const rama1 = new Rama()
const rama2 = new Rama()
const rama3 = new Rama()
const boton1 = new Boton('1')
const boton2 = new Boton('2')
const boton3 = new Boton('3')

boton1.mostrar()
boton1.rename('Rama 1')
boton2.mostrar()
boton2.rename('Rama 2')
boton3.mostrar()
boton3.rename('Rama 3')
boton1.avanzarRama(() => {
  rama1.rama1()
  boton2.ocultar()
  boton3.ocultar()
  boton1.rename('continuar')
})
boton2.avanzarRama(() => {
  rama2.rama2()
  boton2.ocultar()
  boton3.ocultar()
  boton1.rename('continuar')
})
boton3.avanzarRama(() => {
  rama3.rama3()
  boton2.ocultar()
  boton3.ocultar()
  boton1.rename('continuar')
})
