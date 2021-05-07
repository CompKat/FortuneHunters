let createSignup = function() {
    let container = $(".container");

    let signup_form = $(`<div class="modal is-active" ></div>`);
    let content = $('<div class="modal-content"></div>');
    let form = $('<form action="includes/signup.inc.php" method="post" style="background-color: rgb(255,255,255)"></form>');
    form.append('<div class="field"><label class="label">Username</label><div class="control"><input class="input" type="text" name="uid" placeholder="Username..."></div></div>');
    form.append('<div class="field"><label class="label">Email</label><div class="control"><input class="input" type="text" name="email" placeholder="Email..."></div></div>');
    form.append('<div class="field"><label class="label">Password</label><div class="control"><input class="input" type="password" name="pwd" placeholder="Password..."></div></div>');
    form.append('<div class="field"><label class="label">Repeat Password</label><div class="control"><input class="input" type="password" name="pwdrepeat" placeholder="Repeat Password..."></div></div>');
    

    let finish = $('<footer class="modal-card-footer" style="text-align:center;"></footer>');
    let submit = $('<button type="submit" name="submit" class="button is-success">Sign Up</button>');
    let cancel = $('<button class="button">Cancel</button>');
    cancel.on('click', function() {
        signup_form.remove();
    })
    finish.append(submit);
    finish.append(cancel);
    form.append(finish);
    content.append(form);

    signup_form.append('<div class="modal-background"></div>');
    signup_form.append(content);

    container.append(signup_form);
}

let createLogin = function() {
    let container = $(".container");

    let login_form = $(`<div class="modal is-active" ></div>`);
    let content = $('<div class="modal-content"></div>');
    let form = $('<form action="includes/login.inc.php" method="post" style="background-color: rgb(255,255,255)"></form>');
    form.append('<div class="field"><label class="label">Username/Email</label><div class="control"><input class="input" type="text" name="uid" placeholder="Username or Email"></div></div>');
    form.append('<div class="field"><label class="label">Password</label><div class="control"><input class="input" type="password" name="pwd" placeholder="Password..."></div></div>');
    

    let finish = $('<footer class="modal-card-footer" style="text-align:center;"></footer>');
    let submit = $('<button type="submit" name="submit" class="button is-success">Login</button>');
    let cancel = $('<button class="button">Cancel</button>');
    cancel.on('click', function() {
        login_form.remove();
    })
    finish.append(submit);
    finish.append(cancel);
    form.append(finish);
    content.append(form);

    login_form.append('<div class="modal-background"></div>');
    login_form.append(content);

    container.append(login_form);
}

let update = function(game) {
    $("#money").text(""+$("#money").text().split("$")[0]+"$"+game.money);
    $("#lemonade_value").text("$"+(game.getLemonade()*game.multipler));
    $("#hotdog_value").text("$"+(game.getHotdog()*5*game.multipler));
    $("#burger_value").text("$"+(game.getBurger()*15*game.multipler));
    $("#toy_value").text("$"+(game.getToy()*50*game.multipler));
    $("#tech_value").text("$"+(game.getTech()*200*game.multipler));
    $("#car_value").text("$"+(game.getCar()*1000*game.multipler));

    $("#buy_lemonade").text("Buy Lemonade - $"+(game.getLemonade()*3+1));
    $("#buy_hotdog").text("Buy Hotdog - $"+(game.getHotdog()*7+15));
    $("#buy_burger").text("Buy Burger - $"+(game.getBurger()*20+120));
    $("#buy_toy").text("Buy Toy - $"+(game.getToy()*100+400));
    $("#buy_tech").text("Buy Tech - $"+(game.getTech()*1000+2000));
    $("#buy_car").text("Buy Car - $"+(game.getCar()*4000+20000));
}

class Game {
    constructor(logged_in, money, lemonade, hotdog, burger, toy, tech, car, multiplier) {
        /*Lemonade-1
        * Hotdog-5
        * Burger-15
        * Toy-50
        * Tech-200
        * Car-1000
        */
        this.logged_in = logged_in;
        this.money = money;
        this.lemonade = lemonade;
        this.lemonade_active = false;
        this.hotdog = hotdog;
        this.hotdog_active = false;
        this.burger = burger;
        this.burger_active = false;
        this.toy = toy;
        this.toy_active = false;
        this.tech = tech;
        this.tech_active = false;
        this.car = car;
        this.car_active = false;
        this.multipler = multiplier;
    }
}

Game.prototype.getMoney = function() {
    return this.money;
}

Game.prototype.setMoney = function(val) {
    this.money = val;
    update(this);
}

