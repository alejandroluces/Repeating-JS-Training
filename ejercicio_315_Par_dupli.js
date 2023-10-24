// Num Par

const extraeNumPrimo = (min,max) =>{
    let result= []
    for (let i = min; i <= max; i++) {
        // const element = array[i];
        result.push(i)
        result
    }
    return result.map((item)=> item%2 !==0 ?`El numero ${item} no es Par` : `El numero ${item} es Par`)
}
console.log(extraeNumPrimo(1,100));

// Eliminar Duplicados en un arreglo

const arrNumbers= ["alejandro",1,2,3,4,2,3,3,6,2,8,"alejandro"]

const deleteDuplicate = (arr) =>{
    
    return arr.filter((item,index) => {
        return arr.indexOf(item) === index
    })
   
    // let result= new Set(arr)
    // return [...result]

 
}
console.log(deleteDuplicate(arrNumbers));

// Tengo el sigueinte arr de numeros y palabaras ["alejandro",1,2,3,4,2,3,3,6,2,8,"Alejandro"] . Eliminar los duplicados. Para no considerar los duplicados, convertir todo a minusculas.

const letter= [2,3,4,5,0,63,55,4,5,96,6,3,2,2,2,4,6,7,90]

const deleteNumDuplicate = (arrNumbers) =>{

    return arrNumbers.filter((item,index)=> {
        return arrNumbers.indexOf(item)=== index
    })
}

console.log(deleteNumDuplicate(letter));
