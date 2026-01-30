const{calcularBono} = require('./calcularBono');

describe('Calcular Bono por Antiguedad',()=>{
    test('Happy Path: ',()=>{
        expect(calcularBono(5,1230)).toEqual(
            {"bono": 61.5, 
            "salarioBase": 1230, 
            "totalConBono": 1291.5});
    })
    test('Sad path: anios es string',()=>{
        expect(()=>calcularBono('4',450).toThrow('datos invalidos'))
    })
})