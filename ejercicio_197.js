/*
Ejercicio 197
Agregar una cadena de texto al final de un array de cadenas solo si no está presente y devolver el nuevo array:

Entrada: ["manzana", "pera", "naranja"] y cadena a agregar "pera"
Salida: ["manzana", "pera", "naranja"] (sin cambios)

*/

const addFrits = (arrFruits, fruit) =>{

    if (arrFruits.includes(fruit)) {
        return arrFruits
        
    }else{
        arrFruits.push(fruit)
        return arrFruits
    }
    
}

console.log(addFrits(["manzana","pera", "naranja"],"pera"));
