function dividirCuentasEntrePersonas(totalCuenta, numeroPersonas) {
    if (typeof totalCuenta !== 'number') {
        throw new TypeError('cuenta invalida');
    }
    if (
        typeof numeroPersonas !== 'number' ||
        !Number.isInteger(numeroPersonas) ||
        numeroPersonas < 1
    ) {
        throw new TypeError('personas invalidas');
    }

    return totalCuenta / numeroPersonas;
}

module.exports = { dividirCuentasEntrePersonas };
