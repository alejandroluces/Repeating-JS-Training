/*
Ejercicio 233
Eliminar el Primer Elemento de un Array y Crear un Nuevo Array de Fechas Convertidas:

Entrada: Un array de fechas en formato de texto.
Salida: Un ejemplo sería:
Entrada: ["2023-09-01", "2023-09-15", "2023-10-01"] (Convertir a objetos de fecha)
Salida: [Date, Date, Date] (donde Date representa objetos de fecha).
*/

const dateFormat = (date) =>{

  
    // return date.map((item) => new Date(item)).shift()
    //Otra Forma
    return date.map((item) => new Date(item)).slice(1)
    //Otra Forma
    // return date.map((item) => new Date(item)).filter((item,index) => index>0)


}

console.log(dateFormat(["2023-09-01", "2023-09-15", "2023-10-01"]));
