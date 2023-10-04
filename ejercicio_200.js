/*
Ejercicio 200
Agregar elementos al final de un array de cadenas solo si no están presentes utilizando el método filter():

Entrada: ["manzana", "pera"] y elementos a agregar ["naranja", "plátano", "manzana"]
Salida: ["manzana", "pera", "naranja", "plátano"] (solo se agregaron los elementos que no estaban)
*/
const addArrFruit = (arrFruit, fruits) => {

    return arrFruit.concat(fruits.filter(item => !arrFruit.includes(item)));

    // if (fruits.length === 0) {
    //     return arrFruit;
    // }
    // let newFruits = fruits.filter(item => !arrFruit.includes(item));
    // return arrFruit.concat(newFruits);


}

console.log(addArrFruit(["manzana", "pera"],["naranja", "plátano", "manzana"]));
