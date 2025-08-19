document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const usuarioCorreto = "admin";
    const senhaCorreta = "123456";
  
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
  
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
      sessionStorage.setItem('logado', true);
      window.location.href = "dashboard.html";
    } else {
      document.getElementById('error').innerText = "Usuário ou senha inválidos.";
    }
  });
  