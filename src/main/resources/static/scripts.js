const categoryLinks = document.querySelectorAll('.animal-list a');
const cards = document.querySelectorAll('.animal-card');
categoryLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const category = event.target.innerHTML;
    console.log(category)
    cards.forEach(function(card) {
      if (card.classList.contains(category.toLowerCase())) {
        card.style.display = 'inline-block';
      } else {
        card.style.display = 'none';
      }
      if (category=="Все") {
        card.style.display = 'inline-block';
      }
    });
    categoryLinks.forEach(function(link) {
        link.classList.remove('active'); // удаляем класс "active" у всех ссылок
      });
    event.target.classList.add('active');
  });
});


cards.forEach(function(card) {
    const takeButton = card.querySelector('.take-button');
    const formContainer = card.querySelector('.form-container');
  
    takeButton.addEventListener('click', function(event) {
      formContainer.style.display = 'block';
    });
  
    const form = formContainer.querySelector('form');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = modalOverlay.querySelector('.modal');
    const requestNumberSpan = modal.querySelector('#request-number');
    const okButton = modal.querySelector('#ok-button');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const requestNumber = Math.floor(Math.random() * 1000000);
  
      requestNumberSpan.textContent = requestNumber;
      modalOverlay.style.display = 'block';
  
      okButton.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
        form.reset();
        formContainer.style.display = 'none';
      });
    });
  });


const authBtn = document.getElementById('authBtn');
const authForm = document.querySelector('.auth-form');
const submitBtn = document.getElementById('submitBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const statusText = document.querySelector('.status');
const logoutBtn = document.querySelector('#logoutBtn');

authBtn.addEventListener('click', () => {
  authForm.classList.toggle('hidden');
});

submitBtn.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Здесь можно добавить проверку введенных данных на сервере или в локальном хранилище

  if (username === 'Kirill' && password === '123') {
    localStorage.setItem('auth', 'true');
    statusText.textContent = `Вошёл "${username}"`;
    statusText.classList.remove('hidden');
    authForm.classList.add('hidden');
    logoutBtn.classList.remove('hidden')
  } else {
    statusText.textContent = 'Неверные имя пользователя или пароль';
    statusText.classList.remove('hidden');
  }
});

// Проверяем, авторизован ли пользователь при загрузке страницы
if (localStorage.getItem('auth') === 'true') {
  const username = 'user'; // В данном примере имя пользователя по умолчанию
  statusText.textContent = `Вошёл "${username}"`;
  statusText.classList.remove('hidden');
}


if (localStorage.getItem('auth') != 'true'){
  logoutBtn.classList.add('hidden')
}

logoutBtn.addEventListener('click', function() {
  localStorage.setItem('auth', 'false');
  statusText.textContent = `Вы вышли`;
  logoutBtn.classList.add('hidden')
  setTimeout(function() {
    statusText.textContent = '';
  }, 3000);
});