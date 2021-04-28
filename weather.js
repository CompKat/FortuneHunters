//key: 4ec2a62ee6c30ca3381ca82264b33030

let getData = async function(city) {
    let result = await $.ajax({
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ec2a62ee6c30ca3381ca82264b33030`//,
        //dataType: 'json'
    });
    return result;
}

$(function() {
    $("#weather").on("click", async function(){
        let modal = $('<div id="weather-mod" class="modal is-active"><div id="weather-background" class="modal-background"></div></div>');
        
        let content = $('<div class="modal-content" style="background-color:white;"></div>');
        let box = $('<div class="box"></div>');
        let input = $('<input id="city-name" class="input is-medium" type="text" placeholder="City Name..."><button id="search" class="button is-success">Search</button>');

        let close = $('<button class="modal-close is-large" aria-label="close"></button>');

        box.append($('<span class="subtitle is-4">Enter the name of a city to find the current weather!</span>'));
        box.append(input);
        content.append(box);
        modal.append(content);
        modal.append(close);
        $("body").append(modal);
        
    });

    $(document).on("click", "#weather-background", function() {
        $("body").find($("#weather-mod")).remove();
    });

    $(document).on("click", "#search", function(e){
        //Add code for creating weather information.
    });
});