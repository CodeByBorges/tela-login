// Seleciona o formulário de cadastro
const cadastroForm = document.getElementById("cadastroForm");
if (cadastroForm) {
  cadastroForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Captura os valores dos campos de cadastro
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Simula o armazenamento dos dados de cadastro
    console.log("Dados cadastrados:", { nome, email, senha });

    // Limpa os campos do formulário
    cadastroForm.reset();
    alert("Cadastro realizado com sucesso!");
  });
}

// Seleciona o formulário de login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Captura os valores dos campos de login
    const emailLogin = document.getElementById("emailLogin").value;
    const senhaLogin = document.getElementById("senhaLogin").value;

    // Simula a verificação dos dados de login
    console.log("Tentativa de login:", { emailLogin, senhaLogin });

    // Limpa os campos do formulário
    loginForm.reset();
    alert("Login realizado com sucesso!");
  });
}

document.getElementById('cadastroForm').addEventListener('submit', function(e) {
  e.preventDefault(); 
  setTimeout(function() {
      window.location.href = 'login.html';
  }, 1000); 
});

