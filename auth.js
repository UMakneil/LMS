// Функция для проверки учетных данных пользователя
function authenticateUser() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
  
    // Создание и настройка AJAX-запроса
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'auth.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Обработка ответа от сервера
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.success) {
            alert('Авторизация прошла успешно!');
            // Перенаправление на другую страницу
            window.location.href = 'binotel.ua';
          } else {
            alert('Неверная почта или пароль!');
          }
        } else {
          alert('Ошибка при обращении к серверу.');
        }
      }
    };
  
    // Отправка данных на сервер
    const data = 'email=' + encodeURIComponent(emailInput) + '&password=' + encodeURIComponent(passwordInput);
    xhr.send(data);
  }
  
  // Привязка функции к событию нажатия кнопки
  const loginButton = document.getElementById('btnauth');
  loginButton.addEventListener('click', authenticateUser);
  