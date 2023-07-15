document.querySelector('.menubtn1').onclick = function() {
    document.querySelector('.mobstylelinks').classList.toggle('clicks');
  };
  
  const mq = window.matchMedia("(max-width: 720px)");
  
  function closeMenu() {
    document.querySelector('.mobstylelinks').classList.remove('clicks');
  }
  
  window.addEventListener('resize', function() {
    if (!mq.matches) {
      closeMenu();
    }
  });

  // Получаем ссылки на элементы страницы
const toggleSwitch = document.querySelector('.darkmode');
const body = document.querySelector('body');

// Функция, которая переключает тему
function toggleTheme() {
  // Проверяем, включена ли темная тема
  const isDarkMode = body.classList.contains('dark-mode');
  
  // Если включена, то отключаем темную тему
  if (isDarkMode) {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  } else { // Если выключена, то включаем темную тему
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
}

// Обработчик клика по переключателю
toggleSwitch.addEventListener('click', toggleTheme);


document.querySelector('.menubtn1').onclick = function() {
  document.querySelector('.mobstylelinks').classList.toggle('clicks');
};


document.querySelector('.darkbtn').onclick = function() {
  document.querySelector('.darkbtn').classList.toggle('activated');
};