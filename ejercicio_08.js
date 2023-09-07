/*

/* 
Los niños beben ponche.
Los adolescentes beben coca-cola.
Los jóvenes beben cerveza.
Los adultos beben whisky.
Haz una función que reciba la edad, y devuelva lo que beben.

Reglas:

Niños menores de 14 años: Los niños beben ponche.
Adolescentes menores de 18 años:Los adolescentes beben coca-cola.
Jóvenes menores de 21 años:Los jóvenes beben cerveza.
Adultos tienen 21 o más: Los adultos beben whisky.
*/

const whoDrink=(old)=>{
    if(old<14){return `Los niños beben ponche.`
        
    }
    if(old<18){return `Los adolescentes beben coca-cola`
        
    }
    if(old<21){return `Los jóvenes beben cerveza.`

    }else{return `Los adultos beben whisky.`

    }


}

console.log(whoDrink(15));
