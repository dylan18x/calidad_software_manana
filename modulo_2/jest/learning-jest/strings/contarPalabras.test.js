const { contarPalabras } = require('./contarPalabras');

describe('Contar Palabras', () => {
    test('Happy path: Hola mundo Jest -> 3', () => {
        const response = contarPalabras(
            'Hola mundo Jest'
        );
        expect(response).toBe(3);
    });

    test('Sad path: ERROR', () => {
        expect(() => contarPalabras(null)).toThrow('frase invalida');
        expect(() => contarPalabras(123)).toThrow('frase invalida');
    });
});