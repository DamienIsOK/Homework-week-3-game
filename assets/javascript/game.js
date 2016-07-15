var word = ['c', 'a', 't'];

var wins = 0;
var losses = 0;

var guessesLeft = 5;

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (word.indexOf(userGuess) >= 0) {
		console.log('You guessed: ' + userGuess);
		console.log('Correct');
	} else {
		console.log(userGuess);
		console.log('Nah dawg');
		console.log(guessesLeft--);
	}

	score = "~SCORE~" + "<div id = 'wins'>" + wins +
	"<div id = 'losses'>" + losses;
	document.querySelector('#game').innerHTML = score;

	letters = "<div id = 'guessedLetters'>" + userGuess;
	document.querySelector('#guessedLetterBox').innerHTML = letters;

	guesses = "<div id = 'guessCount'>" + guessesLeft;
	document.querySelector('#guessCountBox').innerHTML = guesses;


}