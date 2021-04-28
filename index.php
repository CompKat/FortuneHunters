<?php
    session_set_cookie_params(0);
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
       
        <title>Fortune Hunters</title>

    </head>

    <body>
        <br>
        <div class="container is-fluid">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <p class="title is-1">Fortune Hunters Test</p>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <?php
                            if(isset($_SESSION["useruid"])) {
                                $id = $_SESSION["useruid"];
                                $money = $_SESSION["money"];
                                $lemonade = $_SESSION["lemonade"];
                                $hotdog = $_SESSION["hotdog"];
                                $burger = $_SESSION["burger"];
                                $toy = $_SESSION["toy"];
                                $tech = $_SESSION["tech"];
                                $car = $_SESSION["car"];
                                echo "<p id='money' class='${id}'>Logged in as ${id} with $${money}</p>";
                                echo '<a id="save" class="button is-primary"><strong>Save</strong></a>';
                            } else {
                                $money = 1;
                                $lemonade = 0;
                                $hotdog = 0;
                                $burger = 0;
                                $toy = 0;
                                $tech = 0;
                                $car = 0;
                                echo "<p id='money'>You currently have - $${money}</p>";
                                echo '<div class="buttons">';
                                echo '<a id="signup" class="button is-primary"><strong>Sign up</strong></a>';
                                echo '<a id="login" class="button is-light">Log in</a>';
                                echo '</div>';
                            }
                        ?>
                        <button id="music" class="button is-link" data-playing="false" role="switch" aria-checked="false"><span>Play/Pause</span></button>
                        <button id="weather" class="button is-link"><span>Keep Busy</span></button>
                    </div>
                </div>
            </nav><br><br>

            <div class="columns" style="text-align: center;">
                <div id="left-column" class="column is-half">
                    <div class="lemonade">
                        <p class="title is-2">Lemonade Stand</p>
                        <div class="bar">
                            <progress id="lemonade_bar" class="progress is-large is-success" value="0" max="100" style="width: 50%; margin:auto;"></progress><p id="lemonade_value" class="subtitle is-3"><?php echo"$${lemonade}";?></p>
                        </div><br><br>
                        <?php
                            $lemonade_price = ($lemonade)*3 + 1;
                            echo "<button id='buy_lemonade' class='button is-success is-large is-rounded'>Buy Lemonade - $${lemonade_price}</button>";
                        ?>
                        <br><br><br><br><br><br><br><br>
                    </div>
                    <div class="hotdog">
                        <p class="title is-2">Hotdog Stand</p>
                        <div class="bar">
                            <progress id="hotdog_bar" class="progress is-large is-success" value="0" max="100" style="width: 50%; margin:auto;"></progress><p id="hotdog_value" class="subtitle is-3"><?php $hotdog_val = $hotdog*5; echo"$${hotdog_val}";?></p>
                        </div><br><br>
                        <?php
                            $hotdog_price = ($hotdog)*7 + 15;
                            echo "<button id='buy_hotdog' class='button is-success is-large is-rounded'>Buy Hotdog - $${hotdog_price}</button>";
                        ?>
                        <br><br><br><br><br><br><br><br>
                    </div>
                    <div class="burger">
                        <p class="title is-2">Burger Truck</p>
                        <div class="bar">
                            <progress id="burger_bar" class="progress is-large is-success" value="0" max="100" style="width: 50%; margin:auto;"></progress><p id="burger_value" class="subtitle is-3"><?php $burger_val = $burger*15; echo"$${burger_val}";?></p>
                        </div><br><br>
                        <?php
                            $burger_price = ($burger)*20 + 120;
                            echo "<button id='buy_burger' class='button is-success is-large is-rounded'>Buy Burger - $${burger_price}</button>";
                        ?>
                        <br><br><br><br><br><br><br><br>
                    </div>
                </div>
                <div id="right-column" class="column is-half">
                <div class="toy">
                        <p class="title is-2">Toy Store</p>
                        <div class="bar">
                            <progress id="toy_bar" class="progress is-large is-success" value="0" max="100" style="width: 50%; margin:auto;"></progress><p id="toy_value" class="subtitle is-3"><?php $toy_val = $toy*50; echo"$${toy_val}";?></p>
                        </div><br><br>
                        <?php
                            //EDIT ALL FOLLOWING PRICE VALUES
                            $toy_price = ($toy)*100 + 400;
                            echo "<button id='buy_toy' class='button is-success is-large is-rounded'>Buy Toy - $${toy_price}</button>";
                        ?>
                        <br><br><br><br><br><br><br><br>
                    </div>
                    <div class="tech">
                        <p class="title is-2">Tech Stand</p>
                        <div class="bar">
                            <progress id="tech_bar" class="progress is-large is-success" value="0" max="100" style="width: 50%; margin:auto;"></progress><p id="tech_value" class="subtitle is-3"><?php $tech_val = $tech*200; echo"$${tech_val}";?></p>
                        </div><br><br>
                        <?php
                            $tech_price = ($tech)*1000 + 2000;
                            echo "<button id='buy_tech' class='button is-success is-large is-rounded'>Buy tech - $${tech_price}</button>";
                        ?>
                        <br><br><br><br><br><br><br><br>
                    </div>
                    <div class="car">
                        <p class="title is-2">Car Dealership</p>
                        <div class="bar">
                            <progress id="car_bar" class="progress is-large is-success" value="0" max="100" style="width: 50%; margin:auto;"></progress><p id="car_value" class="subtitle is-3"><?php $car_val = $car*1000; echo"$${car_val}";?></p>
                        </div><br><br>
                        <?php
                            $car_price = ($car)*4000 + 20000;
                            echo "<button id='buy_car' class='button is-success is-large is-rounded'>Buy car - $${car_price}</button>";
                        ?>
                        <br><br>
                    </div>
                </div>
            </div>
        </div>

        <?php 
            if(isset($_GET["error"])) {
                if($_GET["error"] == "emptyinput") {
                    echo '<script>alert("Not all fields were filled in")</script>';
                } else if($_GET["error"] == "invalidemail") {
                    echo '<script>alert("Please use a valid email address")</script>';
                } else if($_GET["error"] == "invaliduid") {
                    echo '<script>alert("Make sure your username contains allowed values! (a-z, A-Z, 0-9)")</script>';
                } else if($_GET["error"] == "invalidpassword") {
                    echo '<script>alert("Passwords did not match")</script>';
                } else if($_GET["error"] == "usernametaken") {
                    echo '<script>alert("This username was already taken")</script>';
                } else if($_GET["error"] == "wronglogin") {
                    echo '<script>alert("Either the Username or Password was incorrect")</script>';
                } else if($_GET["error"] == "stmtfailed") {
                    echo '<script>alert("Something went wrong, please try again!")</script>';
                } else if($_GET["error"] == "none") {
                    echo '<script>alert("You have successfully signed up! You may now log in to begin your journey!")</script>';
                }
            }
        ?>

        <!-- Include links to JavaScript files below -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="render.js"></script>
        <script src="audio.js"></script>
        <script src="weather.js"></script>
        <audio class="soundtrack" src="bensound-sunny.mp3" type="audio/mpeg"></audio>
        

    </body>
</html>

