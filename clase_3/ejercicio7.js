// ==============================================================================
// Ejercicio 7: Número de Caracteres
// Consigna: Escribir una función llamada `numeroDeCaracteres` que reciba un string
// y un carácter (un string de longitud 1). La función debe retornar el número de
// veces que aparece dicho carácter en el string.
// ==============================================================================

function numeroDeCaracteres(str, caracter) {
    let contador = 0;
    for (i = 0; i < str.length; i++) {

        if (str[i] === caracter) {
            contador++;
        }
    }
    return contador;
}
console.log(numeroDeCaracteres("hola mundo", "o"));

// 📌 Feedback Docente (Profesor Axel):
// Muy bien resuelto. Ojo: acordate de declarar `let i = 0` en el bucle `for` para evitar la variable global implícita `i`.
// Mantiene una excelente estructura con variable acumuladora y retorno único al final:

function numeroDeCaracteres(str, caracter) {
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            contador++;
        }
    }

    return contador;
}

console.log(numeroDeCaracteres("hola mundo", "o"));
console.log(numeroDeCaracteres("eeee", "e"));
console.log(numeroDeCaracteres("chau", "z"));