
const { sueldoAnual } = require('./sueldoAnual');

describe('sueldoAnual', () => {
    test('Happy path', () => {
        expect(
            sueldoAnual({
                nombre: 'Juan',
                sueldoMensual: 500
            })
        ).toBe(6000);
    });

    test('Sad path: nombre / sueldo inválido', () => {
        expect(() => sueldoAnual({sueldoMensual: -1})).toThrow('sueldo mensual inválido');
        expect(() => sueldoAnual(null)).toThrow('empleado inválido');
    });
});