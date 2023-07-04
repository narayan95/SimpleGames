
let music = new Audio("/SimpleGames/TicTacToe/music.mp3");
let turn = new Audio("/SimpleGames/TicTacToe/ting.mp3");
let currTurn="X";
let isgameover = false;
function changeTurn()
{
    if(currTurn=="X")
        currTurn="0";
    else
        currTurn="X";
    turn.play();
}

//function checking win
function checkWin()
{
    var boxtext = $(".boxtext");
    let wins =[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    for(var i=0;i<wins.length;i++)
    {
        var elem= wins[i];
        if(boxtext[elem[0]].innerText==boxtext[elem[1]].innerText&&boxtext[elem[1]].innerText==boxtext[elem[2]].innerText&& boxtext[elem[0]].innerText!="")
        {
            music.play();
            $(".info").html(""+currTurn+" Won");
            isgameover=true;
            $(".imgbox img").css("width","10vw");
            document.querySelector(".line").style.transform = `translate(`+elem[3]+`vw,` +elem[4] +`vw) rotate(`+ elem[5] +`deg)`
            $(".line").css("width","20vw");
        }

    }
    


}

//game logic
var cnt=0;
var boxes= $(".box");
for(var i=0;i<boxes.length;i++)
{
    let boxtext= boxes[i].querySelector(".boxtext");
    boxes[i].addEventListener('click',function()
    {
       
        if(boxtext.innerText === ''){
            boxtext.innerText = currTurn;
            checkWin();
             changeTurn();
            if (!isgameover){
                $(".info").html("Turn for " + currTurn);
            } 
          
        }
       
        
    })
}


// Array.from(boxes).forEach(element =>{
//     let boxtext = element.querySelector('.boxtext');
//     element.addEventListener('click', ()=>{
       
//     })
// // })

$("#reset").click(function()
{
    $(".imgbox img").css("width","0");
    $(".line").css("width","0vw");
    isgameover=false;
    currTurn="X";
    $(".info").html("Turn for " + currTurn);
    $(".boxtext").text("");
    
        music.pause();

    
    
})


// reset.addEventListener('click', ()=>{
//     let boxtexts = document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element => {
//         element.innerText = ""
//     });
//     currTurn = "X"; 
//     isgameover = false
//     document.querySelector(".line").style.width = "0vw";
//     document.getElementsByClassName("info")[0].innerText  = "Turn for " + currTurn;
//     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
// })


