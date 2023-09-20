/*
Ejercicio 75: Buscar elementos en un array de objetos

Planteamiento: Escribe una función que tome un array de objetos y una propiedad junto con un valor, y devuelva un array con los objetos que coincidan con la propiedad y valor dados.
Ejemplo de entrada:
[
  {nombre: 'Alejandro', ciudad: 'Madrid'},
  {nombre: 'María', ciudad: 'Barcelona'},
  {nombre: 'Carlos', ciudad: 'Madrid'}
]
Propiedad: 'ciudad', Valor: 'Madrid'
Ejemplo de salida:
[
  {nombre: 'Alejandro', ciudad: 'Madrid'},
  {nombre: 'Carlos', ciudad: 'Madrid'}
]

*/

const peopleAndCity=[
    {nombre: 'Alejandro', ciudad: 'Madrid'},
    {nombre: 'María', ciudad: 'Barcelona'},
    {nombre: 'Carlos', ciudad: 'Madrid'}
  ]

const filterPeople=(city)=>{

    return city.filter((item)=>item.ciudad==="Madrid")

}

console.log(filterPeople(peopleAndCity));
