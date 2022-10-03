const randomNumber1 = Math.trunc(Math.random() * 6) + 1;

const randomDiceImg = "dice" + randomNumber1 + ".png";

const randomImgSource = "images/" + randomDiceImg;

const img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

const randomNumber2 = Math.trunc(Math.random() * 6) + 1;

const randomImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
