<?php

$serverName = "pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
$dBUsername = "bzfvgoo3wymopdpx";
$dBPassword = "x3hdio87e7mjc8o5";
$dBName = "aeitaq9wuhrzbkwn";

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

if(!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

require_once "./functions.inc.php";

echo uidExists($conn, $_GET["uid"], $_GET["uid"])["usersMoney"]."|";
echo uidExists($conn, $_GET["uid"], $_GET["uid"])["usersLemonade"]."|";
echo uidExists($conn, $_GET["uid"], $_GET["uid"])["usersHotdog"]."|";
echo uidExists($conn, $_GET["uid"], $_GET["uid"])["usersBurger"]."|";
echo uidExists($conn, $_GET["uid"], $_GET["uid"])["usersToy"]."|";
echo uidExists($conn, $_GET["uid"], $_GET["uid"])["usersTech"]."|";
echo uidExists($conn, $_GET["uid"], $_GET["uid"])["usersCar"];