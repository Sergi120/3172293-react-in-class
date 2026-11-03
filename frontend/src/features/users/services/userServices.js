// URL base del endpoint de usuarios en el backend 
// En desarrollo apunta al servidor Express local
// En producción debería provenir de variables de entorno
// const API_URL = "http://localhost:4000/api/users";

import {API_URL} from "@/features/config";

// Función para crear un usuario en el backend
// Recibe un objeto con los datos del usuario
// Retorna la respuesta JSON del servidor
const USERS_URL = `${API_URL}/users`

export async function createUser(userData) {
    // Multer espera multipart/form-data, así que usamos FormData
    const formData = new FormData();

    for (const [key, value] of Object.entries(userData)) {
        if (key === "userImage") continue; // las imágenes se agregan aparte
        if (value !== undefined && value !== null) {
            formData.append(key, value);
        }
    }

    // Imágenes: el nombre del campo debe coincidir con upload.array("userImage")
    if (userData.userImage) {
        const files = Array.from(userData.userImage);
        for (const file of files) {
            formData.append("userImage", file);
        }
    }

    // Realizamos la petición HTTP usando fetch
    const response = await fetch(USERS_URL, {
        // Método HTTP según convención REST
        method: "POST",

        // NO ponemos Content-Type: el navegador lo agrega solo
        // con el boundary correcto para multipart/form-data

        // Enviamos el FormData como body
        body: formData,
    });

    // Verificamos si la respuesta NO fue exitosa (status != 2xx)
    if (!response.ok) {
        // Leemos el cuerpo de la respuesta de error
        const error = await response.json();

        // Lanzamos una excepción con el mensaje de error
        // Esto permite que el componente que llama maneje el error con try/catch
        throw new Error (error.error || "Error al crear usuario");
    }

    // Si la petición fue exitosa, retornamos la respuesta parseada como JSON
    return response.json();
}