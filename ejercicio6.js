// ==============================================================================
// Ejercicio 6: Imprimir un Arreglo
// Consigna: Escribir una función llamada `imprimirArreglo` que reciba un arreglo
// e imprima cada uno de sus elementos en una línea aparte utilizando la consola.
// ==============================================================================

function imprimirArreglo(arreglo){
    for(let i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

// 📌 Feedback Docente (Profesor Axel):
// Impecable iteración sobre el arreglo. Como alternativa moderna vimos `for (const elemento of arreglo)`.

imprimirArreglo([1, 3, 2, 4]);