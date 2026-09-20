// ==============================================================================
// Ejercicio 8: Duplicar Elementos de un Arreglo
// Consigna: Escribir una función llamada `duplicar` que reciba un arreglo de
// números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
// ==============================================================================

function duplicar(arreglo) {
    let resultado = [];
    for (i = 0; i < arreglo.length; i++) {
        resultado.push(arreglo[i] * 2);
    }
    return resultado;
}
console.log(duplicar([1, 2, 3]));

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo: En el bucle for habías escrito 'i = 0' sin 'let' o 'const'. Esto crea una variable global implícita en JavaScript ('strict mode' tira error). Siempre declará 'let i = 0'.
// 2. Mantiene la estructura de retorno único. Como alternativa moderna también vimos Array.prototype.map():

function duplicar(arreglo) {
    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {
        nuevoArreglo.push(arreglo[i] * 2);
    }

    return nuevoArreglo;
}

console.log(duplicar([1, 2, 3]));
console.log(duplicar([]));
console.log(duplicar([4, 5, 6]));