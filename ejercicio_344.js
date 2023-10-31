/*
/ En este kata, tu trabajo es devolver los dos valores más altos distintos en una lista. Si hay menos de 2 valores únicos, devuelva tantos como sea posible.

// El resultado también debe ordenarse de mayor a menor.

// Ejemplos:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []
*/
const extraeValuMayor = (arrNum) =>{

    return [...new Set(arrNum)].sort((a,b)=>b-a).splice(0,2)
    

}
console.log(extraeValuMayor([4, 10, 10,11, 9]));
console.log(extraeValuMayor([1, 1, 1]));
console.log(extraeValuMayor([]));
