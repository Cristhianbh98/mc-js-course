// Formas de declarar una variable
const const1 = 1 // constantes

let numero = 2 // Recomendado ✅
var numero2 = 3 // No recomendado ❌

// scope javascript
if (true) {
  let numero = 5
  console.log('en la condicion: ' + numero)
}


console.log('Afuera de la condicion: ' + numero)

// Tipos de datos
let number = 1
let number2 = 1.5

let unde = undefined

let nulls = null

let bool = true
let bool2 = false

let str = 'Hola mundo'

// console.log(bool2)

// Operadores en JavaScript

const oper = 1 + 6
const rest = 1 - 5

const mul = 2 * 3

const div = 6 / 2
const res = 6 % 2


// console.log(res)

// Estructuras de control

const resultado = 'Manzana'

// Condicional
if ( resultado === 4 ) {
  console.log('Es verdadero')
} else if (resultado === 'Manzana') {
  console.log('Es 2')
} else if (resultado === 3) {
  console.log('Es 3')
} else {
  console.log('No es ninguno')
}

// Switch
switch (resultado) {
  case 'N':
    console.log('Es n')
    break
  case 'Manzana':
    console.log('Es 2')
    break
  case 3:
    console.log('Es 3')
    break
  default:
    console.log('No es ninguno')
    break
}

/// Bucles
// For
for (let a = 0; a < 50; a++) {
  console.log(a)
}

// While
let vp = 0
while (vp < 10) {
  console.log(vp)
  vp++
}
