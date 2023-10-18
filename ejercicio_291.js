/*
Ejercicio 291
Convertir una Lista de Tareas en un Array de Objetos de Tareas:
	Entrada: Una lista de tareas en formato de texto.
	Salida: Un ejemplo sería:
		Entrada: "Comprar leche, Hacer ejercicio, Llamar a Juan"
Salida: [{ tarea: 'Comprar leche', completada: false }, 
{ tarea: 'Hacer ejercicio', completada: false }, 
{ tarea: 'Llamar a Juan', completada: false }]
*/
const strActivity = "Comprar leche, Hacer ejercicio, Llamar a Juan"
const homeWorkList = (str) =>{

    let separar= str.split(", ")
    const interarActivity = separar.map((item) => {return{
        Tarea: item ,Completado: false

    }} )
    return interarActivity
}

console.log(homeWorkList(strActivity));


