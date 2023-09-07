// Dada [34, 15, 88, 2]su solución volverá2
// Dada [34, -345, -1, 100]su solución volverá-345

const valueMin=(arrNum)=>{

    return arrNum.sort((a,b)=>a-b)[0]

}

console.log(valueMin([34, 15, 88, 2]));
console.log(valueMin([34, -345, -1, 100]));
