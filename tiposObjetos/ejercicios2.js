const listapersonas = [
    { nombre: "Leire", apellido: "horls", edad: 52, altura: 1, isDevoloper : true },
    { nombre: "Gorka", apellido: "mazo", edad: 48, altura: 2, isDevoloper : false },
    { nombre: "Miguel", apellido: "mejor1", edad: 15, altura: 3, isDevoloper : true },
    { nombre: "Lucía", apellido: "mejor1", edad: 20, altura: 4, isDevoloper : false },
    { nombre: "Ricardo", apellido: "mazo", edad: 34, altura: 20, isDevoloper : true}
]
//const miedad = listapersonas.filter((obj => obj.nombre === "Ricardo"))
//console.log(miedad)

const objeto = listapersonas.find(o => {
      if (o.nombre === "Ricardo") {
            return o.edad
          
         }
     })

console.log(objeto.edad)  

let misDatos = [objeto]
console.log(misDatos)

const amigos = listapersonas.filter(obj => obj.nombre == "Lucía" || obj.nombre == "Miguel")
console.log(amigos)

listapersonas.sort((a, b) => b.edad - a.edad)
console.log(listapersonas)