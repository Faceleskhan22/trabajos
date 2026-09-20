function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado){
     let  tieneAcceso= false;
    if(!esInvitado&&(edad>=18|| tienePermisoDocente == true)){
        tieneAcceso= true;
    }
    return tieneAcceso;

}
console.log(evaluarAccesoApp( 17, false, true))
console.log(evaluarAccesoApp(18, true , false));