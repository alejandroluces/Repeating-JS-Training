/*
Ejercicio 202
Agregar una cadena de texto al inicio de un array de cadenas y devolver el nuevo array:
Entrada: ["manzana", "pera", "naranja"] y cadena a agregar "plátano"
Salida: ["plátano", "manzana", "pera", "naranja"]
*/

const addFruit = (fruists, addFruit) =>{

    // return [addFruit,...fruists]
    
    // fruists.unshift(addFruit);
    // return fruists;

    addFruit = [addFruit];
    addFruit.push(...fruists);

    return addFruit


}
console.log(addFruit(["manzana", "pera", "naranja"],"plátano"));
