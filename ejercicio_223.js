/*
Ejercicio 223
Crear una Lista de Comentarios a partir de un Array de Comentarios:

Entrada: Un array de objetos que representan comentarios con nombres y contenido.
Salida: Un ejemplo sería:
Entrada: [{ nombre: 'Ana', comentario: 'Excelente artículo' }, { nombre: 'Juan', comentario: 'Muy informativo' }]
Salida: "Ana: Excelente artículo\nJuan: Muy informativo"
*/


const arrNameComent = [
    
    { nombre: 'Ana', comentario: 'Excelente artículo' }, 
    { nombre: 'Juan', comentario: 'Muy informativo' }

]

const merchNameAndComent = (arrNames) =>{

    return arrNames.map((item) => `${item.nombre}: ${item.comentario}`)
}

console.log(merchNameAndComent(arrNameComent));
