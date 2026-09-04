function numeroDeCaracteres(str, caracter){
    let contador = 0;
    for(i = 0; i < str.length; i++){

        if(str[i] === caracter){
            contador++;
        }
    }
    return contador;
}
console.log(numeroDeCaracteres("hola mundo", "o"));