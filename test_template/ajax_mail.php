<?php
	$f_name = $_POST['first_name'];
	$l_name = $_POST['last_name'];
	$phone_no = $_POST['phone_number'];
	$em = $_POST['e_mail'];
	$ad = $_POST['add'];
	
	$to = "deepa.chouhan@himanshusofttech.com";
	$subject = "Charity Responsive Template";
	$msg="Hi Admin..<p>".$f_name.' '.$l_name." has sent a query. User's Phone No ".$phone_no." email id as ".$em."</p><p> and users address is : ".$ad."</p>";
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: <support@charity.com>' . "\r\n";

	echo mail($to,$subject,$msg,$headers);
?>