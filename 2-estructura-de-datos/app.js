let listaDeCompras = [];

let agregarProducto = (producto) => {
    let aux = producto;
    //busca duplicados
    let verificar = listaDeCompras.find((producto) => (producto === aux))   
    //solo agrega valores no duplicados
    if( verificar === aux)
    {
        console.log("\n No se pueden agregar productos que ya existen la lista de compras!!!")
    } else listaDeCompras.push(aux); 
}

let eliminarProducto = (eliminar) => {
    //buscar el elemento dentro del array
    let aux = listaDeCompras.filter( producto => producto !== eliminar)
    listaDeCompras = aux;
}

let mostrarLista = (producto) => {
    listaDeCompras.forEach(producto => console.log(producto));
    console.log("\n")
}

agregarProducto("manzana");
agregarProducto("naranja");
agregarProducto("pera");
agregarProducto("manzana");

mostrarLista();

agregarProducto("guayaba");
agregarProducto("mango");
agregarProducto("manzana");
mostrarLista();
agregarProducto("manzana");
mostrarLista();

eliminarProducto("manzana");
mostrarLista();

