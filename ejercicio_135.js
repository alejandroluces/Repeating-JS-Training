/*
Ejercicio 135
Encontrar la fecha más reciente en un array de objetos que tienen una propiedad de fecha:
- Entrada: [{nombre: "Evento A", fecha: "2022-07-15"}, {nombre: "Evento B", fecha: "2023-02-20"}, {nombre: "Evento C", fecha: "2023-01-10"}]
- Salida: "2023-02-20"
*/

const eventDate =[
    {nombre: "Evento A", fecha: "2022-07-15"}, 
    {nombre: "Evento B", fecha: "2023-02-20"}, 
    {nombre: "Evento C", fecha: "2023-01-10"}
]

const eventDaterecent = (eventObj) =>{

    return eventObj.map ((item) => item.fecha).sort().slice(-1)

}

console.log(eventDaterecent(eventDate));
