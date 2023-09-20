// Ejercicio 56: Aplicar una función a cada elemento de un array de objetos

// Planteamiento: Crea una función que tome un array de objetos y una función como entrada, 
// y utilice el método map para aplicar la función a cada elemento del array.
// Ejemplo de entrada:
// Array de objetos:
// javascript
// Copy code
// [
//   {nombre: 'Alejandro', edad: 30},
//   {nombre: 'María', edad: 25},
//   {nombre: 'Carlos', edad: 35}
// ]

// Ejemplo de salida:
// [60, 50, 70]

const peopleAge=[

    {nombre: 'Alejandro', edad: 30},
    {nombre: 'María', edad: 25},
    {nombre: 'Carlos', edad: 35}

]

const dupliateAge=()=>{

    return peopleAge.map((item)=>item.edad*2)

}

console.log(dupliateAge(peopleAge));
