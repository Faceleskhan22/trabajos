function calcularImpuestos(edad, ingresos) {
    // Tu código acá:
    let calculo= 0;
     let validar_edad = 18;
     let validar_ingresos =1000;
     if(edad >= validar_edad && ingresos >=validar_ingresos ){
        let calculo = ingresos* 0.40;
       return calculo
     }
  return calculo
}
console.log(calcularImpuestos(18,1000));