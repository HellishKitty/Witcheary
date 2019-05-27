gameplayTrailerVid = document.getElementById("gwent-gameplay");
gameplayTrailerVid.currentTime = 0.5;
waysToPlayVid = document.getElementById("way-to-play");
waysToPlayVid.currentTime = 0.3;

function setEventListeners() {
    gameplayTrailerVid.addEventListener('mouseover', function(){
        gameplayTrailerVid.currentTime = 0.5;
        gameplayTrailerVid.play();
    })
    
    gameplayTrailerVid.addEventListener('mouseout', function(){
        gameplayTrailerVid.pause();
        gameplayTrailerVid.currentTime = 0.5;
    })

    waysToPlayVid.addEventListener('mouseover', function(){
        waysToPlayVid.currentTime = 0.3;
        waysToPlayVid.play();
    })

    waysToPlayVid.addEventListener('mouseout', function(){
        waysToPlayVid.pause();
        waysToPlayVid.currentTime = 0.3;
    })
}

setEventListeners();
