let listaCompra = ["sal", "azucar","Aceite de Girasol","cafe","frutas"]
console.log(listaCompra)

//listaCompra.push("Aceite de Girasol")
//listaCompra.pop()
//console.log(listaCompra)

const result = listaCompra.filter(word => word !=="Aceite de Girasol");

console.log(result)



const listaPelicula = [
    { 
        titulo: "Libro1", 
        director: "director1",
        fecha: new Date (2011, 10, 10)
    },
    {
         titulo: "Libro2",
         director: "director2",
         fecha: new Date (2012, 10, 10)
    },
    { 
        titulo: "MigLibro1uel",
        director: "director3",
        fecha: new Date (2009, 10, 10)
    },
  ]

  const listaPelicula1 = listaPelicula.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

console.log(listaPelicula1)

const directores = listaPelicula.map(pelicula =>{
       console.log(pelicula.director)

      
} )

const titulo = listaPelicula.map(titulo =>{
    console.log(titulo.titulo)
    const dire_titulo = directores.concat(titulo)
    console.log(dire_titulo)
} )
const dire_titulo = directores.concat(titulo)
console.log(dire_titulo)

const directores_titulos_prop = [...directores, ...titulo]
console.log(directores_titulos_prop)