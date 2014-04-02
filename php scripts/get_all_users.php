<?php

$tableName ="Users";

$Col1Name="UserId";
$Col2Name= "Username";
$Col3Name="Password";
$Col4Name="FirstName";
$Col5Name="Lastname";
$Col6Name="Age";
$Col7Name="Address";
$Col8Name="City";
$Col9Name="Prov";
$Col10Name="Postal";
$Col11Name="Phone";
/*
$UserIdColName="UserId";
$UsernameColName= "Username";
$PasswordColName="Password";
$FirstNameColName="FirstName";
$LastnameColName="Lastname";
$AgeColName="Age";
$AddressColName="Address";
$CityColName="City";
$ProvColName="Prov";
$PostalColName="Postal";
$PhoneColName="Phone";

$Items["$UserIdColName"] = $row["$UserIdColName"];
$Items["$UsernameColName"] = $row["$UsernameColName"];
$Items["$PasswordColName"] = $row["$PasswordColName"];
$Items["$FirstNameColName"] = $row["$FirstNameColName"];
$Items["$LastnameColName"] = $row["$LastnameColName"];
$Items["$AgeColName"] = $row["$AgeColName"];
$Items["$AddressColName"] = $row["$AddressColName"];		
$Items["$CityColName"] = $row["$CityColName"];
$Items["$ProvColName"] = $row["$ProvColName"];
$Items["$PostalColName"] = $row["$PostalColName"];
$Items["$PhoneColName"] = $row["$PhoneColName"];

*/


    	// array for JSON response
$response = array();

		// include db connect class
require_once __DIR__ . '/dbconnect.php';
		// connecting to db
$db = new DB_CONNECT();

		// get all Items from Items table
$result = mysql_query("SELECT *FROM $tableName") or die(mysql_error());

		// check for empty result
if (mysql_num_rows($result) > 0) {
    		// looping through all results
    		// Items node
	$response["Items"] = array();

	while ($row = mysql_fetch_array($result)) {
      			 // temp user array
		$Items = array();
		$Items["$Col1Name"] = $row["$Col1Name"];
		$Items["$Col2Name"] = $row["$Col2Name"];
		$Items["$Col3Name"] = $row["$Col3Name"];
		$Items["$Col4Name"] = $row["$Col4Name"];
		$Items["$Col5Name"] = $row["$Col5Name"];
		$Items["$Col6Name"] = $row["$Col6Name"];
		$Items["$Col7Name"] = $row["$Col7Name"];
		$Items["$Col8Name"] = $row["$Col8Name"];
		$Items["$Col9Name"] = $row["$Col9Name"];
		$Items["$Col10Name"] = $row["$Col10Name"];
		$Items["$Col11Name"] = $row["$Col11Name"];

        // push single item into final response array
		array_push($response["Items"], $Items);
	}
    // success
	$response["success"] = 1;

    // echoing JSON response
	echo json_encode($response);
} else {
    // no Items found
	$response["success"] = 0;
	$response["message"] = "No Items found";

    // echo no users JSON
	echo json_encode($response);
}

?>