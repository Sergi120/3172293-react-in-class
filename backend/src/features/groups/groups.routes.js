// backend/src/features/groups/groups.routes.js
// Corrección: agregaddo endpoint de permisos por grupo

import { Router } from "express";
import { groupsController } from "./groups.controller.js";

const router =  Router();

router.get("/", groupsController.getAll);

router.get("/:groupId/permissions", groupsController.getPermissionsByGroupId);

router.put("/:groupId/permissions", groupsController.updatedPermissions);

export default router;


