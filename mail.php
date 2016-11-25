<?php

$recepient = "ilya_masterok@mail.ru, shishlachevilya@gmail.com";
$sitename = "туристический центр";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$msg = trim($_POST["message"]);
$message = "Имя: $name\n Телефон: $phone \nСообщение: $msg";

$pagetitle = "Сообщение с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>