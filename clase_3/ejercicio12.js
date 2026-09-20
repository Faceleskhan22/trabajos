function procesarCompraMovil(precioBase, descuentoPct) {
    // Declara aquí tus funciones auxiliares:
    function aplicarDescuento(precio, descuento){
    let montoDescuento =(precio * descuento) / 100;
    let precioFinal = precio - montoDescuento;
    return precioFinal;
    }
    const sumarIva= function (precio){
    let iva = precio * 1.21;
    return iva;
 
    }
    const rendondear =(numero) => Number(numero.toFixed(2));

    // Ejecuta la lógica encadenada y retorna el valor:
    console.log(rendondear(sumarIva(aplicarDescuento(precioBase, descuentoPct))))
    
    
}
procesarCompraMovil(100, 10);