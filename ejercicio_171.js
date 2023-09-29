/**
 Ejercicio 171
Filtrar elementos que no sean números de una matriz mixta (números y cadenas)
 y mostrar los resultados en una matriz nueva:

Entrada: [[2, "manzana", 4], [1, "naranja", 3], ["uva", 6, "cereza"]]
Salida: [[2, 4], [1, 3], [6]]
 */

const filtNum = (arrStrNum) =>{

    return arrStrNum.map((item)=> item.filter((itemFil)=> typeof itemFil==="number")) 

}

console.log(filtNum([[2, "manzana", 4], [1, "naranja", 3], ["uva", 6, "cereza"]]));
