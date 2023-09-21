/*
Ejercicio 86
Combinar dos arrays de objetos en uno nuevo:
Entrada: [{nombre: "Juan"}, {nombre: "María"}] y [{edad: 30}, {edad: 25}]
Salida: [{nombre: "Juan", edad: 30}, {nombre: "María", edad: 25}]
*/

const arrObjOne= [
    {nombre: "Juan"}, 
    {nombre: "María"}
]

const arrObjTwo = [
    {edad: 30}, 
    {edad: 25}
]

const merchArrObj=(arrOne,arrTwo)=>{

    // return arrOne.map((item,index)=>{

    //     return Object.assign({},item,arrTwo[index]);
    // });

    return arrObjOne.map((item,index)=>Object.assign({},item,arrTwo[index]))

}

console.log(merchArrObj(arrObjOne,arrObjTwo));
