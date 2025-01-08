const nome = document.getElementById('nome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const button = document.getElementById('button')
const resultado = document.getElementById('resultado')

const retornoResultado = (imc) => {
    if (imc > 40) return 'Obesidade grau III'
    if (imc > 35) return 'Obesidade grau II'
    if (imc > 30) return 'Obesidade grau I'
    if (imc > 25) return 'Levemente acima do peso'
    if (imc > 18.5) return 'peso ideal'
    return 'Abaixo do peso'
}

const calculoImc = () => {
    if (!peso.value) return resultado.textContent = 'Preencha o campo peso';
    if (!altura.value) return resultado.textContent = 'Preencha o campo altura';
    const resultadoImc = (peso.value / (altura.value * altura.value)).toFixed(1);
    resultado.textContent = `${nome.value} - ${retornoResultado(resultadoImc)}`;
}

button.addEventListener('click', calculoImc)

