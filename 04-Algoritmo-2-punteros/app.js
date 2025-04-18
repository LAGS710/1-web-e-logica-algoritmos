const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

 function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

  while (siguiente < arr.length) {
        
        primerNombre = arr[inicio];
        segundoNombre = arr[siguiente];
        // TODO: Compara las iniciales de los nombres en los punteros
        if(primerNombre[0] == segundoNombre[0])
        {// Si coinciden, devuelve el par
            return '["'+ primerNombre + '","' + segundoNombre + '"]'
        } else { // TODO: Avanza los punteros si no coinciden
            inicio++ 
            siguiente++ 
        }
    }

    return null; // Si no se encuentra ningún par
}

/*console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]

let prueba = invitados[0];

console.log(prueba[0])*/

console.log(encontrarPareja(invitados))