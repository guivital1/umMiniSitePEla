// Seleciona o elemento para exibir o contador
const contadorElement = document.getElementById('contador');

// Data inicial: 25 de março de 2024
const dataInicial = new Date('2024-03-25T00:00:00');

// Função para atualizar o contador
function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicial;

    // Calcula os dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibe o tempo formatado
    contadorElement.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;

    // Aplica a animação de pulsar
    contadorElement.classList.add('pulsar');

    // Remove a classe de animação após o término
    setTimeout(() => {
        contadorElement.classList.remove('pulsar');
    }, 600); // Deve ser igual à duração da animação no CSS
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chama a função imediatamente para inicializar
atualizarContador();
