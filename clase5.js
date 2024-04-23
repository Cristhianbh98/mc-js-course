// Seleccionar objetos del DOM

// Primera form por medio del ID
const patata = document.getElementById('h1')

console.log(h1)

// Sewgunda forma por medio de la clase
const contenedores = document.querySelectorAll('.contenedor')
console.log(contenedores)

// Modificar elementos del DOM
function cambio() {
  patata.innerHTML = 'Hola Mundo'
  patata.style.color = 'green'
}


// /// Crear elementos de javascript
// Crear un elemento
const nuevoElemento = document.createElement('p')
nuevoElemento.innerHTML = 'Soy un nuevo elemento'

const footer = document.getElementById('footer')
console.log(footer)
footer.appendChild(nuevoElemento)
