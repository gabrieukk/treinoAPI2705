export function semaforo(cor) {
    if(cor == "verde") {
        return "Pode passar";
    }
    else if(cor =="vermelho"){
        return "Aguarde";
    }
    else {
        return "Inválido"
    }
}

export function diaSemana (dia) {
    if (dia == 0) {
        return "domingo"
    }
    else if (dia == 1) {
        return "segunda"
    }
    else if (dia == 2) {
        return "terça"
    }
    else if (dia == 3) {
        return "quarta"
    }
    else if (dia == 4) {
        return "quinta"
    }
    else if (dia == 5) {
        return "sexta"
    }
    else {
        return "sabado"
    }
}

export function fatorial(n) {
    let resultado = n;
    let multiInicial = n -1;

    for (let i = multiInicial; i > 1; i--) {
       resultado *= i;
    }
    return resultado;
}

export function sequenciaPar (limite) {
    let resposta = [limite];
    
    for(let i = 0; i < limite; i++ ){
        if(item in resposta % 2 == 0){
            resposta[i] = item;
        }
    }
    return resposta;
}