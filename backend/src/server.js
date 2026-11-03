// Importamos la instancia de la aplicación Express ya configurada
// app.js debe encargarse de middlewares, rutas y configuración general.
import app from "./app.js";

// Importamos dotenv para cargar
import dotenv from "dotenv";

dotenv.config();

// Definimos el puerto del servidor
// Se prioriza el valor definido en el entorno (prodccion)
// y se usa 4000 como valor por defecto en desarrollo
const PORT = process.env.PORT || 4000;

// Inicamos el servidor HTTP usando la app de Exprees
// Listen lebanta el servidor y queda a la espera de peticiónes
app.listen(PORT, () => {
    // Log informatico indicando que el servidor esta corriendo
    console.log(`Servidor  backend corriendo en http://localhost:${PORT}`)
})