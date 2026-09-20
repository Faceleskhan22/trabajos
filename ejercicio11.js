function simularReportePing(intentosMaximos) {
    // Tu código acá:
    for(let i = 1; i<= intentosMaximos; i++){
        if(i % 5 ===0){
            console.log("error critico en hardware en intento ",i);
            break;
        }
        else if(i % 2 === 0){
            console.log("intento ",i," : Exitoso");
        }
        else{
            console.log("intento ",i," : Fallido")
        }
    }
}
simularReportePing(5);
simularReportePing(2);