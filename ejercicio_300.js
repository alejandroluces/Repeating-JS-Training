/*

// Calcular el total de la compra

*/
const compra=[
    
    {
        articulo: "destock",
        price: 100,
        qty: 5
    },
    {
        articulo: "notebook",
        price: 1000,
        qty: 5
    },
    {
        articulo: "tablet",
        price: 100,
        qty: 2
    }

]

const calculateBuy = (arrrObj) =>{

    return arrrObj.map((item) => item.price*item.qty).reduce((a,b) => a+b)

}
console.log(calculateBuy(compra));

