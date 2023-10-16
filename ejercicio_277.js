/*
Ejercicio 277
Extraer Dominios Únicos de una Lista de Correos Electrónicos:

Entrada: Un array de direcciones de correo electrónico.
Salida: Un ejemplo sería:
Entrada: ["usuario1@example.com", "usuario2@example.com", "usuario1@example.com"]
Salida: Set {"usuario1@example.com", "usuario2@example.com"}
*/

const usersEmail = ["usuario1@example.com", "usuario2@example.com", "usuario1@example.com"]

const setUsers = (arr) =>{

    return new Set(arr)
}

console.log(setUsers(usersEmail));
