const {crearUsuario,obtenerPerfil,compararUsuario} = require('./toMatchObjectDemo');

describe('toMatchObject matcher',()=>{
    test('Happy path: usuario coincide parcialmente con estructura esperando',()=>{
        const usuario = crearUsuario('Ana','admin');
        expect(usuario).toMatchObject(
        {nombre: 'Ana', rol:'admin', active: true}
        );
    })
    test('Happy path: obtenerPerfil retorna sobconjunto esperando',()=>{
        const usuario = {
            nombre: 'Luis',
            rol: 'editor',
            activo: true,
            extra:'no importa'
        };
        expect(obtenerPerfil(usuario)).toMatchObject({rol: 'editor',activo:true});
    })
    test('Sad path: errores de tipos y comparacion incorrecta',()=>{
        expect(() => crearUsuario(123,'rol')).toThrow('nombre y rol deben ser string');
        const u1 = {rol:'user',activo:true};
        const u2 = {rol:'admin',activo:true};
        expect(compararUsuario(u1,u2)).toBe(false);
    })
})
