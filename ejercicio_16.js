// 6)Planteamiento: Verificar si un estudiante aprobó o reprobó un examen.
// Entrada: La calificación obtenida en el examen (número entero).
// Salida: "Aprobado" si la calificación es mayor o igual a 60, o "Reprobado" si es menor a 60.

const validateStudentApproval=note=>{

    return note>=60?`Aprobado`: `Repobado`

}

console.log(validateStudentApproval(60));
