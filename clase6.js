// Evento para click
const button = document.getElementById('button')

button.addEventListener('click', function() {
  alert('Botón presionado')
})

// click en titulo
const title = document.getElementById('h1')

title.addEventListener('click', function() {
  alert('Título presionado')
})

// keydown / keyup
// keydown se ejecuta cuando se presiona una tecla
// keyup se ejecuta cuando se suelta una tecla

document.addEventListener('keyup', function(event) {
  // console.log(event.keyCode)
  // if ( event.keyCode === 65 ) {
  //   alert('Presionaste la tecla A')
  // }
})

// Evento de submit
const form = document.getElementById('form')
const list = document.getElementById('list')

form.addEventListener('submit', function(event) {
  event.preventDefault()
  const input = document.getElementById('name')
  console.log(input.value)

  // Añadir a la lista
  const li = document.createElement('li') // Creando elemento li
  li.textContent = input.value // Agregando el nombre
  list.appendChild(li) // Añadiendo al listado

  // Limpiar el input
  input.value = ''
})