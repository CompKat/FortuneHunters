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
        <link rel="stylesheet" href="loading.css">
        <link rel="stylesheet" href="switch.css">
        <script src="https://kit.fontawesome.com/d03f11bef0.js" crossorigin="anonymous"></script>
       
        <title>Fortune Hunters</title>

    </head>

    <style>
        body, nav {
            background-image: url('images/background.jpg');
            background-repeat: repeat-y;
            background-attachment: fixed;
            background-size: cover;
            height: 100%;
        }
    </style>

    <body>
        <br>
        <div class="container is-fluid">
            <nav class="navbar" role="navigation" aria-label="main navigation" style="position:sticky; top:0;">
                <div class="navbar-brand">
                    <p class="title is-1">Fortune Hunters</p>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <?php
                            if(isset($_SESSION["useruid"])) {
                                $id = $_SESSION["useruid"];
                                $money = 0;
                                $lemonade = 0;
                                $hotdog = 0;
                                $burger = 0;
                                $toy = 0;
                                $tech = 0;
                                $car = 0;
                                echo "<i class='fas fa-user-circle' style='font-size:xx-large;'></i><p id='money' class='${id}' style='margin:5px;'> ${id} $${money}</p>";
                                echo '<a id="save" class="button is-primary" style="margin:5px;"><strong>Save</strong></a>';
                            } else {
                                $money = 1;
                                $lemonade = 0;
                                $hotdog = 0;
                                $burger = 0;
                                $toy = 0;
                                $tech = 0;
                                $car = 0;
                                echo "<p id='money'>You currently have - $${money}</p>";
                                //echo '<div class="buttons">';
                                echo '<a id="signup" class="button is-primary" style="margin:5px;"><strong>Sign up</strong></a>';
                                echo '<a id="login" class="button is-light">Log in</a>';
                                //echo '</div>';
                            }
                        ?>
                        <button id="weather" class="button is-link" style="margin:5px;"><span>Keep Busy</span></button>
                        <button id="news" class="button is-link" style=""><span>View News, earn $10 (once every 5min)</span></button>
                        <?php
                            if(isset($_SESSION["useruid"])) {
                                echo "<button id='leaderboard' class='button is-success' style='margin:5px;'>Leaderboard</button>";
                            }
                        ?>
                        <a id="music" class="" data-playing="false" role="switch" aria-checked="false" style="background-color: rgba(0,0,0,0); border-width: 0px; margin:10px;">
                            <img id="music-img" src="images/play.png">
                        </a>
                    </div>
                </div>
            </nav>
            <section class="hero is-small is-danger" style="text-align:center;">
                <div id="bonus" hidden class="hero-body" style="height:4vh; padding:1vh 0 0 0;">
                    <p class="subtitle is-4">Bonus time is active! Earn double money!</p>
                </div>
            </section>
            <br><br>
            <div class="columns" style="text-align: center;">
                <div id="left-column" class="column is-half">
                    <div class="lemonade">
                        <p class="title is-2">Lemonade Stand <img src="images/lemonade.png" alt="" style="width:5vh; height:5vh; margin-left:5px;"></p>
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
                        <p class="title is-2">Hotdog Stand <img src="images/hotdog.png" alt="" style="width:5vh; height:5vh; margin-left:5px;"></p>
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
                        <p class="title is-2">Burger Truck <img src="images/burger.png" alt="" style="position:relative; width:5vh; height:5vh; margin-left:5px; top:1vh;"></p>
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
                        <p class="title is-2">Toy Store <img src="images/toys.png" alt="" style="width:5vh; height:5vh; margin-left:5px;"></p>
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
                        <p class="title is-2">Tech Stand <img src="images/tech.png" alt="" style="width:5vh; height:5vh; margin-left:5px;"></p>
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
                        <p class="title is-2">Car Dealership <img src="images/car.png" alt="" style="width:5vh; height:5vh; margin-left:5px;"></p>
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
            <div style="position:fixed; bottom:0; margin-left:85%;">
                <label class="switch">
                <input class="dark" type="checkbox">
                <span class="slider round"></span>
                </label><p class="subtitle is-3">Dark mode</p>
            </div>
        </div>

        <div id="loading" class="modal is-active" style="background-color: rgba(240,240,240,1); text-align:center;">
            <div class="modal-content" style="overflow:hidden;">
                <div class="loader"></div><br><br>
                <p>If this does not go away within 10 seconds, refresh the page!</p>
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
        <script src="news.js"></script>
        <audio class="soundtrack" src="bensound-sunny.mp3" type="audio/mpeg"></audio>
        

    </body>
</html>

