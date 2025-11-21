const {calcularPagoHorasExtra} = require('./horasExtras')

describe('Calcular pago de horas extra', () => {

    test('Happy Path: con horas extra', () => {
        expect(calcularPagoHorasExtra(50, 40, 10, 1.5)).toEqual({
            horasExtra: 10,
            pagoExtra: 150
        });
    });
    test('Happy Path: sin horas extra', () => {
        expect(calcularPagoHorasExtra(40, 40, 10, 1.5)).toEqual({
            horasExtra: 0,
            pagoExtra: 0
        });
    });
    test('Happy Path: valores decimales', () => {
        const result = calcularPagoHorasExtra(42.5, 40, 8.75, 1.2);
        expect(result.horasExtra).toBeCloseTo(2.5);
        expect(result.pagoExtra).toBeCloseTo(26.25);
    });
    test('Sad Path: horasTrabajadas inválido', () => {
        expect(() => calcularPagoHorasExtra('hola', 40, 10, 1.5)).toThrow('parametros invalidos');
    });
    test('Sad Path: tarifaHora inválida', () => {
        expect(() => calcularPagoHorasExtra(50, 40, 'x', 1.5)).toThrow('parametros invalidos');
    });
    test('Sad Path: factorExtra inválido', () => {
        expect(() => calcularPagoHorasExtra(50, 40, 10, null)).toThrow('parametros invalidos');
    });
});