<?php
header('Access-Control-Allow-Origin: *');

function updateInfo($username, $password, $firstname, $lastname, $age, $address, $city, $prov, $postal, $phone){
	require_once __DIR__ . '/dbconnect.php';
	$db = new DB_CONNECT();
	$sql= "UPDATE Users SET Password = '$password', FirstName = '$firstname', Lastname = '$lastname', Age = $age, Address = '$address', City = '$city', Prov = '$prov', Postal = '$postal', Phone = '$phone' WHERE Username = '$username';";
	$result = mysql_query( $sql);
	if(!$retval){
		die('Could not update data: ' . mysql_error());
	}else {
		echo "Updated data successfully ";
		mysql_close($db);
	}
}





if(isset($_POST['Username']) or isset($_POST['Password']) or isset($_POST['FirstName'] ) or isset($_POST['Lastname'] ) or isset($_POST['Age'] ) or isset($_POST['Address'] ) or isset($_POST['City'] ) or isset($_POST['Prov'] ) or isset($_POST['Postal'] ) or isset($_POST['Phone'])){

	$username=$_POST['Username'];
	$password=$_POST['Password'];
	$firstName=$_POST['FirstName'];
	$lastname=$_POST['Lastname'];
	$age=$_POST['Age'];
	$city=$_POST['City'];
	$prov=$_POST['Prov'];
	$postal=$_POST['Postal'];
	$phone=$_POST['Phone'];
 	updateInfo($username, $password, $firstname, $lastname, $age, $addres, $city, $prov, $postal, $phone);

}
else{
	$response['success'] = 0;
	$response['message'] = 'Error';
	echo json_encode($response);
	unset($response["success"]);
	unset($response["message"]);
}

?>