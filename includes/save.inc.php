<?php

if(isset($_POST["user"])) {
    $user = $_POST["user"];
    $money = $_POST["money"];
    $lemonade = $_POST["lemonade"];
    $hotdog = $_POST["hotdog"];
    $burger = $_POST["burger"];
    $toy = $_POST["toy"];
    $tech = $_POST["tech"];
    $car = $_POST["car"];

    $serverName = "pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
    $dBUsername = "bzfvgoo3wymopdpx";
    $dBPassword = "x3hdio87e7mjc8o5";
    $dBName = "aeitaq9wuhrzbkwn";

    $conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

    $sqlMoney = "UPDATE users SET usersMoney='${money}' WHERE usersUid='${user}'";
    
    if (mysqli_query($conn, $sqlMoney)) {
        echo "Money updated successfully\n";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }

    $sqlLemonade = "UPDATE users SET usersLemonade='${lemonade}' WHERE usersUid='${user}'";
    
    if (mysqli_query($conn, $sqlLemonade)) {
        echo "Lemonade updated successfully\n";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }

    $sqlHotdog = "UPDATE users SET usersHotdog='${hotdog}' WHERE usersUid='${user}'";
    
    if (mysqli_query($conn, $sqlHotdog)) {
        echo "Hotdog updated successfully\n";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }

    $sqlBurger = "UPDATE users SET usersBurger='${burger}' WHERE usersUid='${user}'";
    
    if (mysqli_query($conn, $sqlBurger)) {
        echo "Burger updated successfully\n";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }

    $sqlToy = "UPDATE users SET usersToy='${toy}' WHERE usersUid='${user}'";
    
    if (mysqli_query($conn, $sqlToy)) {
        echo "Toy updated successfully\n";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }

    $sqlTech = "UPDATE users SET usersTech='${tech}' WHERE usersUid='${user}'";
    
    if (mysqli_query($conn, $sqlTech)) {
        echo "Tech updated successfully\n";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }

    $sqlCar = "UPDATE users SET usersCar='${car}' WHERE usersUid='${user}'";
    
    if (mysqli_query($conn, $sqlCar)) {
        echo "Car updated successfully\n";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
      
    mysqli_close($conn);

}