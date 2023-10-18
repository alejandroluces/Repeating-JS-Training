/*
Ejercicio 289
Convertir una Lista de Amigos en un Array de Objetos de Usuarios:
	Entrada: Una lista de amigos en formato de texto con nombres y edades.
	Salida: Un ejemplo sería:
		Entrada: "Ana (25), Juan (30), María (22)"
Salida: [{ nombre: 'Ana', edad: 25 }, { nombre: 'Juan', edad: 30 }, { nombre: 'María', edad: 22 }]
*/

const strNameAge = "Ana (25), Juan (30), María (22)"

const converStrInArrObj = (str) =>{

    let separate= str.split(", ")
    separate
    const strInObj = separate.map((item) =>{
        let interar = item.split(" ")
        interar
        return{
        Nombre: interar[0], edad: interar[1]
        }
    
        
    })
    
    return strInObj
}

console.log(converStrInArrObj(strNameAge));
