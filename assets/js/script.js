// Função que insere o número a partir da função onclick;
function insert(num){
    let number = document.getElementById("calc").innerHTML;
    document.getElementById("calc").innerHTML = number + num
};
// Função de limpar, (reset);
function clean(){
    document.getElementById("calc").innerHTML = "";
};
//Função de apagar algarismo por algarismo;
function back(){
    let result = document.getElementById("calc").innerHTML;
    document.getElementById("calc").innerHTML = result.substring(0, result.length -1)
};
// Função padrão de JS para calcular com oque tem no input de algarismo;
function calc(){
    let result = document.getElementById("calc").innerHTML;
    if(result){
        document.getElementById("calc").innerHTML = eval(result)
    };
};

