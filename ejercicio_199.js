/*
Ejercicio 199
Agregar un objeto al final de un array de objetos solo si no está presente y devolver el nuevo array:

Entrada: [{nombre: "Juan"}, {nombre: "María"}] y objeto a agregar {nombre: "Juan"}
Salida: [{nombre: "Juan"}, {nombre: "María"}] (sin cambios)
*/

const addName = (arroObjName, obj) =>{

    if (arroObjName.includes(obj)) {
        return arroObjName
        
    }else{
        arroObjName.push(obj)
        return arroObjName.sort((a,b) => a.nombre>b.nombre ? 1: -1)
    }

}

console.log(addName([ {nombre: "María"}],{nombre: "Juan"} ));
