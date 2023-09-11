// Calcular el total de la compra
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

const calculateTotal=(compra)=>{

    let totalPorArti=compra.map((item)=>item.price*item.qty)
    return totalPorArti.reduce((a,b)=>a+b)  

}

console.log(calculateTotal(compra));

