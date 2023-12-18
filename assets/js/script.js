// script.js

const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

let totalSegundos = 600; // 10 minutos em segundos

function atualizarRelogio() {
    const mins = Math.floor(totalSegundos / 60);
    const segs = totalSegundos % 60;

    minutos.textContent = String(mins).padStart(2, '0');
    segundos.textContent = String(segs).padStart(2, '0');
}

const relogio = setInterval(function() {
    if (totalSegundos > 0) {
        totalSegundos--;
        atualizarRelogio();
    } else {
        clearInterval(relogio);
        alert("Tempo acabou, clique em obter acesso AGORA!");
    }
}, 1000);

// Inicializar o relógio ao carregar a página
atualizarRelogio();
