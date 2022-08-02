var randomNumber1= Math.ceil(Math.random()*6)
var randomNumber2= Math.ceil(Math.random()*6)
// console.log(randomNumber1)
// alert(randomNumber1)
var leftImg= document.querySelector(".img1")
var rightImg= document.querySelector(".img2")
var h1= document.querySelector(".container h1")
h1.style.fontSize= "7rem"

var fir= "images/dice"
var las= ".png"
var lefUrl= fir+ randomNumber1 +las
var rigUrl= fir+ randomNumber2 +las

leftImg.setAttribute("src", lefUrl)
rightImg.setAttribute("src", rigUrl)

if(randomNumber1 < randomNumber2)
{
    h1.innerText= "Player 2 Wins 🚩"
}
else if (randomNumber1 > randomNumber2)
{
    h1.innerText= "🚩 Player 1 Wins"
}
else
    h1.innerText= "🎌 Draw 🎌"