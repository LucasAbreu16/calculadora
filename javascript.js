function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        try {
            let expr = normalizarExpressao(resultado);
            document.getElementById('resultado').innerHTML = eval(expr);
        } catch {
            alert("Expressão inválida!");
        }
    } else {
        alert("Insira um valor para realizar um calculo");
    }
}

function normalizarExpressao(expr) {
    return expr.replace(/\b0+(\d+)/g, "$1");
}