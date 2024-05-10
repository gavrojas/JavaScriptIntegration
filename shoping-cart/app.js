//*Código realizado por Nicole Rojas, Edwars Munar, Maria Victoria Silva y Gabriela Rojas

let productos = [ 
    { 
        nombre: "Pera",
        id: 1054,
        costo: 2000,
        enStock: 10, 
    },
    {
        nombre: "Manzana",
        id: 1055,
        costo: 1800,
        enStock: 15, 
    },
    {
        nombre: "Piña",
        id: 1056,
        costo: 7000,
        enStock: 0, 
    },
    {
        nombre: "Bananos",
        id: 1057,
        costo: 6000,
        enStock: 6, 
    },
    {
        nombre: "Sandía",
        id: 1058,
        costo: 10000,
        enStock: 5, 
    },
]
console.log("Tenemos disponible:\n" )

function mostrarDisponibles(){
    productos.forEach(element => {
        if(element.enStock > 0){
            console.log("id:" + element.id + " -> " + element.nombre + " -> " + element.enStock + " unidades" +  " -> precio por unidad: " + element.costo + "\n");
        }
    });
}
mostrarDisponibles()

let carrito = []

let agregarProducto = prompt('¿Desea agregar un producto? (s/n)')

while(agregarProducto === 's'){
    let productoCliente = parseFloat(prompt("Ingrese el id del producto que desea añadir al carrito:"))
    let cantidadCliente = parseInt(prompt("Ingrese la cantidad:" ))
    agregarProductoAlCarrito(productoCliente,cantidadCliente)   
    agregarProducto = prompt('¿Desea agregar otro producto? (s/n)')
}
console.log("Esta bien, ¡Vuelve pronto!");

function agregarProductoAlCarrito (productoCliente, cantidadCliente){
    productoEncontrado = productos.find(elem => elem.id === productoCliente)
    
    if(productoEncontrado !== undefined && cantidadCliente <= productoEncontrado.enStock){
        carrito.push({nombre: productoEncontrado.nombre, cantidad: cantidadCliente, costoUnidad: productoEncontrado.costo, costoTotal: productoEncontrado.costo*cantidadCliente})
        console.log("Producto agregado al carrito\n");
        mostrarCarrito(carrito);
        actualizarStock(productoEncontrado, cantidadCliente)
    }
    else if(productoEncontrado === undefined){
        console.log("No se encontró producto para el id ingresado");
    }
    else if(productoEncontrado.enStock === 0){
        console.log("Lo sentimos, no hay " + productoEncontrado.nombre);
    }
    else{
        console.log("La cantidad ingresada supera nuestro actual stock");
    }
    
}

function mostrarCarrito(car){
    let total = 0
    console.log('\n---- Carrito ----')
    for (i = 0; i< car.length; i++){
        console.log((i+1) + ". " + car[i].nombre + ", cantidad: " + car[i].cantidad + ", precio por unidad: " + car[i].costoUnidad + ", precio Total: " + car[i].costoTotal)
        total += car[i].costoTotal;
    }
    console.log("Total: " + total)
}

function actualizarStock(prod, cant){
    if(prod.enStock> 0){
        prod.enStock -= cant
    }
    console.log("Productos disponibles: ")
    mostrarDisponibles()
}