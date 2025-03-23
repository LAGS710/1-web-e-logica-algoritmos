import { registrarDestino , destinos} from './destinos.js';
import { calcularCosto } from './math.js';
import { mostrarItinerario } from './mostrar.js';

// Iniciar la aplicación
let iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();
    