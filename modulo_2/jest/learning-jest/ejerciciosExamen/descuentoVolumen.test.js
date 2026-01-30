const {calcularPrecioPorVolumen} = require ('./descuentoVolumen');

describe('Calcular Descuento por Cantidad',()=>{
    test('Happy path: descuento (10,2.5) => 23.75',()=>{
        expect(calcularPrecioPorVolumen(10,2.5)).toEqual({
            total : 25,
            descuento: 1.25,
            totalDescuento: 23.75
        })
    })
})