//0h5zvyhog3v90t6zff5qhrmvp
$(function() {
    $("#news").on('click', async function() {
        let data;
        try {data = await $.ajax({
            // "async": true,
            // "crossDomain": true,
            // "url": "https://newscatcher.p.rapidapi.com/v1/search?q=World&lang=en",
            // "method": "GET",
            // "headers": {
            //     "x-rapidapi-key": "c5317d8f5bmsh5a32b0c17ea4149p191c8djsn76af2bbbf6a5",
            //     "x-rapidapi-host": "newscatcher.p.rapidapi.com"
            // } //Please dont steal key :c it is free to get your own
                "async": true,
                "crossDomain": true,
                "url": "http://api.datanews.io/v1/news?q=World&country=us&apiKey=0h5zvyhog3v90t6zff5qhrmvp",
                "method": "GET"
            });
        } catch {
            try {
                data = await $.ajax({
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
                content.append('<p class="subtitle is-3">There have been too many requests to the API or another issue occurred, please try again later!</p>');
                modal.append(content);
                modal.append(close);
                $('body').append(modal);
                return;
            }
        }
        let chosen = Math.round(Math.random() * 4);
        let article_data;
        let title_data;
        let author_data;
        let link_data;
        let description_data;
        let img_data;
        if(data['articles']) {
            article_data = data['articles'][chosen];
            title_data = article_data['title'];
            author_data = article_data['author'];
            link_data = article_data['link'];
            description_data = article_data['summary'];
        } else {
            article_data = data['hits'][chosen];
            title_data = article_data['title'];
            author_data = article_data['authors'][0];
            link_data = article_data['url'];
            description_data = article_data['description'];
            img_data = article_data["imageUrl"];
        }

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

        let title = $(`<strong class="subtitle is-3">${title_data}</strong>`);
        content.append(title);
        content.append($('<br>'));
        let author = $(`<p>Written by ${author_data || 'unknown'}</p>`);
        content.append(author);
        if(img_data !== null) {
            if(img_data.search(".mp3") == -1) {
                box.append(`<img src="${img_data}">`);
            }
        }
        box.append(`<p>${description_data}</p><br>`);
        box.append(`<small>Learn more about the story <a href="${link_data}">here</a>.</small>`);

        content.append(box);
        modal.append(content);
        modal.append(close);
        $('body').append(modal);
    });
})