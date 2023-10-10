/*
Ejercicio 217
Crear una Lista Numerada de Tareas Pendientes:

Entrada: Un array de objetos de tareas pendientes.
Salida: Un ejemplo sería:
Entrada: [{ tarea: 'Comprar leche', completada: false }, { tarea: 'Hacer ejercicio', completada: false }, { tarea: 'Llamar a Juan', completada: true }]
Salida: "1. [ ] Comprar leche\n2. [ ] Hacer ejercicio\n3. [x] Llamar a Juan"
*/

const listPushar= [
    { tarea: 'Comprar leche', completada: false }, 
    { tarea: 'Hacer ejercicio', completada: false }, 
    { tarea: 'Llamar a Juan', completada: true }
]

const selectHomeworkOk = (list) =>{

    return list.map((item,idex) => {
        if (item.completada===true) {

            return `${idex+1}. [x] ${item.tarea}`
        }
        return `${idex+1}. [ ] ${item.tarea}`
    }).join("\n")

}

console.log(selectHomeworkOk(listPushar));
