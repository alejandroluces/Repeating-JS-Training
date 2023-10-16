/*
Ejercicio 258
Verificar la Existencia de una Fecha en un Calendario:

Entrada: Un array de fechas (como cadenas de texto) y una fecha a buscar.
Salida: Un ejemplo sería:
Entrada: ["2023-09-01", "2023-09-15", "2023-10-01"], "2023-09-15"
Salida: true
*/

const date = ["2023-09-01", "2023-09-15", "2023-10-01"]
const findDate = "2023-09-15"

const dateValidate = (arr,date) =>{

    return arr.includes(date)
}

console.log(dateValidate(date,findDate));
