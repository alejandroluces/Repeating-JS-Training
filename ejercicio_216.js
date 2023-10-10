/*
Ejercicio 216
Convertir un Array de Fechas en una Cadena de Fechas:

Entrada: Un array de objetos de fecha.
Salida: Un ejemplo sería:
Entrada: [new Date('2023-09-01'), new Date('2023-09-15'), new Date('2023-10-01')]
Salida: "Sun Sep 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time),Sun Sep 15 2023 00:00:00 GMT+0000 (Coordinated Universal Time),Wed Oct 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"

*/

const arrayFechas = [new Date('2023-09-01'), new Date('2023-09-15'), new Date('2023-10-01')];

const convertirArrayFechas = (arrDate) => {

    return arrDate.map((item) => item.toString()).join(",")

}

console.log(convertirArrayFechas(arrayFechas));



