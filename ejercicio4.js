// Hacer que el array de numeros me devuleva un nuevo array con los numeros multiplicados por 5

const numeros = [1, 3, 6, 8, 9, 10, 12, 15, 18, 20, 25, 30, 35, 40, 45, 50]


function multiplicar(elemento){
  return elemento * 5
}

const numeros2 = numeros.map(multiplicar)

console.log(numeros2)
