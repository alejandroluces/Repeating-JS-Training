/*
Ejercicio 97
Unir dos arrays de nombres y ordenarlos alfabéticamente:

Entrada: ["Juan", "María"] y ["Smith", "Gómez"]
Salida: ["Gómez, Juan", "Smith, María"]
*/

const orderArr=(arrOne,arrTwo)=>{

    return arrOne.map((item,index)=>`${arrTwo[index]} ${item}`).sort()

    }

console.log(orderArr(["Juan", "María"] , ["Smith", "Gómez"]));
