const positiveSum = (arr) =>{

    // return arr.reduce((acc,curr) => {
    //     if(curr > 0){
    //         acc += curr;
    //     }
    //     return acc;
    // },0);

    // Otra Solucion

    // return arr.reduce((acc,curr) => curr > 0 ? acc + curr : acc,0);
    return arr.reduce((a,b)=>b>0 ? a+b : a,0)

}

console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));
