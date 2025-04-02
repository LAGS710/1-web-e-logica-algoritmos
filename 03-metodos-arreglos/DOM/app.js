// Archivo: productos.js
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

document.addEventListener("DOMContentLoaded", () => {
    const listaProductos = document.getElementById("listaProductos");
    const buscarBtn = document.getElementById("buscarBtn");
    const mostrarBtn = document.getElementById("mostrarBtn");

    function mostrarProductos(filtrados = productos) {
        listaProductos.innerHTML = "";
        filtrados.forEach(producto => {
            const item = document.createElement("li");
            item.textContent = `${producto.nombre} - ${producto.categoria} - $${producto.precio}`;
            listaProductos.appendChild(item);
        });
    }

    buscarBtn.addEventListener("click", () => {
        const termino = document.getElementById("buscar").value.toLowerCase();
        const categoria = document.getElementById("categoria").value;
        const precioMin = document.getElementById("precioMin").value;
        const precioMax = document.getElementById("precioMax").value;
        
        let filtrados = productos.filter(p => 
            p.nombre.toLowerCase().includes(termino) &&
            (categoria === "" || p.categoria === categoria) &&
            (precioMin === "" || p.precio >= parseFloat(precioMin)) &&
            (precioMax === "" || p.precio <= parseFloat(precioMax))
        );

        mostrarProductos(filtrados);
    });
    
    mostrarBtn.addEventListener("click", () => {
        mostrarProductos();
    });
});