 /*
  Planteamiento:
  Supongamos que tienes dos arreglos de objetos, cada uno representando datos relacionados. Queremos combinar estos dos arreglos en una sola estructura utilizando reduce, asegurándonos de eliminar duplicados en función de un campo clave en los objetos.--------------------------------
  */
  
  // Entrada:
  
  // Salida:
  // [
  //   { id: 1, nombre: 'Juan', edad: 25, ciudad: 'San Francisco' },
  //   { id: 2, nombre: 'María', edad: 30 },
  //   { id: 3, nombre: 'Luis', edad: 28, ciudad: 'Nueva York' },
  //   { id: 4, ciudad: 'Los Ángeles' }
  // ] 
  
  
  const array1 = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'María', edad: 30 },
    { id: 3, nombre: 'Luis', edad: 28 }
  ];
  
  const array2 = [
    { id: 3, ciudad: 'Nueva York' },
    { id: 4, ciudad: 'Los Ángeles' },
    { id: 1, ciudad: 'San Francisco' }
  ]; 
/* 
const mergeArray = (arr1, arr2) => {
       
    let newArr = arr1.map(obj => {  
        let obj2 = arr2.find(obj2 => obj2.id === obj.id);
        
        return {...obj, ...obj2};

    });
    
    let newArr2 = arr2.filter(obj => !arr1.find(obj2 => obj2.id === obj.id));
    return [...newArr, ...newArr2];

}
console.log(mergeArray(array1, array2));
*/
const mergeArray = (arr1, arr2) => {
    let newArr = arr1.reduce((acc, obj) => {
        let newObj = arr2.find(o => o.id === obj.id);
        if (newObj) {
            acc.push({...obj, ...newObj});
        } else {
            acc.push(obj);
        }
        return acc;
    }, []);
    let newArr2 = arr2.filter(obj => !arr1.find(obj2 => obj2.id === obj.id));
    return [...newArr, ...newArr2];
    

}
console.log(mergeArray(array1, array2));
