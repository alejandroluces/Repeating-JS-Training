/*
Ejercicio 125
Encontrar la cadena más larga en un array de cadenas de texto:
- Entrada: ["manzana", "plátano", "sandíaverde", "kiwi"]
- Salida: "sandíaverde"
*/

const strVeryLong = (str) =>{

    return str.reduce ((a,b)=> a.length> b.length ? a : b)

}

console.log(strVeryLong(["manzana", "plátano", "sandíaverde", "kiwi"]));
