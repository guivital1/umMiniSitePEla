
// Seleciona o elemento do sino pelo ID
const bellIcon = document.getElementById('bell-icon');

// Adiciona um evento de clique ao elemento
bellIcon.addEventListener('click', () => {
  // Redireciona para a página cartinha.html
  window.location.href = 'cartinha.html';
});


const cameraIcon = document.getElementById('Camera-Icon');

// Adiciona um evento de clique ao elemento
cameraIcon.addEventListener('click', () => {
  // Redireciona para a página cartinha.html
  window.location.href = 'fotos.html';
});

const HeartIcon = document.getElementById('heart-icon');
HeartIcon.addEventListener('click', () => {
    window.location.href = 'coracao.html';
} )

const MesageIcon = document.getElementById('pedido-icon');
MesageIcon.addEventListener('click', () => {
    window.location.href = 'pedido.html'
})

const tmpIcon = document.getElementById('tempoicon');
tmpIcon.addEventListener('click', () => {
    window.location.href = 'tempo.html'
})