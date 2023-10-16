/*
 Ejercicio 272
Eliminar Elementos Repetidos de una Lista de Tareas:

Entrada: Un array de objetos que representan tareas con propiedades, 
incluida una descripción.
Salida: Un ejemplo sería:
Entrada: [ 
    { id: 1, descripcion: "Comprar leche" }, 
    { id: 2, descripcion: "Comprar leche" }, 
    { id: 3, descripcion: "Hacer ejercicio" } 
]
Salida: Set de tareas únicas basado en la descripción.
 */

const arrObj = [ 
    { id: 1, descripcion: "Comprar leche" }, 
    { id: 2, descripcion: "Comprar leche" }, 
    { id: 3, descripcion: "Hacer ejercicio" } 
]

const newSetDescription = (arr) =>{
   
    let extraeDescrip = arr.map((item) => item.descripcion)
    return new Set(extraeDescrip)
  
}

console.log(newSetDescription(arrObj));
