// Objetos y Array

const libros = [
  {
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    publicacion: 1943,
    paginas: 100,
    describete: function () {
      console.log('El libro ' + this.titulo + ' fue escrito por ' + this.autor + ' en el año ' + this.publicacion)
    }
  },
  {
    titulo: 'El bosque sin salida',
    autor: 'Saul Barahona',
    publicacion: 2020,
    paginas: 200,
    describete: function () {
      console.log('El libro ' + this.titulo + ' fue escrito por ' + this.autor + ' en el año ' + this.publicacion)
    }
  },
  {
    titulo: 'Juego de tronos',
    autor: 'George R. R. Martin',
    publicacion: 1996,
    paginas: 50,
    describete: function () {
      console.log('El libro ' + this.titulo + ' fue escrito por ' + this.autor + ' en el año ' + this.publicacion)
    }
  },
  {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    publicacion: 1967,
    paginas: 50,
    describete: function () {
      console.log('El libro ' + this.titulo + ' fue escrito por ' + this.autor + ' en el año ' + this.publicacion)
    }
  }
]

// Buscar un objeto por el nombre
const buscado = libros.find( function (libro) {
  return libro.titulo === 'Juego de tronos'
} )

// Mostrar libros publicados despues del 2000

const librosRecientes = libros.filter( function (libros) {
  return libros.publicacion < 2000
})

console.log(librosRecientes)

