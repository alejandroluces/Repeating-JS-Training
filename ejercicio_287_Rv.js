/*
Ejercicio 287
Convertir una Lista de Compras en un Array de Objetos:
	Entrada: Una lista de compras en formato de texto.
	Salida: Un ejemplo sería:
		Entrada: "Manzanas: 3, Plátanos: 2, Leche: 1"
Salida: [{ nombre: 'Manzanas', cantidad: 3 }, 
{ nombre: 'Plátanos', cantidad: 2 }, 
{ nombre: 'Leche', cantidad: 1 }]
*/

const listPushare = "Manzanas: 3, Plátanos: 2, Leche: 1"
const converArrObj = (str) =>{

    // const arr = str.split(", ")
    // const obj = arr.map((item) => {
    //     const arrItem = item.split(": ")
    //     return {nombre: arrItem[0], cantidad: arrItem[1]}
    // })
    // return obj
    const converArr = str.split(", ")
    converArr
    const converObj = converArr.map((item) =>{

        const arrItem = item.split(": ")
        arrItem
        return{Nombre: arrItem[0],cantidad: arrItem[1]}


    })
        return converObj
}

console.log(converArrObj(listPushare));
