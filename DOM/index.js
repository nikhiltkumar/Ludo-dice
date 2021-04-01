
var numb1= (Math.random()  * 6) ;
var nume1 = Math.floor(numb1) + 1 ;
if(nume1===1)
{
document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
}
else if (nume1===2) {
document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
}
else if (nume1===3) {
document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
}
else if (nume1===4) {
document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
}
else if (nume1===5) {
document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
}
else {
document.querySelectorAll("img")[0].setAttribute("src","dice6.png");
}

var numb2= (Math.random()  * 6) ;
var nume2 = Math.floor(numb2) + 1 ;
var diceams = "dice"+nume2+".png";
document.querySelectorAll("img")[1].setAttribute("src",diceams);

if(nume2>nume1)
{
  document.querySelector("h1").textContent="Player 2 wins✌✌";
}
else if (nume2<nume1) {
  document.querySelector("h1").textContent="Player 1 wins👍";
}
else
{
  document.querySelector("h1").textContent="TIED";
}
