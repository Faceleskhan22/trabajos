// ==============================================================================
// Ejercicio 7: Número de Caracteres
// Consigna: Escribir una función llamada `numeroDeCaracteres` que reciba un string
// y un carácter (un string de longitud 1). La función debe retornar el número de
// veces que aparece dicho carácter en el string.
// ==============================================================================

function numeroDeCaracteres(str, caracter){
    let contador = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === caracter){
            contador++;
        }
    }
    return contador;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo: Declaramos `let i = 0` en el bucle `for` (en tu código original estaba `i = 0` sin `let`, lo que genera una variable global accidental).
// 2. Excelente uso del contador e incremento `contador++`.

console.log(numeroDeCaracteres("hola mundo", "o"));