/*

Ejercicio 102
Convertir cadenas de un array en mayúsculas y agregar el índice como propiedad:

Entrada: ["hola", "mundo", "javascript"]
Salida: [{cadena: "HOLA", indice: 0}, {cadena: "MUNDO", indice: 1}, {cadena: "JAVASCRIPT", indice: 2}]

*/

const convrtStrUppercase = (arr) =>{

return arr.map((item,index)=>{return{
    cadena: item.toUpperCase(), indice: index
}})

}

console.log(convrtStrUppercase(["hola", "mundo", "javascript"]));
