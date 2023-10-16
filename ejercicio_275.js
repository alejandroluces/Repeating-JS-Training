/*
Ejercicio 275
Extraer Nombres de Usuarios Únicos de un Foro:

Entrada: Un array de objetos que representan usuarios de un foro, 
con propiedades, incluyendo un nombre de usuario.
Salida: Un ejemplo sería:
Entrada: [ { id: 1, usuario: "Alice" }, { id: 2, usuario: "Bob" }, { id: 3, usuario: "Alice" } ]
Salida: Set de nombres de usuario únicos.
*/

const users = [ 
    { id: 1, usuario: "Alice" }, 
    { id: 2, usuario: "Bob" }, 
    { id: 3, usuario: "Alice" } 
]

const extraeName = (arr) =>{

    let names = arr.map((item) => item.usuario)
    return new Set(names)
}

console.log(extraeName(users));
