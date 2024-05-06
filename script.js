const valorA = document.getElementById("valorA");
const valorB = document.getElementById("valorB");
const calcular = document.getElementById("calcular")

const soma = document.getElementById("somar");

function somar(){
    const resultado = parseInt(valorA.value) + parseInt(valorB.value)
    return resultado;
};

calcular.onclick = () => {

    soma.value = somar()
}