/*
Ejercicio 243
Agregar Elementos al Principio de un Array y Crear un Nuevo Array de Fechas Convertidas:

Entrada: Un array de fechas en formato de texto.
Salida: Un ejemplo sería:
Entrada: ["2023-09-01", "2023-09-15", "2023-10-01"] (Agregar "2023-08-15" 
al principio y convertir a objetos de fecha)
Salida: [Date, Date, Date, Date] (donde Date representa objetos de fecha).
*/

const addDate = (date,addDate) =>{

    let newDate = new Date(addDate)
    return [newDate,...date].map(x=>new Date(x)) //map crea un nuevo array con el resultado de la funcion
    
}

console.log(addDate(["2023-09-01", "2023-09-15", "2023-10-01"], "2023-08-15"));


