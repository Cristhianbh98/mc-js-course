// Crear un objeto llamdo libro, y que tenga las siguientes propiedades:
// - titulo
// - autor
// - año publicacion
// - Crear un método que muestre un mensaje con el siguiente formato:
// "El libro <titulo> fue escrito por <autor> en el año <año publicacion>"

const libro = {
  titulo: 'El principito',
  autor: 'Antoine de Saint-Exupéry',
  publicacion: 1943,
  describete: function () {
    console.log('El libro ' + this.titulo + ' fue escrito por ' + this.autor + ' en el año ' + this.publicacion)
  }
}

libro.describete()

/* const libro2 = {
  titulo:' el bosque sin salida',
  autor:'saul barahona',
  publicacion:'2020',
  describete: function () {
    console.log('El libro ' + this.titulo + 'fue escrito por ' + this.autor + 'en el ano' + thispublicacion)
  }
}
 */