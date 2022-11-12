var randomNumber = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "images/dice" + randomNumber + ".png"; //dice1.png-dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //dice1.png-dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);



if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins 🏆";
} else if (randomNumber < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🏆";
} else {
    document.querySelector("h1").innerHTML = "Draw 🤝";
}