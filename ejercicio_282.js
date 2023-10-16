/*
Ejercicio 282
Extraer Fechas Únicas de un Registro de Eventos:
Entrada: Un array de objetos que representan eventos con propiedades, incluyendo una fecha.
Salida: Un ejemplo sería:
Entrada: [
    { nombre: "Evento 1", fecha: "2023-09-10" }, 
    { nombre: "Evento 2", fecha: "2023-09-10" }, 
    { nombre: "Evento 3", fecha: "2023-09-15" }
]
*/

const eventoDay = [
    { nombre: "Evento 1", fecha: "2023-09-10" }, 
    { nombre: "Evento 2", fecha: "2023-09-10" }, 
    { nombre: "Evento 3", fecha: "2023-09-15" }
]

const searchOnlyEvent = (arr) =>{

    let event = arr.map((item) => item.nombre)
    return new Set (event)
}

console.log(searchOnlyEvent(eventoDay));
