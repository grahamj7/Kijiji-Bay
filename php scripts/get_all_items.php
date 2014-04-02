<?php

$tableName ="Items";
$ItemIDColName= "ItemId";
$TitleColName="Title";
$DescriptionColName="Description";
$PriceColName="Price";
$MainCategoryColName="MainCategory";
$SubCategoryColName="SubCategory";
$UserIdColName="UserId";

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
        $Items["$TitleColName"] = $row["$TitleColName"];
        $Items["$DescriptionColName"] = $row["$DescriptionColName"];
        $Items["$PriceColName"] = $row["$PriceColName"];
        $Items["$MainCategoryColName"] = $row["$MainCategoryColName"];
        $Items["$SubCategoryColName"] = $row["$SubCategoryColName"];
        $Items["$UserIdColName"] = $row["$UserIdColName"];
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