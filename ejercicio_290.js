/*
Ejercicio 290
Crear un Array de Fechas a partir de un Texto con Fechas:
	Entrada: Una cadena de texto que contiene fechas en formato DD/MM/AAAA.
	Salida: Un ejemplo sería:
		Entrada: "15/09/2023, 20/10/2023, 03/11/2023"
Salida: [Date, Date, Date] (donde Date representa objetos de fecha).
*/

const strDate = "18/09/2023, 20/10/2023, 03/11/2023"

const convertDateFormat = (str) =>{
   let newDate = 0
    Date.parse(str)
    newDate = str
    return newDate.split()
    
}

console.log(convertDateFormat(strDate));


