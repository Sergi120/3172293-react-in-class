// frontend/src/features/access/services/permissionService.js

const API_URL = "http://localhost:4000/api";

// trae los permisos que tiene un grupo
export async function getGroupPermissions(groupId) {
  const response = await fetch(`${API_URL}/groups/${groupId}/permissions`);

  if (!response.ok) {
    throw new Error("Error obteniendo permisos");
  }

  return response.json();
}

// trae todos los permisos que existen en la base (con su modulo)
export async function getAllPermissions() {
  const response = await fetch(`${API_URL}/permissions`);

  if (!response.ok) {
    throw new Error("Error obteniendo todos los permisos");
  }

  return response.json();
}