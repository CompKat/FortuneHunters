//key: AIzaSyBBoudYDgrfn1AObCSYdzHBVK6mfMkCRgo

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
        input.on('input', async function(e) {
            let data = await $.ajax({
                method: 'GET',
                url: 'US-Cities.json',
                dataType: 'json'
            });
            let top_results = [];
            for (v in data) {
                if(data[v].find(el => el.substr(0,$("#city-name").val().length).toLowerCase() === $("#city-name").val().toLowerCase()) && top_results.length < 4) {
                    top_results[top_results.length] = data[v].find(el => el.substr(0,$("#city-name").val().length).toLowerCase() === $("#city-name").val().toLowerCase());
                }
            }
            if($("#city-name").val().length == 0) {
                top_results = [];
            }
            for(let i = 0; i < top_results.length; i++) {
                for(let j = i+1; j < top_results.length; j++) {
                    if(top_results[i] == top_results[j]) {
                        top_results.splice(j,1);
                    }
                }
            }
            if(top_results.length > 0) {
                let container = $('<div id="autocomplete" class="dropdown is-active" style="width:100%;"></div>');
                let content = $('<div class="dropdown-content" style="width:100%;"></div>');
                for(let i = 0; i < top_results.length; i++) {
                    let item = $(`<a class="dropdown-item">${top_results[i]}</a>`);
                    item.on('click', function(e) {
                        $("#city-name").val(item.text());
                        $(".box").find($("#autocomplete")).remove();
                    })
                    content.append(item);
                }
                container.append(content);
                if($(".box").find($("#autocomplete"))) {
                    $("#autocomplete").remove();
                }
                container.insertAfter($("#city-name"));
            }
        })

        let close = $('<button class="modal-close is-large" aria-label="close"></button>');
        close.on("click", function(e) {
            $("#weather-mod").remove();
        });

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
        console.log("Searching for weather in "+$("#city-name").val());
    });
});