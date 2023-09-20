/*

Ejercicio 78: Convertir una cadena de palabras en título

Planteamiento: Crea una función que tome una cadena de palabras y la convierta en formato de título (cada palabra con mayúscula inicial).
Ejemplo de entrada: 'esto es un título'
Ejemplo de salida: 'Esto Es Un Título'

*/

const titleUpercase=(str)=>{

    let arr=str.split(' ');
  
    console.log(arr);

    let result= arr.map((item)=>item[0].toUpperCase()+item.slice(1)).join(" ")
    
    return result
   
}

console.log(titleUpercase('esto es un título'));
