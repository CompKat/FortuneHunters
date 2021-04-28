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
        } else if(button.attr("data-playing") === 'true') {
            audioElement.pause();
            button.attr("data-playing", 'false');
        }

        $(".soundtrack").on('ended', function() {
            audioElement.play();
            button.attr("data-playing", 'true');
        }, false);
    })
});