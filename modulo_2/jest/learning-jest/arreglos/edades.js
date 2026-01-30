function edades(arreglo){
    if(!Array.isArray(arreglo) || arreglo.length==0)
        throw new TypeError('arreglo inválido');
    let mayor=[];
    for(let i=0; i<arreglo.length;i++){
        if(arreglo[i]>18){
            mayor.push(arreglo[i]);
        }
    }
    return mayor;
}
module.exports={edades}