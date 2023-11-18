let numeros_digitados = []; //array armazena os numeros digitados para a função back/clean

function insert(num){
    let numero;
    numeros_digitados.push(num);
    
    //verificar se o numero atual é inteiro ou float 
    if(Number.isInteger(numero) == true){
        numero = parseInt(numeros_digitados.join('')); //metodo para transformar o array em um número só
    }else{
        numero = parseFloat(numeros_digitados.join(''));
    };

    update_console();
    document.getElementById('resultado').innerHTML = numero;
}

function clean(){
    numeros_digitados = [];
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
function calcular(){
    
}

module.exports = {insert, clean, back, calcular}


// Função adicional para atualizar os números no console 
function update_console() {
    console.clear(); // Limpar o console do navegador
    numeros_digitados.forEach(numero => console.log(numero)); //mostra os números digitados 
}

//Verificar se o '.' foi digitado
function possui_ponto(array_digitos){
    for(let i = 0; i<array_digitos.length; i++){
        if(array_digitos[i] === '.'){
            return true;
        }
    }
    return false;
}