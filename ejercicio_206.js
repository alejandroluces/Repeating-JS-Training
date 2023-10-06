/*
Ejercicio 206
Eliminar el primer elemento de un array de cadenas y devolver el 
elemento eliminado junto con el nuevo array:
Entrada: ["manzana", "pera", "naranja"]
Salida: Elemento eliminado: "manzana", Nuevo array: ["pera", "naranja"]
*/

const deleteFirshEment = (arr) =>{
    let delette = arr.shift()
    return `Elemento eliminado:${delette}, Nuevo array: ${arr}`
}

console.log(deleteFirshEment(["manzana", "pera", "naranja"]));
