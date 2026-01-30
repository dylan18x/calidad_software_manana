function actualizarStock(stockActual,movimiento){
    if(typeof stockActual != 'number'  || typeof movimiento != 'number') {
        throw new TypeError('valores invalidos')
    }

    let stockNuevo = stockActual + movimiento
    
    if(stockNuevo < 0){
        throw new Error('stock insuficiente')
    }
    return stockNuevo
}

module.exports = {actualizarStock}