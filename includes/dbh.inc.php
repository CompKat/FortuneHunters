<?php

$serverName = "pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
$dBUsername = "bzfvgoo3wymopdpx";
$dBPassword = "x3hdio87e7mjc8o5";
$dBName = "aeitaq9wuhrzbkwn";

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

if(!$conn) {
    die("Connection Failed: " . mysqli_connect_error());

}
?>