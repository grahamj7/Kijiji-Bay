<?php

$tableName ="Images";

$ItemIDColName= "ItemId";
$ImageColName="Image";

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
        $Items["$ItemIDColName"] = $row["$ItemIDColName"];
        $Items["$ImageColName"] = $row["$ImageColName"];

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