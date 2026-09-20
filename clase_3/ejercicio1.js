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
console.log(contrasenaValida2("2Fj(jjbFsuj"));

// 📌 Feedback Docente (Profesor Axel):
// Ojo con la llamada en consola: habías escrito 'contrasenaValida2' lo que tiraba ReferenceError por el tipado del nombre.
// Para acostumbrarnos a la estructura limpia de retorno booleano o variable de resultado con retorno único al final:

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
