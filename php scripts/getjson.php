<?php
$mysql_db_hostname = "edjo.usask.ca";
$mysql_db_user = "cmpt350_jd";
$mysql_db_password = "7jksf72834jk";
$mysql_db_database = "cmpt350_jd";

&nbsp;

$con = @mysqli_connect($mysql_db_hostname, $mysql_db_user, $mysql_db_password,
 $mysql_db_database);

if (!$con) {
 trigger_error('Could not connect to MySQL: ' . mysqli_connect_error());
}
$var = array();
 $sql = "SELECT * FROM users";
$result = mysqli_query($con, $sql);

while($obj = mysqli_fetch_object($result)) {
$var[] = $obj;
}
echo '{"users":'.json_encode($var).'}';
?>
