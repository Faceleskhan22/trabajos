function contrasenaValida(str) {
    let validacion = false;
    if(str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9"){
      validacion = !validacion;
    }
    return validacion;
}
console.log(contrasenaValida2("2Fj(jjbFsuj"));
