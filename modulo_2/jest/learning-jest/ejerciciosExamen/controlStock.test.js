const {actualizarStock} = require ('./controlStock');

describe('Control de stock',()=>{
    test('Happy path: ',()=>{
        expect(actualizarStock(20,-5)).toBe(15)
    })
    test('debe lanzar Error por stock insuficiente', () => {
        expect(() => actualizarStock(5, -10)).toThrow(Error);
        expect(() => actualizarStock(5, -10)).toThrow('stock insuficiente');
    });
})