/*

Ejercicio 104
Agregar prefijos a cada elemento en un array de cadenas según su longitud:

Entrada: ["manzana", "pera", "uva"]
Salida: ["Lamanzana", "pera", "La uva"]

*/

const prefLaStr = (arr) => {

    return  arr.map((item) => item.length !== 4 ? `La ${item}`: item)

}

console.log(prefLaStr(["manzana", "pera", "uva"]));
