/*
Ejercicio 295
Convertir una Lista de Usuarios en un Array de Objetos de Usuarios:
	Entrada: Una lista de usuarios en formato de texto con nombres, edades y correos electrónicos.
	Salida: Un ejemplo sería:
		Entrada: "Ana (25, ana@example.com), 
        Juan (30, juan@example.com), 
        María (22, maria@example.com)"
Salida: [{ nombre: 'Ana', edad: 25, correo: 'ana@example.com' }, { nombre: 'Juan', edad: 30, correo: 'juan@example.com' }, { nombre: 'María', edad: 22, correo: 'maria@example.com' }]
*/

const stringData = "Ana (25, ana@example.com), Juan (30, juan@example.com), María (22, maria@example.com)"

const convertStrObj = (str) =>{

    let separteStr = str.replace(/[(,)]/g, "").split(" ")
    separteStr
    let divide =separteStr.length/3
    divide
    let partOne= separteStr.splice(0,divide)
    partOne
    let partTwo =separteStr.splice(0,divide)
    partTwo
    let partThree =separteStr.splice(0,divide)
    partThree
    let merchArr=[partOne,partTwo,partThree]
    merchArr 
    
    return merchArr.map((item) => {return{
        nombre: item[0], edad: item[1], correo: item[2]
    }})
}
console.log(convertStrObj(stringData));
