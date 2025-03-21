document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // Simulação de envio de e-mail
    alert(`Um link de redefinição de senha foi enviado para: ${email}`);
    // Adicionar a lógica para enviar o e-mail de redefinição
});
// Menu mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active'); 
    });

    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}