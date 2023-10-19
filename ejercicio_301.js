/*
Ejercicio 301
Conversión de array en lista HTML:

Planteamiento: Convierte un array de elementos en una lista HTML no ordenada.
Ejemplo de entrada: ["Manzana", "Banana", "Naranja"]
Ejemplo de salida: <ul><li>Manzana</li><li>Banana</li><li>Naranja</li></ul>
*/

const listHtml = (arr) =>{

    return "<ul><li>" + arr.join("</li><li>") + "</li></ul>"; 

}

console.log(listHtml(["Manzana", "Banana", "Naranja"]));


