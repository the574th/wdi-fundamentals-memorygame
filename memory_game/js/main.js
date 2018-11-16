var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

console.log("Up and running!");
cardsInPlay.push(cardOne);

console.log("User flipped " + cardsInPlay);

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

var resultAlert = cardsInPlay.length === 2 && cardOne === cardTwo ?
	alert ("You found a match!") : alert ("Sorry, try again") ;
