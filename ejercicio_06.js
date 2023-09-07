// Crear una funcion que retorne lo sigueinte
// 5, True , false --> true, false, true , false, true, false, true, false, true, false
// 3, true, false --> true, false, true, false, true, false
// 2 rojo, blanco --> rojo, blanco, rojo, blanco
// */

const repeat = (num, bool1, bool2) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        i
        if (i % 2 === 0) {
        arr.push(bool1);
        console.log(bool1);
        } else {
        arr.push(bool2);
        console.log(bool2);
        
        }
    }
    return arr;
    }
    console.log(repeat(5, true, false));
    console.log(repeat(3, "rojo", false));

