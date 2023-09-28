/*
Ejercicio 161
Calcular la suma de las columnas en una matriz de números y 
mostrar los resultados en un nuevo array:

Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]]
Salida: [8, 11, 14]
*/

const sumNumArr = (arrNum) =>{

    return arrNum.reduce((a,b)=>a.map((item,index)=> item+b[index]))
}

console.log(sumNumArr([[2, 3, 4], [1, 2, 3], [5, 6, 7]]));

/*
Ejercicio 162
Encontrar la fecha más reciente en una matriz de objetos que tienen una propiedad de fecha (timestamp):

Entrada: [{nombre: "Evento A", fecha: "2023-07-15"}, {nombre: "Evento B", fecha: "2022-02-20"}, {nombre: "Evento C", fecha: "2023-01-10"}]
Salida: "2023-07-15"
*/

const eventDay = [

    {nombre: "Evento A", fecha: "2023-07-15"}, 
    {nombre: "Evento B", fecha: "2022-02-20"}, 
    {nombre: "Evento C", fecha: "2023-01-10"}

]

const eventSearchDay = (event) =>{

    return event.map((item)=>item.fecha).reduce((a,b)=>a>b ? a: b)

}

console.log(eventSearchDay(eventDay));
