const isDigit  = (s) => {
     
    let result = Math.abs(s)
    return [...result.toString()].map((item) => item).some((item2) => item2 !== "String")
     
}

console.log(isDigit("-34.4"));
  


const arr = [5,3,2,8,1,4]

const order = (array) =>{
  return array.map(((item,index)=>{item,index})).sort((a,b)=>a.item - b.item.map(item2=>item2.item))
}

console.log(order(arr));
