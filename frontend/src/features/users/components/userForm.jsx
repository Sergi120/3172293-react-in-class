import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
import { createUser } from "../services/userServices";

const [isSubmitting, setIsSubmitting] = useState(false)

// HANDLE SUBMIT
const handleSubmit = async (e) => {
    // Evita que el formulario recargue la pagina
    e.preventDefault();

    // Validamos los datos del formulario contra el esquema Zod
    // safeParse NO lanza excepción, retorna un onjeto controlado
    const result = userSchema.safeParse(formData);

    // Verificar enm consola si el esquema está funcionando correctamente
    console.log(result);

    // Si la validación falla
    if (!result.success) {
        const fieldErrors = {};

        // Recorremos cada error generado por Zod
        result.error.issues.forEach((issue) => {
            // issue.path[0] correspondiente al nombre del campo
            // issue.message contieen el mensaje de error definido en el schema

            fieldErrors[issue.path[0]] = issue.message;
        });

        // Actualizamos el estado de errores para mostrarlos en la UI
        setErrors(fieldErrors);

        // Cortamos la ejecucion: NO se envía nada al backend

        return;
    }

    // Si la validación pasa, limpiamos errores previos
    setErrors({});

    // Activamos estado de envio (útil pra deshabilitar el botón)
    setIsSubmitting(true);

    try {
        // Llamamos al servicio fronend que consume la API
        // result.data ccontiene los datos ya validados por Zod

        const response = await createUser(result.data);

        // Log informativo para desarrollo
        console.log("Usuario creado:", response);

        // Feedback basico al usuario
        alert("usuario creado correctamente");

        // Navegamos a la vista anterior
        // Navigate -1 eqivale a volver atras
        navigate(-1) ;
    }  catch (error) {
        // Capturamos errores de red o errores lanzados por el service
        console.error("Error:" error.message);

        // Mostramos el mensaje de error al usuario
        alert(error.message);
    } finally {
        // Pase lo que pase, desactivamos el estado de envío
        setIsSubmitting(false)
    }
};

