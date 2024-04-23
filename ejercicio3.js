// Realizar un funacion que me imprima en consola la tabla de multiplicar de un número

function tablaMultiplicar (numero) {
  for (let i = 1; i <= 12; i++) {
    const resultado = numero * i
    console.log(numero + ' x ' + i + ' = ' + resultado)
  }
}

tablaMultiplicar(15)
console.log('-------------------')
tablaMultiplicar(5)
console.log('-------------------')
tablaMultiplicar(7)
