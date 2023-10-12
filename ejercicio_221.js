/*
Ejercicio 221
Crear una Lista de Enlaces a partir de una Lista de URLs:

Entrada: Un array de URLs.
Salida: Un ejemplo sería:
Entrada: ["https://example.com", "https://example.org", "https://example.net"]
Salida: "<a href="https://example.com">https://example.com</a>,<a href="https://example.org">https://example.org</a>,<a href="https://example.net">https://example.net</a>"
*/

const arrLink = ["https://example.com", "https://example.org", "https://example.net"]

const converToHtml = (arrl) =>{

    return arrl.map((item) => `<a href= ${item} </a>`)
}

console.log(converToHtml(arrLink));
