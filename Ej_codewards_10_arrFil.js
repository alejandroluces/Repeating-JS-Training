/*
Eliminar elementos duplicados de un array de objetos:

Planteamiento: Dado un array de objetos que contienen información de estudiantes, elimina los objetos duplicados en función del nombre.
Ejemplo de entrada:

[
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Juan", edad: 25 },
  { nombre: "Carlos", edad: 28 }
]
Ejemplo de salida:
[
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Carlos", edad: 28 }
]
*/

const personAge = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Carlos", edad: 28 }
  ]

  const deleteElementDuplicate = (arr) =>{


    // return arr.filter((itemFil,indexFil,arrFil) =>{
    //     return arrFil.map((item) => item["nombre"]).indexOf(itemFil["nombre"])=== indexFil
    // })
    return arr.filter((itemFil,indexFil,arrFil) =>{
       indexFil
        const filtered = arrFil.map((item) => item["nombre"])
        // filtered
        const index = filtered.indexOf(itemFil["nombre"])
        index
        return index === indexFil
    })

 
  }

  console.log(deleteElementDuplicate(personAge));
  

  