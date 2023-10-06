/*
Ejercicio 203
Agregar varios elementos al inicio de un array de números y devolver el nuevo array:
Entrada: [3, 4, 5] y elementos a agregar [1, 2]
Salida: [1, 2, 3, 4, 5]
*/

const addFirshElemnt = (arr1, arr2) =>{

    // return [...arr2,...arr1]


    // arr1.unshift(arr2)
    // return arr1.flat()

    // arr1.push(arr2)
    // return arr1.flat().sort()

    arr2.push(...arr1)
    return arr2
}
console.log(addFirshElemnt([3, 4, 5],[1, 2]));
