// Ejercicio 44: Extraer nombres de un array de objetos

// Planteamiento: Escribe una función que tome un array de objetos con propiedades "nombre" y utilice el método map para extraer solo los nombres en un nuevo array.
// Ejemplo de entrada: [{nombre: 'Juan'}, {nombre: 'María'}, {nombre: 'Carlos'}]
// Ejemplo de salida: ['Juan', 'María', 'Carlos']

const arrObjNom=[{nombre: 'Juan'}, 
{nombre: 'María'}, 
{nombre: 'Carlos'}
]

const extraerNombreObj=(arrObj)=>{

    return arrObj.map((item)=>item.nombre)


}

console.log(extraerNombreObj(arrObjNom));
