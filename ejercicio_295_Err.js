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

const stringData = "Ana (25, ana@example.com),Juan (30, juan@example.com), María (22, maria@example.com)"

const convertStrObj = (str) =>{

    let strSeparate = str.replace(/[()]/g, "").split(",")
    return strSeparate.map((item,index) =>{return{
        nombre: Array.from(item ).join("").slice(0,-2),
        Edad: Array.from(item).join("").slice(-2),
        Email: strSeparate[1]

    }}).filter((item)=> !item.nombre.includes("@"))
}
console.log(convertStrObj(stringData));


