// Se requiere contar cuanto "k" hay en el siguiente str: "kakkerlak"

const str = "kakkerlak";
const letter = "k";

const countK = (str, letter) => {

    return str.split("").filter((item)=> item === letter).length

}

console.log(countK(str,letter));




// Ejercicio Codewars________________________-

const getPlanetName =(id) =>{
    let name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        
        
    }
    
    return name;
  }

  console.log(getPlanetName(8));
  
/*
Ejercicio 337
 Comprobar si todos los objetos en un Array de objetos
  tienen una propiedad 'activo' con valor true

Entrada: [{nombre: 'Carlos', activo: true}, {nombre: 'Elena', activo: true}]
Salida: true
*/
const nameStatus = [{nombre: 'Carlos', activo: true}, {nombre: 'Elena', activo: true}]
const validateValue = (arrObj) =>{

    return arrObj.map((item) => item.activo).every(item=>item===true)

}

console.log(validateValue(nameStatus));


