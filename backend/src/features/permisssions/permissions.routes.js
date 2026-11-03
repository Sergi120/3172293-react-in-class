// backend/src/features/permissions/permissions.routes.js

import { Router } from "express";
import { permissionsController } from "./permissions.controller.js";

const router = Router();

// GET /api/permissions
router.get("/", permissionsController.getAll);

export default router;