// Importamos el repositorio de usuarios.
// El service depende del repository para acceder a la persistencia,
// pero el repositorio NO debe conocer al service.

import { userRepository } from "./user.repository.js";
import bcrypt from "bcrypt";

// Edxpportamos el servicio de usuarios
// El service representa la capa logica de negocio en la aplicacion

export const userService = {
    async createUser(data) {

        const hashedPassword = await bcrypt.hash(data.userPassword, 10);
        const userData = {
            ...data,
            userPassword: hashedPassword,
        }

        console.log("SERVICE DATA:", data)

        // En este punto, en una arquitectura real, deberian ocurrir
        // - Validaciones de reglas de negocio
        // - Transformaciónes (ej: hash de contraseña)
        // - Verificaciónes de unicidad (email, documento, etc.)
        // - Decisiones de negocio (roles, flags, estados iniciales)

        // Actualmente, el metodo solo delega directamente al repository
        // sij¿n agregar ninguna logica adicional

        return await userRepository.create(userData);
    }
}

// Método encargado de crear un usuario
// Recibe datos provenientes del controller,
// idealmente ya validados a nivel estrcutrual (schema)

