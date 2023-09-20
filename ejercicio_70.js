/*
Ejercicio 70: Filtrar objetos por propiedad

Planteamiento: Crea una función que tome un array de objetos y una propiedad, y devuelva un nuevo array con solo los objetos que tengan esa propiedad.
Ejemplo de entrada:
Array de objetos:

	[
	  {nombre: 'Alejandro', edad: 30},
	  {nombre: 'María', edad: 25},
	  {nombre: 'Carlos', edad: 35}
	]
Propiedad: 'edad'
Ejemplo de salida:
[
  {nombre: 'Alejandro', edad: 30},
  {nombre: 'Carlos', edad: 35}
]
*/

const arrayName= [
    {nombre: 'Alejandro', edad: 30},
    {nombre: 'María', edad: 25},
    {nombre: 'Carlos', edad: 35}
  ]

const nombersAge=(arrObj)=>{

    return arrObj.filter((item)=>item.edad>=30)


}

console.log(nombersAge(arrayName));
