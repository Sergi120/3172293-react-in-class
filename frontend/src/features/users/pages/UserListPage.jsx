// 
import { useState } from "react"
import { DataTable } from "../../../shared"
import { UserColumns } from "../table/UsersColumns"
import { users } from "../data/users"
import { Link } from "lucide-react"
import {Button} from "@/shared"
import { useNavigate } from 'react-router-dom';
import {ReportConfigModal} from "@/features/users"



export default function UserListPage (){

    const navigate = useNavigate();
    const [report, setReport] = useState(false)

    return(
        <div className="p-6">
            <h1 className="text-xl-font-semibold mb-4">Listado de usuarios</h1>

                
            <div className="flex justify-end gap-4 mb-2">
                <ReportConfigModal
                    isOpen={report}
                    onClose={() => setReport(false)}
                />
                
                <Button 
                    variant="primary"
                    size="md"
                    type="button"
                    onClick={() => {
                      console.log("Se oprimio el boton");
                      setReport(true)
                    }}
                    > 
                    Crear reporte
                </Button>


                <Button 
                    variant="primary"
                    size="md"
                    type="button"
                    onClick={() => {
                      console.log("Se oprimio el boton");
                      navigate("/dashboard/userCreate"); 
                    }}
                    > 
                    Crear usuarios
                </Button>
                
            </div>
            
            <DataTable data={users} columns={UserColumns}/>
        </div>
    )
}