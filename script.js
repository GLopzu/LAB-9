// Seleccionar elementos HTML
const commentBox = document.querySelector('.comment-box');
const commentForm = document.querySelector('.comment-form');
const commentInput = document.querySelector('.comment-input');
const submitBtn = document.querySelector('.submit-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalHeader = document.querySelector('.modal-header');
const modalCloseBtn = document.querySelector('.close-btn');
const postContainer = document.querySelector('.post-container');

// Función para abrir el modal
function openModal() {
  modalOverlay.style.display = 'flex';
  modal.style.display = 'block';
  commentInput.focus();
}

// Función para cerrar el modal
function closeModal() {
  modalOverlay.style.display = 'none';
  modal.style.display = 'none';
  commentInput.value = '';
  submitBtn.style.backgroundColor = '#008CBA';
  submitBtn.disabled = true;
}

// Función para agregar una nueva publicación
function addPost() {
  const postContent = commentInput.value;
  const post = document.createElement('div');
  post.classList.add('post');
  post.innerHTML = `
    <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="profile picture" class="profile-pic">
    <p class="post-content">${postContent}</p>
  `;
  postContainer.appendChild(post);
  closeModal();
}

// Evento para abrir el modal al hacer clic en el comentario
commentBox.addEventListener('click', openModal);

// Evento para cerrar el modal al hacer clic en la X
modalCloseBtn.addEventListener('click', closeModal);

// Evento para cerrar el modal al hacer clic fuera del mismo
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Evento para habilitar el botón de enviar al ingresar texto
commentInput.addEventListener('input', () => {
  if (commentInput.value.trim() !== '') {
    submitBtn.style.backgroundColor = '#008CBA';
    submitBtn.disabled = false;
  } else {
    submitBtn.style.backgroundColor = '#008CBA';
    submitBtn.disabled = true;
  }
});

// Evento para agregar la publicación al enviar el comentario
commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addPost();
});
