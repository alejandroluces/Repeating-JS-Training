/*
Ejercicio 328
Comprobar si algún objeto en un Array de objetos tiene 
una propiedad 'ciudad' igual a 'Nueva York'

Entrada: [{nombre: 'Alice', ciudad: 'Los Ángeles'},
 {nombre: 'Bob', ciudad: 'Nueva York'}]
Salida: true
*/
const arrNamesCity = [
                {nombre: 'Alice', ciudad: 'Los Ángeles'},
                {nombre: 'Bob', ciudad: 'Nueva York'}
            
            ]
const validateCity = (arrCity,city) =>{

    return arrCity.map((item) => item.ciudad).some((itemSome) => itemSome===city)


}
console.log(validateCity(arrNamesCity,'Nueva York'));


