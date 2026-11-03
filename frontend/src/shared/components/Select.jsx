//  Componente Select

export default function Select({

    label,
    error,
    htmlFor,
    name, 
    onChange,
    value,
    options = [],

}){

    return(
        <div>
            {/** Label solo se muestra si truhty es un uno logico */}
            {label && (
            <label 
                htmlFor={htmlFor}
                className="
                    block 
                    text-caption 
                    text-secondary
                    ">
                {label}
            </label>
        )}

        {/** Select */}

        <select 
            onChange={onChange}
            value={value}
            name={name}
            id={htmlFor}
            className="
                w-80
                h-12
                rounded-md
                px-4

                border
                hover:border-2
                hover:border-focus-border
            "
        >

        <option value="">Seleccione una opcion</option>  

        {options.map ((opt, index)=> (
            <option key={opt.value ?? index} value={opt.value}>
                {opt.label}
            </option>

        ))}

        </select>
        {error && (
                <p className="text-caption text-red-800 place-self-start mt-2">{error}</p>
            )}

        </div>
    )
}