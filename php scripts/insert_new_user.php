<?php
header('Access-Control-Allow-Origin: *');

function insertUser($username, $password, $firstname, $lastname, $age, $address, $city, $prov, $postal, $phone){
	require_once __DIR__ . '/dbconnect.php';
	$db = new DB_CONNECT();
	$sql= "INSERT INTO Users (Username, Password, FirstName, Lastname, Age, Address, City, Prov, Postal, Phone) VALUES ('$username', '$password', '$firstname', '$lastname', $age, '$address', '$city', '$prov', '$postal', '$phone');";
	$result = mysql_query( $sql);
	if(! $retval )
	{
		die('Could not update data: ' . mysql_error());
	}else {
		echo "Updated data successfully ";
		mysql_close($db);
	}

}
echo"hello";
if(isset($_POST['Username']) and isset($_POST['Password']) or isset($_POST['FirstName'] ) or isset($_POST['Lastname'] ) or isset($_POST['Age'] ) or isset($_POST['Address'] ) or isset($_POST['City'] ) or isset($_POST['Prov'] ) or isset($_POST['Postal'] ) or isset($_POST['Phone'])){

	$username=$_POST['Username'];
	$password=$_POST['Password'];
	$firstName=$_POST['FirstName'];
	$lastname=$_POST['Lastname'];
	$age=$_POST['Age'];
	$city=$_POST['City'];
	$prov=$_POST['Prov'];
	$postal=$_POST['Postal'];
	$phone=$_POST['Phone'];
 	insertUser($username, $password, $firstname, $lastname, $age, $addres, $city, $prov, $postal, $phone);

}
else{
	$response['success'] = 0;
	$response['message'] = 'Error';
	echo json_encode($response);
	unset($response["success"]);
	unset($response["message"]);
}
?>