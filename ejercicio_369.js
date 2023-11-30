/*
Ejercicio 369: Encontrar el objeto con el valor máximo en una propiedad específica

Entrada: [{nombre: 'Luis', salario: 3500}, {nombre: 'Elena', salario: 4200}], propiedad: salario
Salida: {nombre: 'Elena', salario: 4200}


*/
const salary = [{nombre: 'Luis', salario: 3500}, {nombre: 'Elena', salario: 4200}]
 
const findSalary = (arrobj,key) =>{

    return arrobj.sort((a,b) => a.salario < b.salario ? 1 : -1).find((item)=>item)

}

console.log(findSalary(salary,"salario"));
