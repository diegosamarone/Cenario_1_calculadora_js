let numeros_digitados = []; //array armazena os numeros digitados para a função back/clean

function insert(num){
    numeros_digitados.push(num);
    update_console();    
}
function clean(){
    numeros_digitados = [];
    console.clear();   
}
function back(){
    if(numeros_digitados.length > 0){
        numeros_digitados.pop(); // método pop para remover o último elemento do array
        update_console();
    }
}
function calcular(){
    
}

module.exports = {insert, clean, back, calcular}


// Função adicional para atualizar os números no console 
function update_console() {
    console.clear(); // Limpar o console do navegador
    numeros_digitados.forEach(numero => console.log(numero)); //mostra os números digitados 
}