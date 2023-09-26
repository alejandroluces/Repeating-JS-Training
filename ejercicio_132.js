/*
Ejercicio 132
Encontrar el valor más común en un array numérico:
- Entrada: [2, 3, 2, 5, 3, 2, 8]
- Salida: 2
*/

const mostCommon = (arr) => {
    const obj = arr.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {});

    const max = Math.max(...Object.values(obj));
    max
    return Object.keys(obj).find(key => obj[key] === max);
}


console.log(mostCommon([2, 3, 2, 5, 3, 2, 8])); // 2

