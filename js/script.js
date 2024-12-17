// Tela de Boas-Vindas
document.getElementById('start-btn').addEventListener('click', function() {
    document.querySelector('.welcome-screen').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.welcome-screen').style.display = 'none';
        document.querySelector('main').style.opacity = 1;
        document.body.style.overflow = 'auto'; // Reabilita a rolagem
    }, 500); // Tempo para a animação de fade-out
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download do Currículo
document.getElementById('download-cv').addEventListener('click', function(e) {
    e.preventDefault(); // Impede a ação padrão
    const link = document.createElement('a');
    link.href = 'assets/curriculo.pdf'; // Atualizado para refletir a nova localização
    link.download = 'Curriculo_Daniel_Alves_Silva.pdf'; // Nome para o download
    link.target = '_blank'; // Abre o link em uma nova guia
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Menu Toggle para dispositivos móveis
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});
