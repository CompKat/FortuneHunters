//0h5zvyhog3v90t6zff5qhrmvp
$(function() {
    $("#news").on('click', async function() {
        let data;
        try {data = await $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "https://newscatcher.p.rapidapi.com/v1/search?q=World&lang=en",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c5317d8f5bmsh5a32b0c17ea4149p191c8djsn76af2bbbf6a5",
                "x-rapidapi-host": "newscatcher.p.rapidapi.com"
            } //Please dont steal key :c it is free to get your own
            });
        } catch {
            console.log("There was an error loading the news source");
            let modal = $('<div id="news-mod" class="modal is-active"></div>');
            let background = $('<div id="news-background" class="modal-background"></div>');
            modal.append(background);
            background.on("click", function() {
                $("body").find("#news-mod").remove();
            })
            
            let content = $('<div class="modal-content" style="background-color:white;"></div>');
            let close = $('<button class="modal-close is-large" aria-label="close"></button>');
            close.on("click", function(e) {
                $("#news-mod").remove();
            });
            content.append('<p class="subtitle is-3">There have been too many requests to the API, please try again later!</p>');
            modal.append(content);
            modal.append(close);
            $('body').append(modal);
            return;
        }
        console.log(data);
        let chosen = Math.round(Math.random() * 4);
        let article_data = data['articles'][chosen];
        console.log("Article #"+chosen);
        console.log(data['articles'][chosen]);

        let modal = $('<div id="news-mod" class="modal is-active"></div>');
        let background = $('<div id="news-background" class="modal-background"></div>');
        modal.append(background);
        background.on("click", function() {
            $("body").find("#news-mod").remove();
        })
        
        let content = $('<div class="modal-content" style="background-color:white;"></div>');
        let box = $('<div class="box"></div>');
        let close = $('<button class="modal-close is-large" aria-label="close"></button>');
        close.on("click", function(e) {
            $("#news-mod").remove();
        });

        let title = $(`<strong class="subtitle is-3">${article_data['title']}</strong>`);
        content.append(title);
        content.append($('<br>'));
        let author = $(`<p>Written by ${article_data['author'] || 'unknown'}</p>`);
        content.append(author);
        // if(article_data['imageUrl'] !== null) {
        //     if(article_data['imageUrl'].search(".mp3") == -1) {
        //         box.append(`<img src="${article_data['imageUrl']}">`);
        //     }
        // }
        box.append(`<p>${article_data['summary']}</p><br>`);
        box.append(`<small>Learn more about the story <a href="${article_data['link']}">here</a>.</small>`);

        content.append(box);
        modal.append(content);
        modal.append(close);
        $('body').append(modal);
    });
})