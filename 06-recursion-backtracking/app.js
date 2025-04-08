//Recursion

/*function cuentaAtras (num){
    //caso base
    if(num === 0){
        return
    }
    //llamada recursiva
    console.log(num);
    cuentaAtras(num -1);
}

cuentaAtras(5);*/

// Backtracking

// funcion que encuentre todas las combinaciones de un array

// [1 , 2 , 3]

const regalos = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function encontrarRegalo(gifts, index, giftName){
    
    if(index == gifts.length){
        return console.log(giftName + " no esta en la lista.") //caso base
    } else if (gifts[index] == giftName) {
        return console.log(giftName + " esta en la posición " + index + ".")
    } else encontrarRegalo(gifts, index + 1, giftName) //recursivdad
}

encontrarRegalo(['Bicicleta', 'Celular', 'Reloj'], 0, "Reloj")

// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos

let regaloAEcontrar = "Lego";
encontrarRegalo(regalos, 0, regaloAEcontrar)
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista

regaloAEcontrar = "Camión";
encontrarRegalo(regalos, 0, regaloAEcontrar)
// Salida esperada:
// "Camión no está en la lista."

