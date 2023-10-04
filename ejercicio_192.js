/*
Ejercicio 192
Agregar una cadena de texto al final de un array de cadenas y devolver el nuevo array:

Entrada: ["manzana", "pera", "naranja"] y cadena a agregar "plátano"
Salida: ["manzana", "pera", "naranja", "plátano"]
*/

const addFruit = (fruits, frut) =>{

    fruits.push(frut)
    return fruits
}
console.log(addFruit(["manzana", "pera", "naranja"],"platano"));
