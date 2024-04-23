// Funciones

function calculadora(numero1, numero2, numero3) {
  const resultado = numero1 + numero2 + numero3
  return resultado
}

const resultado = calculadora(10, 2, 5)



// Crear una funcion

function multiplicar (numero1, numero2) {
  const resultado = numero1 * numero2
  return resultado
}

// Arrays o Arreglos

const comida = ['sushi', 'hamburguesa', 'carne']
// sushi [0]
// hamburguesa [1]
// carne [2]
console.log(comida[0]) // sushi
console.log(comida[2]) // carne
console.log(comida[3]) // undefined

// Paramatros del array
// saber el largo del array
console.log(comida.length)

// Agregando datos al array
comida.push('pizza') // Final
console.log(comida)

// Agregar al inicio
comida.unshift('pollo') // Inicio
console.log(comida)

// Eliminar el ultimo elemento
const ultimaComida = comida.pop()
console.log(ultimaComida) // pizza

// Este es un comentario de una linea

/* 
Este es un comentario de 
varias 
lineas
*/
comida.shift()
console.log(comida)
 
// For y array para leer datos
const numeros = [51, 21, 54, 32, 85, 96, 12, 30, 20, 10, 85, 20]

/* for (let i = 0; i < numeros.length; i++){
  const resultado = numeros[i] + 5
  console.log(resultado)
} */

// Creanmos una funcion para el map
// primera forma de usuarlo
function suma (elemento) {
  return elemento + 5
}

const numerosModificados = numeros.map(suma)

// segunda forma con funcion anonima
const numerosSumados2 = numeros.map(function (elemento) {
  return elemento + 5
})
console.log(numeros)
console.log(numerosModificados)

// Otro ejemplo con string
const comida2 = ['sushi', 'hamburguesa', 'carne']

const comidaModificada = comida2.map(function (elmento) {
  return elmento + ' 🍔'
})

console.log(comidaModificada)


// find method

const nombres = ['Juan', 'Pedro', 'Maria', 'Ana', 'Luis', 'Carlos']

const nombreEncontrado = nombres.find(function (elemento) {
  return elemento === 'Ana'
})

// Filter method

const numeros2 = [51, 21, 54, 32, 85, 96, 12, 30, 20, 10, 85, 20, 50]

const numerosFiltrados = numeros2.filter(function (elemento) {
  return elemento > 50
})

console.log(numerosFiltrados)
