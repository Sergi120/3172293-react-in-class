// frontend/src/features/access/pages/AccessPage.jsx

import { useEffect, useState } from "react";
import AccessSidebar from "../components/AccessSidebar";
import PermissionModule from "../components/PermissionModule";
import { updateGroupPermissions } from "../services/groupService";
import { getAllPermissions } from "../services/permissionService";

export default function AccessPage() {
  // id y nombre del grupo seleccionado
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedGroupName, setSelectedGroupName] = useState("");

  // permisos que tiene el grupo en la base
  const [groupPermissions, setGroupPermissions] = useState([]);

  // todos los permisos que existen, para armar los checkbox
  const [allPermissions, setAllPermissions] = useState([]);

  // modo edicion y copia de los permisos mientras se editan
  const [isEditing, setIsEditing] = useState(false);
  const [permissionsDraft, setPermissionsDraft] = useState([]);

  // traemos todos los permisos una sola vez al abrir la pagina
  useEffect(() => {
    getAllPermissions().then(setAllPermissions).catch(console.error);
  }, []);

  // cada vez que cambian los permisos del grupo, reiniciamos la copia
  useEffect(() => {
    setPermissionsDraft(groupPermissions);
  }, [groupPermissions]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setPermissionsDraft(groupPermissions);
    setIsEditing(false);
  };

  // mandamos solo los ids de los permisos al backend
  const handleSave = async () => {
    const permissionIds = permissionsDraft.map(
      (permission) => permission.permission_id,
    );

    await updateGroupPermissions(selectedGroup, permissionIds);

    setGroupPermissions(permissionsDraft);
    setIsEditing(false);
  };

  return (
    <div className="p-6 flex gap-10">
      <AccessSidebar
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        setSelectedGroupName={setSelectedGroupName}
        groupPermissions={groupPermissions}
        setGroupPermissions={setGroupPermissions}
      />

      <div className="flex-1">
        <h1 className="text-xl font-semibold mb-6">Gestión de permisos</h1>

        <PermissionModule
          selectedGroup={selectedGroup}
          selectedGroupName={selectedGroupName}
          allPermissions={allPermissions}
          isEditing={isEditing}
          permissionsDraft={permissionsDraft}
          setPermissionsDraft={setPermissionsDraft}
          onEdit={handleEdit}
          onCancel={handleCancel}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}