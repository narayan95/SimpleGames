var randomNumber1=(Math.ceil((Math.random())*6));
var randomImage1= "images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);
var randomNumber2=(Math.ceil((Math.random()*6)));
var image2=document.querySelectorAll("img")[1];
var randomImage2="images/dice"+randomNumber2+".png";
image2.setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="😎Player1 wins";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Playr2 wins😎";
else
document.querySelector("h1").innerHTML="Its a draw😮";