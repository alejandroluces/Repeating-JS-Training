// retornar el promedio de una arr
const findAverage=(arr)=>{
    if(arr.length===0){return 0}else{
    return arr.reduce((a,b)=>a+b)/arr.length
    }

}



console.log(findAverage([1,2,3]));
console.log(findAverage([1,2,3,4]));
console.log(findAverage([]));
