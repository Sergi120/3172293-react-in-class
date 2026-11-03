// frontend/src/features/access/services/accessService.js

const API_URL = "http://localhost:4000/api/accessService.js";

export async function hasPermission(permissionCode) {
    const token = sessionStorage.getItem("token");

    const response = await fetch(`${API_URL}/check/${permissionCode}`, {
        headers: {
            Autorization: `Bearer ${token}`,
        }
    });
    
    if (!response.ok) {
        throw new Error("Error verificando permiso");
    }

    return response.json();
}