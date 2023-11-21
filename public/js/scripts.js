let numeros_digitados = []; //array armazena os numeros digitados para a função back/clean
let numero;
let operacao;
let num_1;


function insert(num){
    
    numeros_digitados.push(num);

    [numero, numeros_digitados] = processar_digito(num, numeros_digitados);

    update_console();
    document.getElementById('resultado').innerHTML = numero;

}


function clean(){
    numeros_digitados = [];
    numero = parseInt(numeros_digitados.join(''));
    console.clear();
    document.getElementById('resultado').innerHTML = numeros_digitados;
}


function back(){
    
    let numero;
    
    //verifica se há, ou não, ponto flutuante no array e remove o último elemento 
    if(possui_ponto(numeros_digitados) == true){
        numeros_digitados.pop();
        numero = parseFloat(numeros_digitados.join(''));

        update_console();
        document.getElementById('resultado').innerHTML = numero;

    }else if(numeros_digitados.length > 0){
        numeros_digitados.pop();

        update_console();
        document.getElementById('resultado').innerHTML = parseInt(numeros_digitados.join('')); 
    };

}


function calcular(operacao, num_1, numero){
    let resultado;
    switch (operacao){
        case '*':
            resultado = num_1*numero;
            break;

        case '/':
            resultado = num_1/numero;
            break;
        
        case '+':
            resultado = num_1 + numero;
            break;
        
        case '-':
            resultado = num_1 - numero;
            break;
    }
return resultado;
}

module.exports = {insert, clean, back, calcular}





/* - - - - - - - - - - - - Funções Adicionais - - - - - - - - - - - - */

function processar_digito(num, numeros_digitados) {

    let digito;

    //garantir que o usuário não digite o '.' mais de uma vez
    if(num === '.'){ 
        if(contar_ponto(numeros_digitados) > 1){
            numeros_digitados.pop();
        }
    };

    if (Number.isInteger(num) == true){  //verifica se num é um inteiro
        digito = parseInt(numeros_digitados.join('')); //transforma o array em um só numero inteiro
    }
    else{
		digito = parseFloat(numeros_digitados.join(''));
    };

    if(num === '*' || num === '/' || num === '+'){
        operacao = num;
        numeros_digitados.pop();
        num_1 = digito;
        numeros_digitados = [];
    
    }else if (num === '-'){

        if(numeros_digitados.length === 1 && contar_negacao(numeros_digitados) === 1){
            numeros_digitados = [];
            numeros_digitados.push(num);
            digito = num;
        }
        else{
            operacao = num;
            numeros_digitados.pop();
            num_1 = digito;
            numeros_digitados = [];
        }
    }
    else if(num === '='){
        numeros_digitados.pop();
        digito = calcular(operacao, num_1, numero);
        numeros_digitados = [];
        numeros_digitados.push(digito);
    };
        
    return [digito, numeros_digitados];
}

// Função adicional para atualizar os números no console 
function update_console() {
    console.clear(); // Limpar o console do navegador
    numeros_digitados.forEach(numero => console.log(numero)); //mostra os números digitados 
}




/* - - - - - - - - - - - - funções auxiliares - - - - - - - - - - - - */

//Verificar se o '.' foi digitado
function possui_ponto(array_digitos){
    for(let i = 0; i<array_digitos.length; i++){
        if(array_digitos[i] === '.'){
            return true;
        }
    }
    return false;
}

//verifica se o '.' foi digitado mais de uma vêz
function contar_ponto(array_digitos){
    let cont = 0;
    for (let i = 0; i < array_digitos.length; i++) {
        if (array_digitos[i] === '.') {
            cont++;
        }
    } return cont
}

//verifica os sinais de negação
function contar_negacao(array_digitos){
    let cont = 0;
    for (let i = 0; i < array_digitos.length; i++) {
        if (array_digitos[i] === '-') {
            cont++;
        }
    } return cont
}