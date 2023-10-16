/*
Ejercicio 278
Eliminar Elementos Repetidos en una Lista de Reproducción:

Entrada: Un array que representa una lista de reproducción de canciones.
Salida: Un ejemplo sería:
Entrada: ["Canción 1", "Canción 2", "Canción 1", "Canción 3"]
Salida: Set de canciones únicas en la lista de reproducción.
*/

const arrMusic = ["Canción 1", "Canción 2", "Canción 1", "Canción 3"]

const musicUnic = (arr) =>{

    return new Set ( arr)
}

console.log(musicUnic(arrMusic));

