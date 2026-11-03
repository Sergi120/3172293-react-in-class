// Importamos Exprees, el framwork base para construir el servidor HTTP
import express from "express";

// Importamos el middleware CORS
// Permite controlar qué origenes pueden comunicarse con el backend
import cors from "cors";

// Importamos las rutas del feature users
// Cada feature expone su propio router independiente 
import userRoutes from "./features/users/user.routes.js";
import authRoutes from "./features/auth/auth.routes.js";
import accessRoutes from "./features/access/access.routes.js";
import groupsRoutes from "./features/groups/groups.routes.js";
import permissionsRoutes from "./features/permisssions/permissions.routes.js";

//  creamos la instancia principal de la aplicación express
const app = express();

// Middleware de CORS
// Permitye soliciy¿yudes únicamnete desde el forntend en localhost 5173
// (tipico proyecto Vite en desarrollo)
app.use(cors({ origin: "http://localhost:5173"}));

// Middleware para parsear cuerpos de petición en formato JSON
// Sin este middleware, req.body seria undefined
app.use(express.json())

// Registro del router de usuarios
// Todas las rutas del feauture users quedarán bajo el prefijo /api/users
// Ejmplo final: POST  http//localhost:4000/api/users
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/access", accessRoutes);
app.use("/api/groups", groupsRoutes);
app.use("/api/permissions", permissionsRoutes);

// Exportamos la aplicacion configurada
// El arranque del servidor se hace en server.js
export default app;

