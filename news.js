//45d77fbed41b1ddb861d987ad8d213c8
$(function() {
    $("#news").on('click', async function() {
        let data;
        try {data = await $.ajax({
            method: "GET",
            url: "http://api.mediastack.com/v1/news?access_key=45d77fbed41b1ddb861d987ad8d213c8&limit=20&countries=us" //Please dont steal key :c it is free to get your own
            });
        } catch {
            console.log("There was an error loading the news source");
        }
        console.log(data);
        let chosen = Math.round(Math.random() * 20);
        let article_data = data['data'][chosen];
        console.log(data['data'][chosen]);

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
        if(article_data['image'] !== null) {
            if(article_data['image'].search(".mp3") == -1) {
                box.append(`<img src="${article_data['image']}">`);
            }
        }
        box.append(`<p>${article_data['description']}</p><br>`);
        box.append(`<small>Learn more about the story <a href="${article_data['url']}">here</a>.</small>`);

        content.append(box);
        modal.append(content);
        modal.append(close);
        $('body').append(modal);
    });
})