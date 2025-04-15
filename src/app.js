import "./style.css";

let randomNumber = () => {
  let num = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let iNumbers = Math.floor(Math.random()*num.length);
  return num[iNumbers];
}

let randomSuit = () => {
  let suit = ["♠","♣","♥","♦"];
  let iSuit = Math.floor(Math.random()*suit.length);
  return suit[iSuit];
}

window.onload = () => {
  let selectedSuit = randomSuit();

  let suitTop = document.querySelector(".top.suit");
  let suitBot = document.querySelector(".bot.suit");
  
  suitTop.innerHTML = selectedSuit;
  suitBot.innerHTML = selectedSuit;

  if(selectedSuit === "♥" || selectedSuit === "♦") {
    suitTop.classList.add("red");
    suitBot.classList.add("red");
  }

  let number = document.querySelector(".number");
  number.innerHTML = randomNumber();
}