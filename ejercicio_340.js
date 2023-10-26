/*
Ejercicio 340
 Comprobar si todos los elementos en un Array son menores de un valor dado (ejemplo: 50)

Entrada: [12, 25, 30, 40]
Salida: true
*/

const validateNum = (arrNum,num) =>{

    return arrNum.every((item) => item<50)
}

console.log(validateNum([12, 25, 30, 40],50));

