console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	},
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!") ;
	} else {
		alert("Sorry, try again.") ;
	}
} ;

// var resultAlert = cardsInPlay.length === 2 && cardOne === cardTwo ?
// 	alert ("You found a match!") : alert ("Sorry, try again") ;

var resultAlert = function() {
	if (cardsInPlay.length === 2) {
		checkForMatch();
		}
};

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank) ;
	cardsInPlay.push(cards[cardId].rank) ;
	console.log(cards[cardId].cardImage) ;
	console.log(cards[cardId].suit) ;
	resultAlert();
} ;

flipCard(0);
flipCard(1);



