<?php

if(isset($_POST["submit"])) {

    $uid = $_POST["uid"];
    $email = $_POST["email"];
    $pwd = $_POST["pwd"];
    $pwdrepeat = $_POST["pwdrepeat"];
    $money = 5;
    $lemonade = 1;
    $hotdog = 0;
    $burger = 0;
    $toy = 0;
    $tech = 0;
    $car = 0;

    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    if(emptyInputSignup($uid, $email, $pwd, $pwdrepeat) !== false) {
        header("location: ../index.php?error=emptyinput");
        exit();
    } else if(invalidUid($uid) !== false) {
        header("location: ../index.php?error=invaliduid");
        exit();
    } else if(invalidEmail($email) !== false) {
        header("location: ../index.php?error=invalidemail");
        exit();
    } else if(pwdMatch($pwd, $pwdrepeat) !== false) {
        header("location: ../index.php?error=invalidpassword");
        exit();
    } else if(uidExists($conn, $uid, $email) !== false) {
        header("location: ../index.php?error=usernametaken");
        exit();
    }

    createUser($conn, $uid, $email, $pwd, $money, $lemonade, $hotdog, $burger, $toy, $tech, $car);

} else {
    header("location: ../index.php");
    exit();
}