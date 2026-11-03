// Componente para entender el hook use state

import {useState} from "react"

export default function Delete(){

    // Creamos el estado

    const [count, setcount] = useState(0);

    return(
        <div>
            <p>Contador: {count}</p>

            <button onClick={()=> setcount(count + 1)} className= "border p-6              rounded-md bg-yellow-500">Incrementar</button>

        </div>
    )
}