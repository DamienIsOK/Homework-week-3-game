
var word = ['cat', 'dog', 'monkey'];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var wrongLetters = [];

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (word.indexOf(userGuess) >= 0) {
		console.log('You guessed: ' + userGuess);
		console.log('Correct');

	} else {
		wrongLetters.push(userGuess);
		console.log(wrongLetters);
		console.log('Nah dawg, you guessed ' + userGuess);
		console.log(guessesLeft--);

	}

	score = "~SCORE~" + "<div id = 'wins'>" + 'WINS: ' + wins +
	"<div id = 'losses'>" + 'LOSSES: ' + losses;
	document.querySelector('#game').innerHTML = score;

	letters = "<div id = 'guessedLetters'>" + wrongLetters + ' ';
	document.querySelector('#guessedLetterBox').innerHTML = letters;

	guesses = "<div id = 'guessCount'>" + 'GUESSES REMAINING: ' + guessesLeft;
	document.querySelector('#guessCountBox').innerHTML = guesses;


}
