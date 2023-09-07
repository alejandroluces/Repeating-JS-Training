// ELIMINAR VOCALES EN UNA CADENA
// "how are you today?"

const deleteVocals=(deleteLetter)=>{

    return deleteLetter.replace(/[aeiou]/g, '')  

}

console.log(deleteVocals("how are you today?"));
