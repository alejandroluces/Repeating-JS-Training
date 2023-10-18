/*
Ejercicio 292
Crear un Array de Números a partir de un Rango:
	Entrada: Un número mínimo y un número máximo.
	Salida: Un ejemplo sería:
		Entrada: 2, 6
Salida: [2, 3, 4, 5, 6]

*/

const minMaxNum = (min,max) =>{
    let newArray=[]
    for(let i=min ; i<=max ; i++)
    newArray.push(i)
    return newArray


    
}

console.log(minMaxNum(2,6));


