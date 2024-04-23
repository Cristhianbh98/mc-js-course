// Realizar un programa que tenga un formulario con dos numeros y los sume al presionar un boton y mostra el resultado en html.

const form = document.getElementById('form')

const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')

const result = document.getElementById('result')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  const number1Value = parseInt(number1.value)
  const number2Value = parseInt(number2.value)
  result.textContent = number1Value + number2Value

  form.reset()
})
