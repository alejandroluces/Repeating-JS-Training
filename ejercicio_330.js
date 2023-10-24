/*
Ejercicio 330
Comprobar si algún objeto en un Array de objetos tiene una 
propiedad 'apellido' que comienza con 'A'

Entrada: [{nombre: 'Laura', apellido: 'Smith'}, {nombre: 'James', apellido: 'Adams'}]
Salida: true
*/
const namesLastName = [{nombre: 'Laura', apellido: 'Smith'}, {nombre: 'James', apellido: 'Adams'}]
const init = "A"
const validateNamesIni = (arrFullNames,letter) =>{

    return arrFullNames.map((item) => item.apellido[0]).some((item) => item===letter)

}
console.log(validateNamesIni(namesLastName,init));


