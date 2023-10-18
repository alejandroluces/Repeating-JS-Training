/*
Ejercicio 293
Convertir una Lista de Correos Electrónicos en un Array de Objetos de Usuarios:
	Entrada: Una lista de correos electrónicos en formato de texto.
	Salida: Un ejemplo sería:
		Entrada: "usuario1@example.com, usuario2@example.com, usuario3@example.com"
Salida: [{ correo: 'usuario1@example.com' }, { correo: 'usuario2@example.com' }, { correo: 'usuario3@example.com' }]
*/

const email= "usuario1@example.com, usuario2@example.com, usuario3@example.com"

const ArrObjEmail = (strEmail) =>{

    let separateEmail = strEmail.split(",")
    const result = separateEmail.map((item) =>{return{
        correo: item
    }}) 
    return result
}
console.log(ArrObjEmail(email));
