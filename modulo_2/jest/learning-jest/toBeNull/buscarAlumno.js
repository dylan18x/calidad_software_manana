function buscarAlumno(alumnos, nombre){
    if(!Array.isArray(alumnos))
        throw new TypeError('alumnos debe ser array');
    if(typeof nombre !== 'string' || !nombre.trim())
        throw new TypeError('nombre invalido');
    const found = alumnos.find(a=> a?.nombre=== nombre.trim());
    return found ?? null;
}

function leerProp(obj,prop){
    if(!obj || typeof obj !== 'object')
        throw new TypeError('obj invalido')
    if(!prop || typeof prop !== 'string')
        throw new TypeError('prop invalido');
    return obj[prop]; 
}

module.exports = {buscarAlumno,leerProp}