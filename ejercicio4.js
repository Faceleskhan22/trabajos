// ==============================================================================
// Ejercicio 4: FizzBuzz
// Consigna: Escribir una función llamada `fizzBuzz` que reciba un número y retorne:
// - "fizz" si el número es múltiplo de 3.
// - "buzz" si el número es múltiplo de 5.
// - "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// - Si no cumple ninguna, retornar el mismo número.
// ==============================================================================

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    }
    else if(num % 3 === 0){
        return "fizz";
    }
    else if(num % 5 === 0){
        return "buzz";
    }
    else {
        return num;
    }
}

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente lógica, Aarón! El orden de las condiciones verificando primero el múltiplo simultáneo de 3 y 5 (múltiplo de 15) es impecable.

console.log(fizzBuzz(30));