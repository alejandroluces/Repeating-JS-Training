/*
Ejercicio 210
Eliminar todas las cadenas de texto que contienen una letra específica 
de un array de cadenas de texto y devolver el nuevo array utilizando el método filter():
Entrada: ["perejil", "pimenton", "naranja", "plátano"] y letra a eliminar "a"
Salida: ["pera", "plátano"]
*/

const arrFruit= ["perejil", "pimenton", "naranja", "plátano"]
const lletter= "a"

const delettWordsLetter = (fruit,let) =>{

    return  fruit.filter((item) => !item.includes(let))
    
}

console.log(delettWordsLetter(arrFruit,lletter));










crear 



