
var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++)
 {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () 
        {
        var character = this.innerHTML;
        makesound(character);
        btnanimate(character);
        }
    )
      
}
document.addEventListener("keydown",function(event)
{
    makesound(event.key);
    btnanimate(event.key);
}
);
function makesound(key)
{
switch (key) 
{
    case "w": var audio = new Audio('/DrumKit/sounds/tom-1.mp3');
        audio.play();
        break;
    case "a": var audio = new Audio('/DrumKit/sounds/tom-2.mp3');
        audio.play();
        break;
    case "s": var audio = new Audio('/DrumKit/sounds/tom-3.mp3');
        audio.play();
        break;
    case "d": var audio = new Audio('/DrumKit/sounds/tom-4.mp3');
        audio.play();
        break;
    case "j": var audio = new Audio('/DrumKit/sounds/snare.mp3');
        audio.play();
        break;
    case "k": var audio = new Audio('/DrumKit/sounds/crash.mp3');
        audio.play();
        break;
    case "l": var audio = new Audio('/DrumKit/sounds/kick-bass.mp3');
        audio.play();
        break;
        
    }
}

function btnanimate(key)
{
    var active=document.querySelector("."+key)
    active.classList.toggle("pressed");
    setTimeout(() => {
        active.classList.toggle("pressed");
    }, 100  );
}









// var bg= document.querySelectorAll(".drum")[i].style.background-image;
// var index= bg.search("png");
// var media= bg.slice(0,index) +".mp3" ;

// var audio=new Audio('/DrumKit/sounds//DrumKit/sounds/'+med);
// audio.play();