<?php
// Получение данных POST-запроса
$email = $_POST['email'];
$password = $_POST['password'];

// Здесь можно выполнить проверку логина и пароля в базе данных или других методах аутентификации
// В данном примере используется простой массив пользователей для демонстрации

// Объект, хранящий данные пользователей
$users = array(
    array('email' => 'unis@binotel.com', 'password' => 'Unis1927'),
    array('email' => 'user2@example.com', 'password' => 'password2'),
    array('email' => 'user3@example.com', 'password' => 'password3')
);

// Поиск пользователя в массиве
$userFound = false;
foreach ($users as $user) {
    if ($user['email'] === $email && $user['password'] === $password) {
        $userFound = true;
        break;
    }
}

// Формирование и отправка ответа в формате JSON
$response = array('success' => $userFound);
echo json_encode($response);
?>
