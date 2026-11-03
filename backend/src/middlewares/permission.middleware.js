// backend/src/middlewares/permission.middleware.js

import { accessService } from "../features/access/access.service";

export const requirePermission = (permissionCode) => {
    return async (req, res, next) => {
        const userId = req.user.id;

        const granted = await accessService.hasPermission(userId, permissionCode);

        if (!granted) {
            return res.status(403).json({
                message: "No tienes permisos para realizar esta accion",
            });
        }
        next();
    };
};