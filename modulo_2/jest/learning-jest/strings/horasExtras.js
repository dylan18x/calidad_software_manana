function calcularPagoHorasExtra(horasTrabajadas, horasBase,tarifaHora,factorExtra){
    if(typeof horasTrabajadas !== 'number' || typeof horasBase !== 'number' ||
        typeof tarifaHora !== 'number' || typeof factorExtra !== 'number')
        {
        throw new TypeError('parametros invalidos')
    }
    if(horasTrabajadas <= horasBase){
        return {horasExtra: 0,pagoExtra:0}
    }
    else{
        const horasExtra = horasTrabajadas - horasBase;
        const pagoExtra= horasExtra * tarifaHora * factorExtra

        return {horasExtra,pagoExtra}
    }

}
module.exports = {calcularPagoHorasExtra}