
alert('Welcome To Stone Game');
var yourScore = 0;
var friendScore = 0;

document.querySelector('#rock').onclick = playRock;
document.querySelector('#paper').onclick = playPaper;
document.querySelector('#scissors').onclick = playScissors;

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(yourPlay) {
  
  var friendPlay = getFriendPlay();
  
  document.querySelector('#status').innerHTML = "<p>You played <strong>" + yourPlay + "</strong>. Your computer friend played <strong>" + friendPlay + "</strong>.</p>";
  
  if(yourPlay == 'rock') {
    if(friendPlay == 'rock') {
      document.querySelector('#status').innerHTML += "<p>Its a draw😮</p>";
    } else if (friendPlay == 'paper') {
      document.querySelector('#status').innerHTML += "<p>😎Your computer friend wins</p>";
      friendScore++;
    } else if (friendPlay == 'scissors') {
      document.querySelector('#status').innerHTML += "<p>You win😎</p>";
      yourScore++;
    }
  } else if (yourPlay == 'paper') {
    if(friendPlay == 'rock') {
      document.querySelector('#status').innerHTML += "<p>You win😎</p>";
      yourScore++;
    } else if (friendPlay == 'paper') {
      document.querySelector('#status').innerHTML += "<p>Its a draw😮</p>";
    } else if (friendPlay == 'scissors') {
      document.querySelector('#status').innerHTML += "<p>😎Your computer friend wins</p>";
      friendScore++;
    }  
  } else if (yourPlay == 'scissors') {
    if(friendPlay == 'rock') {
      document.querySelector('#status').innerHTML += "<p>😎Your computer friend wins</p>";
      friendScore++;
    } else if (friendPlay == 'paper') {
      document.querySelector('#status').innerHTML += "<p>You win😎</p>";
      yourScore++;
    } else if (friendPlay == 'scissors') {
      document.querySelector('#status').innerHTML += "<p>Its a draw😮</p>";
    }  
  }
  
  document.querySelector('#yourScore').innerHTML = yourScore;
  document.querySelector('#friendScore').innerHTML = friendScore;
  
}

function getFriendPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}