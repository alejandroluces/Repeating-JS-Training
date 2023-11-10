/*
Dadas tres matrices de números enteros, devuelve la suma de los elementos que son comunes en las tres matrices.

Por ejemplo:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
Más ejemplos en los casos de prueba.

¡Buena suerte!


*/

const common = (a,b,c) =>{

    return a.includes(b)
}

console.log(common([1,2,3],[5,3,2],[7,3,2]));






const elementsSum = (arr,d) =>{
    let dev = arr.map((item,index) => item).
    dev
    let calculo1 = arr.map((item,index) => item).map((item2) => item2[2])[0]
        
     calculo1
     let calculo2 = arr.map((item,index) => item).map((item2) => item2[1])[1]
     calculo2
     let calculo3 = arr.map((item,index) => item).map((item2) => item2[0])[2]
        calculo3
        if (arr.map((item,index) => item)[0].length<3){
            return [calculo2,calculo3].reduce((a,b) => a+b)
        }else if(arr.map((item,index) => item).length<3){
            return [calculo1,calculo2].reduce((a,b) => a+b)
        }else if(arr.map((item,index) => item).map((item2) => item2)[2].length===0){
            return [calculo1,calculo2].reduce((a,b) => a+b)
        } else if (arr.map((item,index) => item).every((item2) => item2.length<3 && isNaN(arr))){
            return 0
        }else{
            return [calculo1,calculo2,calculo3].reduce((a,b) => a+b)
        }
        
    }
    
    // console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]));
    // console.log(elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]]));
    // console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2],[5]]));
    // console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]));
    console.log(elementsSum([[3, 2], [4,2], [3]]));

    
    
    