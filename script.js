function insert(num){
    //Vai inserir o valor no elemento
    var numero = document.getElementById('calculadora').innerHTML;
    //Vai continuar inserindo os valores
    document.getElementById('calculadora').innerHTML = numero + num;
}

function clean(){

    document.getElementById('calculadora').innerHTML = " ";
}

function calcular(){

    var resultado = document.getElementById('calculadora').innerHTML;
    if(resultado){
        //A função eval() computa um código JavaScript representado como uma string.
        document.getElementById('calculadora').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('calculadora').innerHTML = "Sem Valor"
    }
}