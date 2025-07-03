
carrito=[
    {nombre:"coca",precio:200},
    {nombre:"yerba",precio:400},
    {nombre:"pasta de dientes",precio:300},
    {nombre:"arroz",precio:150},
]

// sirve para ver si un prodcuto esta en el carrito
const stockExistente=carrito.some((item)=>item.nombre==="coca")
console.log(stockExistente);


