<?php

if(isset($_POST["submit"])) {
    $uid = $_POST["uid"];
    $pwd = $_POST["pwd"];

    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    if(emptyInputLogin($uid, $pwd) !== false) {
        header("location: ../index.php?error=emptyinput");
        exit();
    }

    loginUser($conn, $uid, $pwd);
    header("location: ../index.php?");
    exit();
        
} else {
    header("location: ../index.php");
    exit();
}