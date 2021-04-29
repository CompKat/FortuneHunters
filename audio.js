$(function() {

    let button = $("#music");

    button.on("click", function(e) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();

        const audioElement = $(".soundtrack")[0];
        //const track = audioCtx.createMediaElementSource(audioElement);

        
        if(audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        console.log("Click occured");
        if(button.attr("data-playing") === 'false') {
            audioElement.play();
            button.attr("data-playing", 'true');
            $("#music-img").attr("src","images/pause.png");
        } else if(button.attr("data-playing") === 'true') {
            audioElement.pause();
            button.attr("data-playing", 'false');
            $("#music-img").attr("src","images/play.png");
        }

        audioElement.onended = function() {
            audioElement.play();
            button.attr("data-playing", 'true');
        }
    })
});