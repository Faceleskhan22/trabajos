// ==============================================================================
// Ejercicio 3: IMC (Índice de Masa Corporal)
// Consigna: El índice de masa corporal (IMC o BMI) se calcula con la fórmula:
// peso / altura^2. Escribí una función llamada `bmi` que reciba `peso` y `altura`,
// y retorne un string de acuerdo a las siguientes posibilidades:
// - "Bajo de peso" si BMI < 18.5
// - "Normal" si está entre 18.5 y 24.9
// - "Sobrepeso" si está entre 25 y 29.9
// - "Obeso" si es igual o mayor a 30
// ==============================================================================

function bmi(peso, altura) {
    // ⚠️ ATENCIÓN: 1. En JS el operador ^ es Bitwise XOR, no potencia. Usar (altura ** 2) o Math.pow(altura, 2).
    // 2. Tenías 'bmi = ...' lo que sobrescribía el nombre de la función con un número. Usamos 'const valorBmi = ...'.
    const valorBmi = peso / (altura ** 2);
    let resultado = "";

    switch(true){
        case (valorBmi < 18.5):
            resultado = "Bajo de peso";
            break;
        case (valorBmi >= 18.5 && valorBmi <= 24.9):
            resultado = "Normal";
            break;
        case (valorBmi >= 25 && valorBmi <= 29.9):
            resultado = "Sobrepeso";
            break;
        case (valorBmi >= 30):
            resultado = "Obeso"; 
            break;
    }
    return resultado;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Corregido el operador de potencia (altura ** 2 en lugar de altura ^ 2).
// 2. Corregida la reasignación de la función (creabas una variable con el mismo nombre 'bmi' que la propia función).
// 3. Retorno de la función: Debe retornar el String en lugar de hacer solo console.log().

console.log("Resultado IMC:", bmi(64, 1.7));