
<?php
header('Access-Control-Allow-Origin: *');  
if(isset($_POST['username']) and isset($_POST['password'])) {

 	// do logic for logining in (usually query your db)
	if ($_POST['username'] == 'test' && $_POST['password'] == 'test') {
		$response['success'] = true;
		$response['message'] = 'Login succesful';
	} else {
		$response['success'] = false;
		$response['message'] = 'Login failed';
	}
	// return json
	echo json_encode($response);
	unset($response["success"]);
	unset($response["message"]);


}
else{
	$response['success'] = false;
	$response['message'] = 'Login failed';
	echo json_encode($response);
	unset($response["success"]);
	unset($response["message"]);
}

?>
