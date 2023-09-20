/*

Ejercicio 74: Ordenar un array de objetos por una propiedad

Planteamiento: Crea una función que tome un array de objetos y una propiedad y devuelva el array ordenado en función de esa propiedad.
Ejemplo de entrada:
[
  {nombre: 'Alejandro', edad: 30},
  {nombre: 'María', edad: 25},
  {nombre: 'Carlos', edad: 35}
]
Propiedad: 'edad'
Ejemplo de salida:
[
  {nombre: 'María', edad: 25},
  {nombre: 'Alejandro', edad: 30},
  {nombre: 'Carlos', edad: 35}
]


*/

const nameAge=[
    {nombre: 'Alejandro', edad: 30},
    {nombre: 'María', edad: 25},
    {nombre: 'Carlos', edad: 35}
  ]

  const orderAge=(objAge)=>{

    return objAge.sort((a,b)=>a.edad-b.edad)

  }

  console.log(orderAge(nameAge));
  
