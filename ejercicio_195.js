/*
Ejercicio 195
Agregar elementos al final de un array de cadenas y devolver el nuevo array utilizando el método concat():

Entrada: ["manzana", "pera"] y elementos a agregar ["naranja", "plátano"]
Salida: ["manzana", "pera", "naranja", "plátano"]
*/

const addArr = (arr1,arr2)=> {
    arr1.push(arr2)
    return arr1.flat()

    // return arr1.concat(arr2)

}
console.log(addArr(["manzana", "pera"],["naranja", "plátano"]));
