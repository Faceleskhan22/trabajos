function dibujarGraficoConsumo(pasos) {
    let grafico = "";
    // Tu código de bucles anidados acá:
    for(let i=0; i< pasos; i++ ){
        grafico = grafico +"██";
        console.log(grafico)
    }
    
    return grafico;
}
dibujarGraficoConsumo(4);