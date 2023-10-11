/*
Ejercicio 218
Convertir una Matriz Bidimensional en una Cadena de Texto Tabular:

Entrada: Una matriz bidimensional.
Salida: Un ejemplo sería:
Entrada: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Salida:
arduino
Copy code
"1,2,3
 4,5,6
 7,8,9"
 
*/

const arrNumbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const convertInNumersFormat = (arrNum) =>{

    return arrNum.map((item)=>item.join(",")).join("\n")
}

console.log(convertInNumersFormat(arrNumbers));
