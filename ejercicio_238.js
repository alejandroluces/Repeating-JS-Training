/*
Ejercicio 238
Agregar Elementos al Principio de un Array y Crear un
 Nuevo Array con Elementos Duplicados:

Entrada: Un array de palabras.
Salida: Un ejemplo sería:
Entrada: ["manzana", "pera", "uva"] (Agregar "manzana" y "pera" al principio)
Salida: ["manzana", "manzana", "pera", "pera", "uva"]
*/

const fruit = ["uva"]
const addFruits = ["manzana", "pera"]

const addFruistAndDuplicate = (arrFr,AddFrut)=>{
    
    return [...addFruits,...addFruits,...fruit].sort((a,b) => a>b ? 1 : -1)

    
}

console.log(addFruistAndDuplicate(fruit,addFruits));








