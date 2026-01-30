function calcularBono(anios,salarioBase){
    if(typeof anios != 'number' || typeof salarioBase != 'number'){
        throw new TypeError ('datos invalidos')
    }
    if(anios >= 0 && anios <= 2){
        bono = salarioBase*(0);
    }
    else if(anios >= 3 && anios <= 5){
        bono = salarioBase*(5/100);
    }
    else if(anios >= 6 && anios <= 10){
        bono = salarioBase*(10/100);
    }
    else{
        bono = salarioBase*(15/100);
    }
    let totalConBono = salarioBase + bono;
    return{salarioBase,bono,totalConBono}
}

module.exports={calcularBono}