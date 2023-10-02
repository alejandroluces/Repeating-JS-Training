/*
Ejercicio 178
Filtrar números menores que un valor dado de una matriz de números y mostrar los resultados en una matriz nueva:
Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]] y valor máximo 4
Salida: [[2, 3], [1, 2, 3], []]
*/

const filtValueMax = (arrNumbeers,numMax) =>{

    return arrNumbeers.map((item)=>item.filter((item)=>item<4))

}

console.log(filtValueMax([[2, 3, 4], [1, 2, 3], [5, 6, 7]],4));
