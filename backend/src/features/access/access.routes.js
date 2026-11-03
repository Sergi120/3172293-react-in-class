// backend/src/features/access/access.routes.js
// PRUEBA TEMPORAL

import { Router } from "express";
import { accessController } from "./access.controller.js";
import { authenticateToken } from "../../middlewares/auth.middleware.js";

const router = Router();

// GET /api/access/test/:userId
// ej: http://localhost:4000/api/access/test/1
router.get("/check/:permissionCode", authenticateToken, accessController.testPermission);

export default router;