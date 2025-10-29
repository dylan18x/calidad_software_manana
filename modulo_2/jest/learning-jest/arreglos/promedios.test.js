const {promedio} = require('./promedios');

describe('Promedios', ()=>{
    test('Happy path: [4,9,2,18] mayor 6.25', ()=>{
        expect(promedio([4,9,2,18])).toEqual[(6.25)];
    });
    test('Happy path: [-5,-1] mayor -3', ()=>{
        expect(promedio([-5,-1])).toEqual[(-3)];
    });
    test('Sad path: arreglo invalido', ()=>{
        expect(()=>promedio([])).toThrow('arreglo inválido');
        expect(()=>promedio('edificio')).toThrow('arreglo inválido');
    });
});