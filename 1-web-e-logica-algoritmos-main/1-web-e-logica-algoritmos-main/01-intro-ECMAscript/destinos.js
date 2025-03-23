// Array para guardar los destinos
import { calcularCosto } from "./math.js";

export const destinos = [];
// Función para registrar un destino de viaje
export let registrarDestino = (destino, fecha, transporte) => {
    // TODO: Crear un objeto con los datos del destino
    let nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}