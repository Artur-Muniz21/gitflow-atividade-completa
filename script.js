const valorA = document.getElementById("valorA");
const valorB = document.getElementById("valorB");
const calcular = document.getElementById("calcular")

const soma = document.getElementById("somar");
const subtracao = document.getElementById("subtracao")

function somar(){
    const resultado = parseInt(valorA.value) + parseInt(valorB.value)
    return resultado;
};

function subtrair(){
    const resultado = parseInt(valorA.value) - parseInt(valorB.value)
    return resultado;
};

calcular.onclick = () => {

    soma.value = somar()
    subtracao.value = subtrair()
}