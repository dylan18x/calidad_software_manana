const {calcularTotalCafeteria} = require('./calcularCafeteria');

describe('Calcular Total Cafeteria',()=>{
    test('Happy path: ',()=>{
        const items = [
            {nombre: 'manzana',precioUnitario: 2.5,cantidad: 2},
            {nombre: 'pera',precioUnitario: 1,cantidad: 3}
        ]
        expect(calcularTotalCafeteria(items,12)).toEqual(
            {"iva": 1.92, 
            "subtotal": 16, 
            "total": 17.92});
    })

    test('Sad Path',()=>{
        
        expect(()=>calcularTotalCafeteria(items,22).toThrow('items invalidos'))
    })
})