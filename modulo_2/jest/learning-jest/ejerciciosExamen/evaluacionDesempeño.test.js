const {evaluarDesempenio} = require('./evaluacionDesempeño');

describe('Evaluar desempeño estudiante ',()=>{
    test('Happy path: [7,9,5.6,10] => Aceptable(7.9)',()=>{
        expect(evaluarDesempenio([7,9,5.6,10])).toBe('Aceptable');
    })
    test('Sad path: [7,9,-5.6,10] => lista invalida',()=>{
        expect(()=>evaluarDesempenio('[7,9,-5.6,10]')).toThrow('lista invalida')
    })
    test('Sad path: [7,9,-5.6,10] => medicion invalida',()=>{
        expect(()=>evaluarDesempenio([7,9,-5.6,10])).toThrow(Error)
        expect(()=>evaluarDesempenio([7,9,-5.6,10])).toThrow('medicion invalida')
    })
})