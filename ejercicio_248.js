/*
Ejercicio 248
Agregar Elementos al Principio de un Array de Fechas y Crear un Nuevo Array de Fechas Futuras:

Entrada: Un array de objetos de fecha.
Salida: Un ejemplo sería:
Entrada: [new Date('2023-09-01'), new Date('2023-09-15'), new Date('2023-10-01')] 
(Agregar una fecha futura al principio)
Salida: [Date, Date, Date, Date] (donde Date representa objetos de fecha futura).
*/

// Solución:

const dates = [new Date('2023-09-01'), new Date('2023-09-15'), new Date('2023-10-01')];

const addFutureDates = (dates, n) => {

    return [...Array(n).keys()].map(i => {
        const date = new Date(dates[0]);
        date.setMonth(date.getMonth() + i);
        return date;
    })


}

console.log(addFutureDates(dates, 4));
