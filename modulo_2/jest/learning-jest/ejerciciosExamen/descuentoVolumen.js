function calcularPrecioPorVolumen(cantidad, precioUnitario){
    if(typeof cantidad !='number' || typeof precioUnitario !='number'){
        throw new TypeError('datos invalidos')
    }
    let descuento = 0;
    let total = cantidad * precioUnitario;
    if(cantidad < 9){
        descuento = 0;
    }
    else if(cantidad == 10){
        descuento = total*(5/100);
    }
    else if(cantidad == 15){
        descuento = total*(10/100);
    }
    let totalDescuento = total - descuento;
    return{total}
}

module.exports = {calcularPrecioPorVolumen}