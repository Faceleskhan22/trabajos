function duplicar(arreglo){
    let resultado = [];
    for(let i = 0; i < arreglo.length; i++){
        resultado.push(arreglo[i]*2);
    }
    return resultado;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo: En el bucle for habías escrito 'i = 0' sin 'let' o 'const'. Esto crea una variable global implícita en JavaScript ('strict mode' tira error). Siempre declará 'let i = 0'.
// 2. Excelente uso de .push() y multiplicación. Como alternativa moderna vimos Array.prototype.map():
// const duplicar = (arr) => arr.map(num => num * 2);

console.log(duplicar([1, 2, 3]));