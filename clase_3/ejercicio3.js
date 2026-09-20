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

    bmi = peso / altura ^ 2;
    switch (true) {

        case (bmi < 18.5):
            console.log("bajo peso");
            break;
        case (bmi <= 18.5 || bmi <= 24.9):
            console.log("normal");
            break;
        case (bmi <= 25 || bmi <= 29.9):
            console.log("sobrepeso")
            break;
        case (bmi >= 30):
            console.log("obeso");
            break;

    }
    return bmi
}
console.log(bmi(64, 1.7));

// 📌 Feedback Docente (Profesor Axel):
// 1. Atención: En JS el operador ^ es Bitwise XOR, no potencia. Usar (altura ** 2) o Math.pow(altura, 2).
// 2. Tenías 'bmi = ...' lo que sobrescribía el nombre de la propia función.
// Para acostumbrarnos a la estructura limpia de variable auxiliar para guardar el resultado y hacer un único return al final de la función:

function bmi(peso, altura) {
    const indice = peso / (altura ** 2);
    let diagnostico = "Obeso"; // Valor por defecto

    if (indice < 18.5) {
        diagnostico = "Bajo de peso";
    } else if (indice < 25) {
        diagnostico = "Normal";
    } else if (indice < 30) {
        diagnostico = "Sobrepeso";
    }

    return diagnostico;
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
console.log(bmi(135, 1.7));