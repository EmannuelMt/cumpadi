document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.getElementById("btn-login");
  const btnCadastro = document.getElementById("btn-cadastro");
  const loginForm = document.getElementById("login-form");
  const cadastroForm = document.getElementById("cadastro-form");
  const linkLogin = document.getElementById("link-login");
  const authTitle = document.getElementById("auth-title");
  const authSubtitle = document.getElementById("auth-subtitle");

  // Função para alternar entre os formulários e mudar o texto
  function toggleForm(showForm, hideForm, activeButton, inactiveButton, title, subtitle) {
    showForm.style.display = "block";
    hideForm.style.display = "none";
    activeButton.classList.add("active");
    inactiveButton.classList.remove("active");
    authTitle.textContent = title;
    authSubtitle.textContent = subtitle;
  }

  // Evento para o botão de Login
  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    toggleForm(loginForm, cadastroForm, btnLogin, btnCadastro, "Bem-vindo de volta", "Faça login na sua conta");
  });

  // Evento para o botão de Criar Conta
  btnCadastro.addEventListener("click", function (e) {
    e.preventDefault();
    toggleForm(cadastroForm, loginForm, btnCadastro, btnLogin, "Crie sua conta", "Junte-se a nós e comece a pedir!");
  });

  // Link "Já tem uma conta?" no formulário de cadastro
  if (linkLogin) {
    linkLogin.addEventListener("click", function (e) {
      e.preventDefault();
      toggleForm(loginForm, cadastroForm, btnLogin, btnCadastro, "Bem-vindo de volta", "Faça login na sua conta");
    });
  }
});
  // Envio do Formulário de Login
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data);
  });
  
  // Envio do Formulário de Cadastro
  document.getElementById('cadastro-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
  
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
  
    const response = await fetch('/api/auth/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha }),
    });
    const data = await response.json();
    console.log(data);
  });