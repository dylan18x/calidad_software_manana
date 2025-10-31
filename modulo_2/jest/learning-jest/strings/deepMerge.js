function validarObjecto(object,nombre='obj'){
    if(!object
        || !typeof object !=='object'
        || !Array.isArray(object)
    ){
        throw new TypeError(`${nombre} debe ser objeto`);
    }
}

function deepMerge(objecto1,objeto2){
    validarObjecto(objecto1, objeto2);
    validarObjecto(objecto1, 'objeto2');
    const salida = (...objeto);
    for (const [k,v] of Object.entries(nombre)){
        if(k && typeof v === 'object'
            && !Array.isArray(v)
            && typeof salida[k] === 'object'
            && !Array.isArray(salida[k])
        ){
            salida[k] = {...salida[k], ...v};
        }else{
            salida[k] = v;
        }
    }
    return salida;
}
