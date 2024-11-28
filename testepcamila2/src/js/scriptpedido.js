// Seleciona os botões
const botaoNao = document.getElementById('nao');
const botaoSim = document.getElementById('sim');
let contadorTentativas = 0;

// Função para movimentar o botão "Não"
function fuja() {
    // Incrementa o contador de tentativas
    contadorTentativas++;

    // Exibe a mensagem após 3 cliques
    if (contadorTentativas >= 3) {
        exibirMensagemNao();
    }

    // Obtém a largura e altura da janela visível
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Obtém a largura e altura do botão
    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    // Gera novas posições aleatórias
    const novaPosicaoX = Math.random() * (larguraJanela - larguraBotao);
    const novaPosicaoY = Math.random() * (alturaJanela - alturaBotao);

    // Aplica as novas posições ao botão
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${novaPosicaoX}px`;
    botaoNao.style.top = `${novaPosicaoY}px`;
}

// Função para exibir a mensagem "Aceita q sim logo"
function exibirMensagemNao() {
    let mensagemExistente = document.getElementById('mensagem-dinamica');
    if (!mensagemExistente) {
        const mensagem = document.createElement('p');
        mensagem.id = 'mensagem-dinamica';
        mensagem.textContent = 'Aceita q sim logo';
        mensagem.style.fontSize = '24px';
        mensagem.style.color = 'red';
        mensagem.style.textAlign = 'center';
        mensagem.style.marginTop = '20px';

        const painel = document.querySelector('.painel');
        painel.appendChild(mensagem);
    }
}

// Função para exibir a mensagem "Ótima escolha"
function exibirMensagemSim() {
    let mensagemExistente = document.getElementById('mensagem-sim');
    if (!mensagemExistente) {
        const mensagem = document.createElement('p');
        mensagem.id = 'mensagem-sim';
        mensagem.textContent = 'Ótima escolha';
        mensagem.style.fontSize = '24px';
        mensagem.style.color = 'green';
        mensagem.style.textAlign = 'center';
        mensagem.style.marginTop = '20px';

        const painel = document.querySelector('.painel');
        painel.appendChild(mensagem);
    }
}

// Adiciona o evento de clique ao botão "Sim"
botaoSim.addEventListener('click', exibirMensagemSim);
