function insert(num){
    let number = document.getElementById("calc").innerHTML;
    document.getElementById("calc").innerHTML = number + num
};

function clean(){
    document.getElementById("calc").innerHTML = "";
}

function back(){
    let result = document.getElementById("calc").innerHTML;
    document.getElementById("calc").innerHTML = result.substring(0, result.length -1)
}

function calc(){
    let result = document.getElementById("calc").innerHTML;
    if(result){
        document.getElementById("calc").innerHTML = eval(result)
    }
}