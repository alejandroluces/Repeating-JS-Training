/*
Ejercicio 186
Encontrar el primer elemento que no sea una cadena de texto en una matriz 
mixta (números y cadenas) y mostrarlo junto con su índice en el array principal:

Entrada: [[2, "manzana"], ["pera", 5, "uva"], ["naranja", "cereza"]]
Salida: {elemento: 2, indiceArrayExterno: 0, indiceArrayInterno: 0}
*/




const firshElementStr = (fruitNum) =>{

    return fruitNum.map((item,index)=>{return{
        elemento:item.find((item)=> typeof item !== "string"),
        indiceArrayExterno:index,
        indiceArrayInterno:item.findIndex((item) => typeof item !== "string")

    }}).find((item)=>item.elemento !==undefined)
  
  }
console.log(firshElementStr([["naranja", "cereza"],["manzana"], ["pera", 5, "uva"]]));