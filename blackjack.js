let cards = [];
let sum = 0;
let isAlive = true;
let message = "";
let hasBlackjack = false;
let player = {
  name: "Samwel",
  chips: 145,
}
let commentEl = document.getElementById("comment-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startgame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i];
    sum += cards[i];
  }

  sumEl.textContent += sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  commentEl.textContent = message;
}
function newcard() {
  let thirdCard = getRandomCard();
  cards.push(thirdCard);
  sum += cards[2];
  if (isAlive === true && hasBlackjack === false) {
    if (sum <= 20) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "Wohoo! You've got Blackjack!";
    } else {
      message = "You are out of the game!";
      isAlive = false;
    }
    commentEl.textContent = message;
    sumEl.textContent = "sum:" + sum;
    cardsEl.textContent += " " + cards[2];
  } else {
    commentEl.textContent = "Sorry you can't draw a new card";
  }
}
