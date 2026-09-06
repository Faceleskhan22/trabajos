function contrasenaValida(str) {
    let validacion = false;
    if(str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9"){
      validacion = !validacion;
    }
    return validacion;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo con el nombre en la llamada de consola: tenías 'contrasenaValida2' que arrojaba ReferenceError. Corregido a 'contrasenaValida'.
// 2. Recomendación de simplificación: Podés retornar directamente el resultado de la comparación booleana sin variables auxiliares ni negar flags:
// return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";

console.log(contrasenaValida("2Fj(jjbFsuj"));
