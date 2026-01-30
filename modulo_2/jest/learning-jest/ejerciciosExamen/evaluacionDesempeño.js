function evaluarDesempenio(mediciones){
    if(!Array.isArray(mediciones) || mediciones.length == 0){
        throw new TypeError('lista invalida')
    }

    let suma = 0;
    for(const nota of mediciones){
        if (typeof nota !== 'number' || nota < 0) {
            throw new Error('medicion invalida');
        }
        suma += nota
    }
    let promedio = suma/mediciones.length
    if(promedio < 6){
        return 'Bajo'
    }
    else if(promedio == 6 || promedio <= 7.9){
        return 'Aceptable'
    }else{
        return 'Alto'
    }
}   

module.exports = {evaluarDesempenio}
//{5,10,6,8}