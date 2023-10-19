/*
Ordenar elementos en un array de objetos en JavaScript:

Planteamiento: Dado un array de objetos que tienen una }
propiedad común, como "nombre" o "edad", ordénalos 
en función de esa propiedad.
Ejemplo de entrada:

[
  { nombre: "Alice", edad: 28 },
  { nombre: "Bob", edad: 22 },
  { nombre: "Eve", edad: 32 },
]
*/

const arrNamesAge = [
    { nombre: "Alice", edad: 28 },
    { nombre: "Bob", edad: 22 },
    { nombre: "Eve", edad: 32 },
  ]

  const orderForAge = (arr) =>{

    return arr.sort((a,b) => a.edad>b.edad ? 1 : -1)

  }

  console.log(orderForAge(arrNamesAge));
  
  