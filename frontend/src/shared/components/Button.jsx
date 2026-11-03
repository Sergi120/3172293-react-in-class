// Componente button

export default function Button ({
    variant = "primary",
    size = "md",
    type = "button",
    children,
    ...props

}){

    const variants = {
         primary: `bg-background-coffe text-white hover:bg-bg-s950 active:scale-95 shadow-md transition-all duration-200`,   
         secondary : "bg-background-coffe text-white hover:bg-bg-s950 active:scale-95 shadow-md transition-all duration-200" 
    };

    const sizes = {
        sm: `
            h-8
            px-4
            before:absolute before:content-['']
            before:-inset-y-[8px] before:-inset-x-[0px]

            `,
        md: `
            h-10
            px-4
            before:absolute before:content-['']
            before:-inset-y-[4px] before:-inset-x-[0px]
        
            `,
        lg: `
            h-12 
            px-4
            before:absolute before:content-['']
            before:-inset-y-[0px] before:-inset-x-[0px]
            `,
    }

    return(
        <button
            type= {type}
            className={`
                relative
                inline-flex-center justify-center
                rounded-md
                transitions-colors
                ${variants[variant]}    
                ${sizes[size]}    
                `}
                {...props}
        >
            {children}

        </button>

    )
}

