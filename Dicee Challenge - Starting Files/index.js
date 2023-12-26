var randomNum1 = Math.floor(Math.random() * 6+1);
var randomImg1 = "dice" + randomNum1 + ".png";

document.querySelector(".img1").setAttribute("src" , randomImg1);

var randomNum2 = Math.floor(Math.random() * 6+1);
var randomImg2 = "dice" + randomNum2 + ".png";

document.querySelector(".img2").setAttribute("src" , randomImg2);

if (randomImg1 > randomImg2) {
    document.querySelector("h1").innerHTML="🚩player 1 win !";
}
else if (randomImg2 > randomImg1) {
    document.querySelector("h1").innerHTML="🚩player 2 win !";
}
else {
    document.querySelector("h1").innerHTML="Drow";
}