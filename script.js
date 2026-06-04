function registrar() {
  const usuario = document.getElementById('nuevoUser').value.trim();
  const password = document.getElementById('nuevoPass').value.trim();

  if (!usuario || !password) {
    alert('Por favor completa todos los campos.');
    return;
  }

  localStorage.setItem('usuario', usuario);
  localStorage.setItem('password', password);

  alert('Cuenta creada correctamente');
  window.location.href = 'index.html';
}

function iniciarSesion() {
  const usuario = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value.trim();

  const usuarioGuardado = localStorage.getItem('usuario');
  const passwordGuardada = localStorage.getItem('password');

  if (usuario === usuarioGuardado && password === passwordGuardada) {
    window.location.href = 'panel.html';
  } else {
    alert('Datos incorrectos');
  }
}

function cerrarSesion() {
  window.location.href = 'index.html';
}
