const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

const filtro = productos.filter ( productos => productos.precio < 100); // Usa filter() para obtener los productos que cuesten menos de $100

console.log(filtro) //Muestra los resultados de la aplicación de cada métiodo en consola.

const ordernar = productos.sort((a,b) => a.nombre.localeCompare(b.nombre)); // Usa sort() para ordenar esos productos alfabéticamente por su nombre.
console.log(ordernar) //Muestra los resultados de la aplicación de cada métiodo en consola.

const nuevoArreglo = productos.map(productos => productos.nombre); //usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
console.log(nuevoArreglo) // Muestra los resultados de la aplicación de cada métiodo en consola.
