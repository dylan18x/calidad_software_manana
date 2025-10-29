const { edades} = require('./edades');

describe('Edades Mayores', ()=>{
    test('Happy path: [35,12,17,29] mayor 35,29', ()=>{
        expect(edades([35,12,17,29])).toEqual[(35,19)];
    });
    test('Happy path: [ 29,38] mayor 29', ()=>{
        expect(edades([29,38])).toEqual[(29,38)];
    });
    test('Sad path: arreglo invalido', ()=>{
        expect(()=>edades([])).toThrow('arreglo inválido');
        expect(()=>edades('edificio')).toThrow('arreglo inválido');
    });
});