import Swal from "sweetalert2";

export function showSuccesAlert({
    // Los valores despues del = son valores por defecto.
    title = "Exito",
    text = "",
    confirmButtonText = "Aceptar",
    timer = 1000,
}) {
    // Swal.fire() crea el modal
    return Swal.fire({
        icon: "success",
        title,
        text,
        confirmButtonText,
        timer,
        timerProgressBar: true,
        showConfirmButton: true,

        customClass: {
            popup: "rounded-2xl",
            title: "text-green-600",
            confirmButton: "bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg",
        },

        buttonsStyling : false
    });
}

export function showErrorAlert({
    // Los valores despues del = son valores por defecto.
    title = "Cancelado",
    text = "",
    confirmButtonText = "Cancelar",
    timer = 1000,
}) {
    // Swal.fire() crea el modal
    return Swal.fire({
        icon: "error",
        title,
        text,
        confirmButtonText,
        timer,
        timerProgressBar: true,
        showConfirmButton: true,

        customClass: {
            popup: "rounded-2xl",
            title: "text-red-600",
            confirmButton: "bg-red-600 hover:bg-green-700 px-4 py-2 rounded-lg",
        },

        buttonsStyling : false
    });
}


