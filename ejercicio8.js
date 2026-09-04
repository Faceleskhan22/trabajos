function duplicar(arreglo){
    let resultado = [];
    for(i = 0; i < arreglo.length; i++){
        resultado.push(arreglo[i]*2);
    }
    return resultado;
}
console.log(duplicar([1, 2, 3]));