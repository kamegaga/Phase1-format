//const startBtn = document.getElementById("diceBtn");
//const body = document.querySelector("body");
//const dice = document.createElement("img");
//dice.style.width = "100px";
//dice.style.height = "100px";

//let diceNum = "./img/saikoro1.png";
//dice.setAttribute("src", diceNum);
//body.appendChild(dice);

//var timer;
//timer = setInterval("randam()", 100);

//startBtn.addEventListener("click", function() {
//timer = setInterval("randam()", 100);
//clearInterval(timer);
//etTimeout(function () {
//clearInterval(timer);
//}, 3000);
//});

//const randam = function () {
//diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)} .png`;
//dice.setAttribute("src", diceNum);
//};

const startBtn = document.getElementById("diceBtn");
const body = document.querySelector("body");
const dice = document.createElement("img");
dice.style.width = "100px";
dice.style.height = "100px";

let diceNum = "./img/saikoro1.png";
dice.setAttribute("src", diceNum);
body.appendChild(dice);

startBtn.addEventListener("click", function () {
  let timer = setInterval("randomlyChangeTheImage()", 100);

  setTimeout(() => {
    clearInterval(timer);
  }, 3000);
});

const randomlyChangeTheImage = function () {
  diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
  dice.setAttribute("src", diceNum);
};
