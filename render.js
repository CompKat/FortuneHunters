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
    $("#lemonade_value").text("$"+(game.getLemonade()));
    $("#hotdog_value").text("$"+(game.getHotdog()*5));
    $("#burger_value").text("$"+(game.getBurger()*15));
    $("#toy_value").text("$"+(game.getToy()*50));
    $("#tech_value").text("$"+(game.getTech()*200));
    $("#car_value").text("$"+(game.getCar()*1000));

    $("#buy_lemonade").text("Buy Lemonade - $"+(game.getLemonade()*3+1));
    $("#buy_hotdog").text("Buy Hotdog - $"+(game.getHotdog()*7+15));
    $("#buy_burger").text("Buy Burger - $"+(game.getBurger()*20+120));
    $("#buy_toy").text("Buy Toy - $"+(game.getToy()*100+400));
    $("#buy_tech").text("Buy Tech - $"+(game.getTech()*1000+2000));
    $("#buy_car").text("Buy Car - $"+(game.getCar()*4000+20000));
}

class Game {
    constructor(logged_in, money, lemonade, hotdog, burger, toy, tech, car) {
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
        console.log("Setting up lemonade bar");
        setInterval(() => {
            let value = Number($(`#lemonade_bar`).attr("value"));
            if(value <= 100) {
                $(`#lemonade_bar`).attr("value", value+0.1);
            } else {
                $(`#lemonade_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getLemonade());
            }
        },5);
    }

    if(game.getHotdog() !== 0 && !game.hotdog_active) {
        game.hotdog_active = true;
        console.log("Setting up hotdog bar");
        setInterval(() => {
            let value = Number($(`#hotdog_bar`).attr("value"));
            if(value <= 100) {
                $(`#hotdog_bar`).attr("value", value+0.1);
            } else {
                $(`#hotdog_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getHotdog()*5);
            }
        },10);
    }

    if(game.getBurger() !== 0 && !game.burger_active) {
        game.burger_active = true;
        console.log("Setting up burger bar");
        setInterval(() => {
            let value = Number($(`#burger_bar`).attr("value"));
            if(value <= 100) {
                $(`#burger_bar`).attr("value", value+0.1);
            } else {
                $(`#burger_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getBurger()*15);
            }
        },20);
    }

    if(game.getToy() !== 0 && !game.toy_active) {
        game.toy_active = true;
        console.log("Setting up toy bar");
        setInterval(() => {
            let value = Number($(`#toy_bar`).attr("value"));
            if(value <= 100) {
                $(`#toy_bar`).attr("value", value+0.1);
            } else {
                $(`#toy_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getToy()*50);
            }
        },40);
    }

    if(game.getTech() !== 0 && !game.tech_active) {
        game.tech_active = true;
        console.log("Setting up tech bar");
        setInterval(() => {
            let value = Number($(`#tech_bar`).attr("value"));
            if(value <= 100) {
                $(`#tech_bar`).attr("value", value+0.05);
            } else {
                $(`#tech_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getTech()*200);
            }
        },40);
    }

    if(game.getCar() !== 0 && !game.car_active) {
        game.car_active = true;
        console.log("Setting up car bar");
        setInterval(() => {
            let value = Number($(`#car_bar`).attr("value"));
            if(value <= 100) {
                $(`#car_bar`).attr("value", value+0.025);
            } else {
                $(`#car_bar`).attr("value", 0);
                game.setMoney(game.getMoney()+game.getCar()*1000);
            }
        },40);
    }
}


$(async function() {
    let game;
    if(document.getElementById("save")) {
        console.log("We are logged in.");
        let result = await $.ajax({
            method: "GET",
            url: 'includes/reload.inc.php',
            data: {
                uid: $("#money").attr("class")
            },
        });
        result = result.split("|");
        console.log(result);
        //game = new Game(true, Number($("#money").text().split("$")[1]), Number($("#lemonade_value").text().substr(1)), Number($("#hotdog_value").text().substr(1))/5, Number($("#burger_value").text().substr(1))/15, Number($("#toy_value").text().substr(1))/50, Number($("#tech_value").text().substr(1))/200, Number($("#car_value").text().substr(1))/1000);
        game = new Game(true, Number(result[0]), Number(result[1]), Number(result[2]), Number(result[3]), Number(result[4]), Number(result[5]), Number(result[6]));
        $("#loading").remove();
        runBars(game);
        update(game);
    } else {
        console.log("User is not logged in.");
        game = new Game(false, 1, 0, 0, 0, 0, 0, 0);
        $("#loading").remove();
        update(game);
        runBars(game);
    }

    $("#signup").on("click", function() {
        console.log("Opening Signup Form");
        createSignup();
    });
    $("#login").on('click', function() {
        console.log("Opening Login Form");
        createLogin();
    });
    $("#save").on("click", function() {
        console.log("Saving current progress.");
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
            success: function(html) {
                console.log("Progress has been saved.");
                console.log(html);
            }
        })
    });

    $("body").on("click", "button", function(e) {
        if(e.target.id.substr(0,3) == "buy" && game.getMoney() >= Number($(`#${e.target.id}`).text().split("$")[1])) {
            game.buyItem(e.target.id.split("_")[1]);
        }
    })
})

