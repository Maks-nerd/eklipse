<?php

// var_dump($_POST);
// if ( strlen($_POST["g-recaptcha-response"]) == 0 ) exit('0');

// if(isset($_POST["name"]) && $_POST['name'] != ""){
	if ( strlen($_POST["g-recaptcha-response"]) == 0 ) exit('0');

$name = isset($_POST["name"]) 	? '<br><b>Имя:</b> '.$_POST["name"] : null;
$phone = isset($_POST["phone"]) ? '<br><b>Телефон:</b> '.$_POST["phone"] : null;
$email = isset($_POST["email"]) ? '<br><b>Почта:</b> '.$_POST["email"] : null;
$subject = isset($_POST["subject"]) ? '<br><b>Сообщения:</b> '.$_POST["subject"] : null;
// }
// else{
$selimg = isset($_POST["selimg"]) ? '<br><b>Услуга за счет отеля:</b> '.$_POST["selimg"] : null;
$datepicker = isset($_POST["datepicker"]) ? '<br><b>Заезд:</b> '.$_POST["datepicker"] : null;
$datepicker2 = isset($_POST["datepicker2"]) ? '<br><b>Выезд:</b> '.$_POST["datepicker2"] : null;
$quantity = isset($_POST["quantity"]) ? '<br><b>Количество мест:</b> '.$_POST["quantity"] : null;
// }

//if ($phone) $adminemail = "artur@planetatalantov.ru";
$adminemail = "v.sinitsyn87@gmail.com";


$subject_mail = "Заявка"; $content ="";


if ($name || $quantity) {
	
	if ($name)
		$content .= $name;
	if ($phone)
		$content .= $phone;
	if ($email)
		$content .= $email;
	if ($subject)
		$content .= $subject;

	if ($selimg)
		$content .= $selimg;
	if ($datepicker)
		$content .= $datepicker;
	if ($datepicker2)
		$content .= $datepicker2;
	if ($quantity)
		$content .= $quantity;
	
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	if (mail($adminemail, $subject_mail, $content, $headers))
		echo 'Спасибо за заявку!';
	else
		echo 'Ошибка';
} else echo 'Form not require';


?>
