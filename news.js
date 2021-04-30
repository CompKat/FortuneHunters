//f51d403a9b614b2c8b3e662bc7a2ff84
$(function() {
    $("#news").on('click', async function() {
        let data = await $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=f51d403a9b614b2c8b3e662bc7a2ff84"
        });
        let chosen = Math.round(Math.random() * 20);
        let article_data = data['articles'][chosen];
        console.log(data['articles'][chosen]);

        let modal = $('<div id="news-mod" class="modal is-active"><div id="news-background" class="modal-background"></div></div>');
        
        let content = $('<div class="modal-content" style="background-color:white;"></div>');
        let box = $('<div class="box"></div>');
        $('#news-background').on('click', function() {
            $('#news-mod').remove();
        });
        let close = $('<button class="modal-close is-large" aria-label="close"></button>');
        close.on("click", function(e) {
            $("#news-mod").remove();
        });

        let title = $(`<strong class="subtitle is-3">${article_data['title']}</strong>`);
        content.append(title);
        content.append($('<br>'));
        let author = $(`<p>Written by ${article_data['author'] || 'unknown'}</p>`);
        content.append(author);

        box.append(`<img src="${article_data['urlToImage']}">`);
        box.append(`<p>${article_data['content'].split("[")[0]}</p><br>`);
        box.append(`<small>Learn more about the story <a href="${article_data['url']}">here</a>.</small>`);

        content.append(box);
        modal.append(content);
        modal.append(close);
        $('body').append(modal);
    });
})