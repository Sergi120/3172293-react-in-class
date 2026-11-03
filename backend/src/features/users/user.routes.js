// Importamos Router desde Express
// Router permite modularizar las rutas features
// y mantener el archivo principal de la app limpio.

import {Router} from "express";

// Importamos el controlador de usuarios.
// El router nunca implementa lógica,
// solo delega la ejecución al controller.
import multer from "multer";
import { userController } from "./user.controller.js"

// Creamos una instancia del router de Exprees
const router = Router();

// Definimos la ruta para crear usuario
// POST/users
// Cuando se recibe una petición POST en la raiz del recurso,
// Express ejecuta el método create del controller.

const upload = multer({ dest: "uploads/"}); // O config más avanzada

// aqui se procesa multipart/form-data
// Ruta pública: ya no requiere token (registro de usuarios)
router.post("/", 
    upload.array("userImage"), 
    userController.create);

// Exportanmos el router para ser registrado en la aplicacion principal
// (ej:app.use("users", router))

export default router;