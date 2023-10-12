// Entrada: Un array de números.
// Salida: Un ejemplo sería:
// Entrada: [5, 10, 15, 20, 25] (Eliminar elementos menores que 15)
// Salida: [15, 20, 25]

const deleteNumbers = (arr) =>{

     return arr.filter((item) => item>=15)
    //Otra Forma
    // return arr.filter((item) => item>=15?true:false)
    //Otra Forma
    // return arr.filter((item) => item>=15?1:0)

   
}

console.log(deleteNumbers([5, 10, 15, 20, 25]));