Game.prototype.getLemonade = function() { return this.lemonade; }
Game.prototype.setLemonade = function(val) { 
    this.lemonade = val; 
    update(this);
}

Game.prototype.getHotdog = function() { return this.hotdog; }
Game.prototype.setHotdog = function(val) { 
    this.hotdog = val; 
    update(this);
}

Game.prototype.getBurger = function() { return this.burger; }
Game.prototype.setBurger = function(val) { 
    this.burger = val; 
    update(this);
}

Game.prototype.getToy = function() { return this.toy; }
Game.prototype.setToy = function(val) { 
    this.toy = val; 
    update(this);
}

Game.prototype.getTech = function() { return this.tech; }
Game.prototype.setTech = function(val) { 
    this.tech = val; 
    update(this);
}

Game.prototype.getCar = function() { return this.car; }
Game.prototype.setCar = function(val) { 
    this.car = val; 
    update(this);
}

Game.prototype.buyItem = function(name) {
    this.money -= Number($(`#buy_${name}`).text().split("$")[1]);
    this[name] += 1;
    if(this[name] === 1) {
        runBars(this);
    }
    update(this);
}


let runBars = function(game) {
    if(game.getLemonade() !== 0 && !game.lemonade_active) {
        game.lemonade_active = true;
        setInterval(() => {
            let value = Number($(`#lemonade_bar`).attr("value"));
            if(value <= 100) {
                $(`#lemonade_bar`).attr("value", value+0.1);
            } else {
                $(`#lemonade_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getLemonade()*game.multipler);
            }
        },5);
    }

    if(game.getHotdog() !== 0 && !game.hotdog_active) {
        game.hotdog_active = true;
        setInterval(() => {
            let value = Number($(`#hotdog_bar`).attr("value"));
            if(value <= 100) {
                $(`#hotdog_bar`).attr("value", value+0.1);
            } else {
                $(`#hotdog_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getHotdog()*5*game.multipler);
            }
        },10);
    }

    if(game.getBurger() !== 0 && !game.burger_active) {
        game.burger_active = true;
        setInterval(() => {
            let value = Number($(`#burger_bar`).attr("value"));
            if(value <= 100) {
                $(`#burger_bar`).attr("value", value+0.1);
            } else {
                $(`#burger_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getBurger()*15*game.multipler);
            }
        },20);
    }

    if(game.getToy() !== 0 && !game.toy_active) {
        game.toy_active = true;
        setInterval(() => {
            let value = Number($(`#toy_bar`).attr("value"));
            if(value <= 100) {
                $(`#toy_bar`).attr("value", value+0.1);
            } else {
                $(`#toy_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getToy()*50*game.multipler);
            }
        },40);
    }

    if(game.getTech() !== 0 && !game.tech_active) {
        game.tech_active = true;
        setInterval(() => {
            let value = Number($(`#tech_bar`).attr("value"));
            if(value <= 100) {
                $(`#tech_bar`).attr("value", value+0.05);
            } else {
                $(`#tech_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getTech()*200*game.multipler);
            }
        },40);
    }

    if(game.getCar() !== 0 && !game.car_active) {
        game.car_active = true;
        setInterval(() => {
            let value = Number($(`#car_bar`).attr("value"));
            if(value <= 100) {
                $(`#car_bar`).attr("value", value+0.025);
            } else {
                $(`#car_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getCar()*1000*game.multipler);
            }
        },40);
    }
}


$(async function() {
    let game;
    let news_debounce = false;
    if(document.getElementById("save")) {
        let result = await $.ajax({
            method: "GET",
            url: 'includes/reload.inc.php',
            data: {
                uid: $("#money").attr("class")
            },
        });
        result = result.split("|");
        //game = new Game(true, Number($("#money").text().split("$")[1]), Number($("#lemonade_value").text().substr(1)), Number($("#hotdog_value").text().substr(1))/5, Number($("#burger_value").text().substr(1))/15, Number($("#toy_value").text().substr(1))/50, Number($("#tech_value").text().substr(1))/200, Number($("#car_value").text().substr(1))/1000);
        game = new Game(true, Number(result[0]), Number(result[1]), Number(result[2]), Number(result[3]), Number(result[4]), Number(result[5]), Number(result[6]), 1);
        $("#loading").hide();
        runBars(game);
        update(game);
    } else {
        game = new Game(false, 1, 0, 0, 0, 0, 0, 0, 1);
        $("#loading").hide();
        update(game);
        runBars(game);
    }

    if(localStorage.getItem("dark") == "true") {
        $('body').css("background-image", 'url("images/dark-background.jpg")');
        $('nav').css("background-image", 'url("images/dark-background.jpg")');
        $('p').css("color", "white");
        $(".dark")[0].checked = true;
    } else if(localStorage.getItem("dark") == "false") {
        $('body').css("background-image", 'url("images/background.jpg")');
        $('nav').css("background-image", 'url("images/background.jpg")');
        $('p').css("color", "black");
        $(".dark")[0].checked = false;
    }

    setInterval(function() {
        game.multipler = 2;
        $("#bonus").attr("hidden", false);
        $("#lemonade_value").css("color", "red");
        $("#hotdog_value").css("color", "red");
        $("#burger_value").css("color", "red");
        $("#toy_value").css("color", "red");
        $("#tech_value").css("color", "red");
        $("#car_value").css("color", "red");
        update(game);
        setTimeout(function(){
            game.multipler = 1;
            $("#bonus").attr("hidden", true);
            $("#lemonade_value").css("color", "black");
            $("#hotdog_value").css("color", "black");
            $("#burger_value").css("color", "black");
            $("#toy_value").css("color", "black");
            $("#tech_value").css("color", "black");
            $("#car_value").css("color", "black");
            update(game);
        },60000);
    }, 360000);

    $("#signup").on("click", function() {
        createSignup();
    });
    $("#login").on('click', function() {
        createLogin();
    });
    $("#save").on("click", function() {
        $.ajax({
            method: "POST",
            url: "includes/save.inc.php",
            data: {
                user: $("#money").attr("class"),
                money: game.getMoney(),
                lemonade: game.getLemonade(),
                hotdog: game.getHotdog(),
                burger: game.getBurger(),
                toy: game.getToy(),
                tech: game.getTech(),
                car: game.getCar()
            },
        });
        let save = $('<section id="saved" class="hero is-small is-success" style="text-align:center;"><div class="hero-body" style="height:4vh; padding:1vh 0 0 0;"><p class="subtitle is-4">Progress has been saved!</p></div></section>');
        $('body').prepend(save);
        setTimeout(function() {
            $("#saved").remove();
        }, 1500)
    });

    $("body").on("click", "button", async function(e) {
        if(e.target.id.substr(0,3) == "buy" && game.getMoney() >= Number($(`#${e.target.id}`).text().split("$")[1])) {
            game.buyItem(e.target.id.split("_")[1]);
        } else if(e.target.id == "leaderboard") {
            $("#loading").show();
            let data = await $.ajax({
                "method": "GET",
                "url": "includes/leaderboard.inc.php"
            });
            let modal = $('<div id="leaderboard-mod" class="modal is-active"></div>');
            let background = $('<div id="leaderboard-background" class="modal-background"></div>');
            modal.append(background);
            background.on("click", function() {
                $("body").find("#leaderboard-mod").remove();
            });
            
            let content = $('<div class="modal-content" style="background-color:white;"></div>');
            let close = $('<button class="modal-close is-large" aria-label="close"></button>');
            close.on("click", function(e) {
                $("#leaderboard-mod").remove();
            });
            if(data == "0 results") {
                content.append('<p class="subtitle is-3">Something went wrong when grabbing the leaderboard data!</p>');
            } else {
                let data_array = data.split("|");
                data_array.pop();
                content.append(`<p class="subtitle is-2" style="text-align:center;"><b>Leaderboard</b></p><br>`);
                let max = data_array.length <= 10 ? data_array.length : 10;
                for(let i = 0; i < max; i++) {
                    content.append(`<p class="subtitle is-3"> ${i+1}. ${data_array[i]}</p><br>`);
                }
            }
            modal.append(content);
            modal.append(close);
            $('body').append(modal);
            $("#loading").hide();
        }
    });
    $("#news").on('click', function() {
        console.log("News clicked");
        if(!news_debounce) {
            news_debounce = true;
            game.setMoney(game.getMoney()+10);
            update(game);
            setTimeout(function() {
                news_debounce = false;
            }, 300000);
        }
    });

    $(".dark").on('change', function() {
        let dark = $(".dark");
        if(dark[0].checked == true) {
            $('body').css("background-image", 'url("images/dark-background.jpg")');
            $('nav').css("background-image", 'url("images/dark-background.jpg")');
            $('p').css("color", "white");
            localStorage.setItem("dark", "true");
        } else {
            $('body').css("background-image", 'url("images/background.jpg")');
            $('nav').css("background-image", 'url("images/background.jpg")');
            $('p').css("color", "black");
            localStorage.setItem("dark", "false");
        }
    })
})

