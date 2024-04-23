// Filtarr los libros que tengan menos de 100 páginas
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

const librosMenos100 = libros.filter(function (elemento) {
  return elemento.paginas < 100
})

console.log(librosMenos100)
