// Ejercicio 299
// Convertir una Lista de Fechas en un Array de Objetos de Eventos:
// 	Entrada: Una lista de fechas en formato DD/MM/AAAA.
// 	Salida: Un ejemplo sería:
// 		Entrada: "15/09/2023, 20/10/2023, 03/11/2023"
// Salida: [{ fecha: '15/09/2023' }, { fecha: '20/10/2023' }, { fecha: '03/11/2023' }]


const date = "15/09/2023, 20/10/2023, 03/11/2023"

const formatHours = (date) =>{
  
    return date.split(",").map((item) => {return{
        fecha: item
    }})
}

console.log(formatHours(date));
