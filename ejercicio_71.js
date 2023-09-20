/*

Ejercicio 72: Calcular el factorial de un número

Planteamiento: Crea una función que calcule el factorial de un número entero dado.
Ejemplo de entrada: 5
Ejemplo de salida: 120

*/

const calculateFac=(num)=>{
    let result=0
    for(let i=1;i<=num;i++){
       if(result==0){
        result=i
       }else{
        result*=i
       }
       
}
return result
}
console.log(calculateFac(5));


