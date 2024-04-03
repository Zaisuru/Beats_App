var bg = document.getElementById('particles-js');


document.addEventListener("keydown", function(event){
    bg.style.backgroundColor = getRandomColor();
    var key =event.key;
    playMusic(key);

});

function playMusic(key){
    switch(key){
        case "z":
            var audio = new Audio("../styles/music/Kick1.wav");
            audio.play();
            break;
        case "s":
            var audio = new Audio("../styles/music/kick.mp3");
            audio.play();
            break;
        case "q":
            var audio = new Audio("../styles/music/kick2.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("../styles/music/Clap1.wav");
            audio.play();
            break;
    }
}

function getRandomColor(){
    var letters = "01234456789ABCEF";
    var color = "#";

    for(let i = 0; i < 6; i++){
        color = color + letters[Math.floor(Math.random()*16)];
    }
    return color;
}


