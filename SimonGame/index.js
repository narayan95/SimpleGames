var level = 0;
var buttonColors = [];
buttonColors.push("red");
buttonColors.push("blue");
buttonColors.push("green");
buttonColors.push("yellow");
var gamePattern = [];
var userClickedPattern = [];
var highScore=0;
$("#score").html(highScore);

$(document).keydown(function () {
    if (level == 0)
        nextSequence();
});
function nextSequence() {
    userClickedPattern = [];
    level++;
    var textin = "Level " + level;
    $("h1").html(textin);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var loc = randomChosenColour + ".mp3";
    playSound(loc);

}

$(".btn").click(function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    var name = userChosenColour + ".mp3";
    playSound(name);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);

});
function playSound(name) {
    var tap = new Audio("SimonGame/sounds/" + name);
    tap.play();

}
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }


    else
    { 
        console.log("fail");
        playSound("wrong.mp3");
        if(level>highScore)
        highScore=level;
        $("#score").html(highScore);
        $("body").addClass("game-over");
        $("h1").html("Game Over, Press Any Key to Restart");
        startover();
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
    }
}
function startover()
{
    level=0;
    gamePattern=[];
    
}