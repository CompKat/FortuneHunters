<?php

$serverName = "pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
$dBUsername = "bzfvgoo3wymopdpx";
$dBPassword = "x3hdio87e7mjc8o5";
$dBName = "aeitaq9wuhrzbkwn";

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

if(!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

$sql = "SELECT usersUid, usersMoney FROM users ORDER BY usersMoney + 0 DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo $row["usersUid"]." - $".$row["usersMoney"]."|";
    }
  } else {
    echo "0 results";
  }
  $conn->close();

