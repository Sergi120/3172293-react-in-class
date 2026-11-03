// frontend/src/features/access/components/AccessSidebar.jsx

import { useState, useEffect } from "react";
import { Select} from "@/shared";
import { getGroups } from "../services/groupService";
import { getGroupPermissions } from "../services/permissionService";

// recibimos de AccessPage el grupo seleccionado y como guardar sus permisos
export default function AccessSidebar({
  selectedGroup,
  setSelectedGroup,
  setGroupPermissions,
  setSelectedGroupName,
}) {
  // usuario que se escoge en el select (el grupo ahora viene de AccessPage)
  const [userId, setUserId] = useState("");

  // aqui guardamos los grupos que llegan de la base
  const [groups, setGroups] = useState([]);

  // Test para verificar si ya se conectó back y front obtener los grupos de la BD
  useEffect(() => {
    getGroups()
      .then((data) => {
        console.log("GROUPS:", data);
        setGroups(data);
      })
      .catch(console.error);
  }, []);

  // Efecto para obtener grupos
  useEffect(() => {
    getGroups().then(setGroups).catch(console.error);
  }, []);

  // pasamos los grupos al formato que pide el select
  const groupOptions = groups.map((group) => ({
    value: group.group_id,
    label: group.group_name,
  }));

  useEffect(() => {
    console.log("GROUP OPTIONS:", groupOptions);
  }, [groupOptions]);

  // usuarios de prueba por ahora
  const userOptions = [
    { value: "10", label: "Sebastián Arce" },
    { value: "11", label: "Sofía Valencia" },
    { value: "12", label: "José Marín" },
  ];

  return (
    <aside className="w-[350px] space-y-12">
      <section>
        <h2 className="text-lg font-semibold mb-6">Grupos usuarios</h2>
        <Select
          name="groupId"
          value={selectedGroup}
          onChange={async (e) => {
            const groupId = e.target.value;

            const selectedGroupData = groups.find((group) => String(group.group_id) === groupId,);

            /**
             * selectedGroupData?.group_name → accede sin romper si es null/    undefined
              ?. (optional chaining) → evita error
              ?? "" → si el valor es null o undefined, usa ""
              Resultado → siempre envía un string válido al estado
             */


            setSelectedGroup(groupId);
            setSelectedGroupName(selectedGroupData?.group_name ?? "");
            setUserId("");

            const permissions = await getGroupPermissions(groupId);

            console.log("GRUPO SELECCIONADO:", e.target.value);
            console.log("PERMISOS DEL GRUPO:", permissions);

            // guardamos los permisos para que el PermissionModule marque los checkbox
            setGroupPermissions(permissions);
          }}
          options={groupOptions}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Usuario individual</h2>
        <Select
          name="userId"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
            setSelectedGroup("");
          }}
          options={userOptions}
        />
      </section>
    </aside>
  );
}