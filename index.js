const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const clave = document.getElementById('clave');
const confirmarClave = document.getElementById('confirmar-clave');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  const nombreValue = nombre.value.trim();
  const emailValue = email.value.trim();
  const claveValue = clave.value.trim();
  const confirmarClaveValue = confirmarClave.value.trim();

  // Validación del campo Nombre
  if (nombreValue === '') {
    setErrorFor(nombre, 'Rellene este campo');
  } else if (!isNameValid(nombreValue)) {
    setErrorFor(nombre, 'El nombre no puede contener números');
  } else {
    setSuccessFor(nombre);
  }

  // Validación del campo Email
  if (emailValue === '') {
    setErrorFor(email, 'Rellene este campo');
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(email, 'El email no es válido');
  } else {
    setSuccessFor(email);
  }

  // Validación del campo Clave
  if (claveValue === '') {
    setErrorFor(clave, 'Rellene este campo');
  } else if (claveValue.length < 8) {
    setErrorFor(clave, 'La clave debe tener al menos 8 caracteres');
  } else {
    setSuccessFor(clave);
  }

  // Validación del campo Confirmar Clave
  if (confirmarClaveValue === '') {
    setErrorFor(confirmarClave, 'Rellene este campo');
  } else if (claveValue !== confirmarClaveValue) {
    setErrorFor(confirmarClave, 'Las contraseñas no coinciden');
  } else {
    setSuccessFor(confirmarClave);
  }

  // Si todos los campos son válidos, mostrar alerta
  if (nombre.parentElement.classList.contains('success') &&
      email.parentElement.classList.contains('success') &&
      clave.parentElement.classList.contains('success') &&
      confirmarClave.parentElement.classList.contains('success')) {
    alert('La inscripción ha sido correcta');
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmailValid(email) {
  // Expresión regular para validar el email
  return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

function isNameValid(nombre) {
  // Expresión regular para validar que el nombre no tenga números
  return /^[a-zA-Z]+$/.test(nombre);
}
