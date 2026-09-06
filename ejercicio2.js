// ==============================================================================
// Ejercicio 2: Calcular Impuestos
// Consigna: Escribir una función llamada `calcularImpuestos` que reciba dos
// argumentos numéricos: `edad` e `ingresos`. Si la `edad` es igual o mayor a 18
// y los `ingresos` son iguales o mayores a 1000 debe retornar el valor de los
// `ingresos * 0.4` (el 40%). De lo contrario debe retornar `0`.
// ==============================================================================

function calcularImpuestos(edad, ingresos) {
    let calculo = 0;
    let validar_edad = 18;
    let validar_ingresos = 1000;
    if (edad >= validar_edad && ingresos >= validar_ingresos) {
        calculo = ingresos * 0.40;
        return calculo;
    }
    return calculo;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo con la redeclaración de variables: Adentro del `if` tenías `let calculo = ...`, redeclarando la variable `calculo` que ya habías creado afuera. Corregido a asignación directa `calculo = ...`.
// 2. Recomendación: Se pueden usar constantes (`const`) para los valores límite (18 y 1000) o retornar directamente el cálculo.

console.log(calcularImpuestos(18, 1000));