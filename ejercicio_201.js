/*
Ejercicio 201
Agregar un número al inicio de un array de números y devolver el nuevo array:
Entrada: [2, 3, 4, 5] y número a agregar 1
Salida: [1, 2, 3, 4, 5]
*/

const addArrNum = (arrNum, num) => {
    // return [num].concat(arrNum);
    // return [num, ...arrNum];
    // return arrNum.unshift(num);
    // usa el metodo push
    arrNum.push(num);
    return arrNum.sort((a, b) => a - b);
}

console.log(addArrNum([2, 3, 4, 5], 1));