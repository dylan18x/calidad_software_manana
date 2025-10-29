function edades(arreglo){
    if(!Array.isArray(arreglo) || arreglo.length==0)
        throw new TypeError('arreglo inválido');
    return arreglo.filter(n=>n>18);
}
module.exports={edades}