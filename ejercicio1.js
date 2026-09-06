// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar `false`.
// ==============================================================================

function contrasenaValida(str) {
    let validacion = false;
    if(str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9"){
      validacion = !validacion;
    }
    return validacion;
}

// 📌 Feedback Docente (Profesor Axel):
// Muy bien resuelto. Ojo con la llamada original en consola que tenía 'contrasenaValida2' arrojando ReferenceError.
// Para acostumbrarnos a la estructura limpia de variable auxiliar con retorno único al final te dejo esta alternativa:

function contrasenaValida(str) {
    let esValida = false;

    if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
        esValida = true;
    }

    return esValida;
}

console.log(contrasenaValida("2Fj(jjbFsuj"));
console.log(contrasenaValida("eoZiugBf&g9"));
console.log(contrasenaValida("hola"));
