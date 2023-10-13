/*
Planteamiento del ejercicio:
Dado un arreglo de objetos, determinar si existe al menos un objeto cuyo 
valor de la propiedad edad sea mayor o igual a 18.
Ejemplo de entrada:
const arregloObjetos = [
  {
    id: 1,
    nombre: "Juan",
    edad: 20,
  },
  {
    id: 2,
    nombre: "María",
    edad: 15,
  },
  {
    id: 3,
    nombre: "Pedro",
    edad: 17,
  },
];

*/

const arregloObjetos = [
    {
      id: 1,
      nombre: "Juan",
      edad: 20,
    },
    {
      id: 2,
      nombre: "María",
      edad: 15,
    },
    {
      id: 3,
      nombre: "Pedro",
      edad: 17,
    },
  ];

  const firshElemnt = (arrObj,age) =>{

    return arrObj.some((item) => item.edad>=age)
  }

  console.log(firshElemnt(arregloObjetos,20));
  

