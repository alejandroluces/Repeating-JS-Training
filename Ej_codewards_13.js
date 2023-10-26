/* 
const students= [
    { name: 'John', grade: 7 },
    { name: 'Alice', grade: 8 },
    { name: 'Bob', grade: 7 },
    { name: 'Charlie', grade: 8 }
  ];


  Crear una funcion para dar salida lo siguiente
  salida: {7: ['John, 'Bob'], 8: [ 'Alice', 'Charlie'] }

  */

  const students= [
    { name: 'John', grade: 7 },
    { name: 'Alice', grade: 8 },
    { name: 'Bob', grade: 7 },
    { name: 'Charlie', grade: 8 }
  ];

  const searchLasItems = (objSt) =>{

    // return objSt.reduce((acc,item) => {
    //     acc[item.grade] = acc[item.grade] || [];
    //     acc[item.grade].push(item.name);
    //     return acc;
    // },{})

    // otra forma de hacerlo


    // return objSt.reduce((acc,item) => {
    //     if(acc[item.grade]){
    //         acc[item.grade].push(item.name);
    //     }else{
    //         acc[item.grade] = [item.name];
    //     }
    //     return acc;
    // },{})
    return objSt.reduce((acc,item)=>{
        if(acc[item.grade]){acc[item.grade].push(item.name)}
        else{
            acc[item.grade] = [item.name]
        }
        return acc
    },{})
  }

  console.log(searchLasItems(students));
  
  /*
  Las estructuras de datos no se mutan. El original no se se muta


Duplicar los números en un array:
Planteamiento: Escribe una función que tome un array de números como entrada y 
devuelva un nuevo array donde cada número se haya duplicado.
Entrada: [3, 5, 7, 9]
Retorno: [6, 10, 14, 18]
  */
 const duplicateNumArr = (arrNum) =>{

    return arrNum.map((item)=> item*2)
    
    // let result=[]
    // let numDuplicate= arrNum.map((item) => item*2)
    // result.push(numDuplicate)
    // return result.flat()
 }

 console.log(duplicateNumArr([3, 5, 7, 9]));
 

 /*
 Convertir nombres en iniciales:
Planteamiento: Escribe una función que tome un array de nombres completos y devuelva un nuevo array con las iniciales de cada nombre.
Entrada: ["John Doe", "Jane Smith", "Michael Johnson"]
Retorno: ["JD", "JS", "MJ"]
 */

const extraeInitialNames = (arrName) =>{

    // return arrName.map((item) => item.split(' ').map((item) => item[0]).join(''))
    return arrName.map((item)=> item.split(" ").map((item)=> item[0]).join(""))
}

console.log(extraeInitialNames(["John Doe", "Jane Smith", "Michael Johnson"]));


// Ejercicio 1: Calcular la suma de elementos en un Array

// Entrada: [1, 2, 3, 4, 5]
// Salida: 15


const  sumElement= ( arrNum) =>{
    // usando bucle for
    let result= 0
    for (let i= 0; i<arrNum.length;i++){
        result+=arrNum[i]
        result

    }
    return result
   
}


console.log(sumElement([1, 2, 3, 4, 5]));
