const valorA = document.getElementById("valorA");
const valorB = document.getElementById("valorB");
const calcular = document.getElementById("calcular");

const soma = document.getElementById("somar");
const subtracao = document.getElementById("subtracao");
const multiplicacao = document.getElementById("multiplicacao");
const divisao = document.getElementById("divisao");

function somar(){
    const resultado = parseFloat(valorA.value) + parseFloat(valorB.value)
    return resultado;
};

function subtrair(){
    const resultado = parseFloat(valorA.value) - parseFloat(valorB.value)
    return resultado;
};

function multiplicar(){
    const resultado = parseFloat(valorA.value) * parseFloat(valorB.value)
    return resultado;
};

function dividir(){
    const resultado = parseFloat(valorA.value)/parseFloat(valorB.value)
    return resultado;
};


calcular.onclick = () => {

    soma.value = somar();
    subtracao.value = subtrair();
    multiplicacao.value = multiplicar();
    divisao.value = dividir();
};