/*
Ejercicio 314
Generación de una lista ordenada:

Planteamiento: Convierte un array de elementos en una lista ordenada (ol) HTML.
Ejemplo de entrada: ["Perro", "Gato", "Pájaro"]
Ejemplo de salida: <ol><li>Perro</li><li>Gato</li><li>Pájaro</li></ol>
*/

const listHtml = (arr) =>{

    return `<ol><li>${arr.join("</li><li>")}<li><ol>`
    
}

console.log(listHtml(["Perro", "Gato", "Pájaro"]));


 
    







