// Objetos

const persona = {
  edad: 18, // Propiedad
  nombre: 'Pedro',
  casado: false,
  saludar: function () {
    console.log('Hola soy ' + this.nombre + ' y tengo ' + this.edad + ' años. ') // Método
  },
}
// Acceder al valor de una propiedad
console.log(persona['edad']) // forma 1

console.log(persona.casado) // forma 2

// Llamar a un método
persona.saludar()

// Modificar el valor de una propiedad
persona.nombre = 'Daniel'

console.log(persona)

// Agregar una propiedad
persona.apellido = 'Perez'

console.log(persona)
