function crearUsuario(nombre, rol){
    if(typeof nombre !== 'string' || typeof rol !== 'string'){
        throw new TypeError('nombre y rol deben ser string');
    }
    return{
        nombre,
        rol,
        active: true,
        creadoEn: new Date().toISOString()
    };
}

function obtenerPerfil(usuario){
    if(!usuario || typeof usuario !== 'object')
        throw new TypeError('usuario invalido');     
    const {nombre,rol,activo} = usuario;
    return {nombre, rol, activo};
}

function compararUsuario(u1,u2){
    if(!u1 || !u2) throw new TypeError('usuario invalidos');
    return u1.rol === u2.rol && u1.activo === u2.activo;
}

module.exports = {crearUsuario,obtenerPerfil,compararUsuario}