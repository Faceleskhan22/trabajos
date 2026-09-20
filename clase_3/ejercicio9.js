/**
 * ===============================================================================================================
 * Ejercicio 9: Cálculo de Espacio de Almacenamiento (Módulo 1 - Variables y Coerción)
 *Consigna: Las entradas en los formularios web siempre llegan como texto (String).
  Escribí una función llamada calcularEstadisticasDescarga que reciba dos parámetros: cantArchivos (String) y tamanoPromedioMB (String).
   La función debe:
    Convertir ambos parámetros a valores numéricos (Number).
    Calcular el tamaño total de la descarga multiplicando la cantidad de archivos por el peso promedio.
    Convertir ese peso total a Kilobytes (KB) sabiendo que 1 MB = 1024 KB.
    Retornar el siguiente mensaje exacto usando Template Literals:
    "Se descargarán [cantArchivos] archivos con un peso total de [pesoTotalKB] KB."
    =========================================================================================================
 */

    function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB){

         const archivos= number(cantArchivos);
         const tamanoMb = number(tamanoPromedioMB);
          
         const pesototalKb= archivos * tamanoMb * 1024;

         const mensaje= `se descargaran: ${cantArchivos} , archivos con un peso total: ${pesototalKb} KB`;

         return mensaje;
    }
    console.log(calcularEstadisticasDescarga("10","1.5"));