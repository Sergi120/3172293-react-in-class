// Componente CounterEffect




import { useEffect, useState } from "react";

export default function CounterEffectDemo(){
    const[count, setCount] = useState(0)
    const[message, setMessage] = useState("El contador no ha cambiado")

    // Se crea el efecto

    useEffect(() => {
        
        if(count === 0){
            setMessage ("El contador no ha cambiado")
        }else{
            setMessage(`El contador cambio a: ${count}`)
        }
        
        
    },[count])
    

    return (
        <div>
            <h2>{count}</h2>
            <p>{message}</p>

            {/**Cada vez  */}
            <button onClick={()=> setCount(count + 1)} className="border p-6 bg-green-300">Incrementar</button>
        </div>
    )
}