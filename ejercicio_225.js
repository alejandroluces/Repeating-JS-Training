/*
Ejercicio 225
Crear una Lista de Coordenadas a partir de un Array de Puntos:

Entrada: Un array de objetos que representan puntos con coordenadas x e y.
Salida: Un ejemplo sería:
Entrada: [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }]
Salida: "1,2\n3,4\n5,6"
*/

const points = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }]

const divideCordenadas = (arrPoints) => {

    return arrPoints.map((item) => `${item.x},${item.y}`).join("\n")

}

console.log(divideCordenadas(points));
