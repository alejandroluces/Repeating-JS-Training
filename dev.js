


//
const strExmple = "Rapido corren los carros"

const validateStr = (str) => {

    return str.split(/[A-Z]/)

}
console.log(validateStr(strExmple));

console.log([10,2,6].filter((item,index)=>item%index===0));
const dev= [10,2,6]
console.log(Math.min(...dev));











const diferenciaDeArreglos = (arr1, arr2) => {
	return arr1.filter(elemento => arr2.indexOf(elemento) !== -1);
}
console.log(diferenciaDeArreglos([1,2,3,8],[5,3,2,8]));


