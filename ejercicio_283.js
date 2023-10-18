/*
Ejercicio 283
Crear un Conjunto de Palabras Clave Únicas en un Blog Post:
Entrada: Un objeto que contiene un blog post con propiedades, incluyendo 
una lista de palabras clave.
Salida: Un ejemplo sería:
Entrada: { titulo: "Mi Blog Post", 
contenido: "Este es un blog post sobre JavaScript.", 
palabrasClave: ["JavaScript", "blog", "tutorial", "JavaScript"] }
Salida: Set {"JavaScript", "blog", "tutorial"}
*/

const listBlog = { 
        titulo: "Mi Blog Post", 
        contenido: "Este es un blog post sobre JavaScript.", 
        palabrasClave: ["JavaScript", "blog", "tutorial", "JavaScript"] 
    }

const newSetPalabraClave = (obj) =>{
    let obtnerUltimallave = Object.values(obj)[2]
    return new Set(obtnerUltimallave)
}

console.log(newSetPalabraClave(listBlog));
