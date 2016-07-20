
var word = ['charizard', 'mewtwo', 'lugia', 'blastoise', 'dragonite', 'pikachu', 'gengar'];
var wins = 0;
var losses = 0;
var attemptsLeft = 10;
var dash = "_ ";
var letters = "";
var wrongLetters = [];
var correctLetters = [];
var result = "";

var randomWord = word[Math.floor(Math.random() * word.length)];
console.log('The correct answer is ' + randomWord);

// Took me 5 hours to complete just this function. Still not entirely sure how I got it to work
var dashWord = function(word,letters) {
	var result = "";
	for(var i = 0; i < randomWord.length; i++){
		if(letters.indexOf(word[i]) > -1){
			console.log(result = result + word[i]);
		} else {
			console.log(result = result + dash);
		}
	}
	console.log('The result is: ' + result + letters + word);
	return result;
	return letters;
	return word;
}

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (randomWord.indexOf(userGuess) >= 0) {
		console.log('Correct! You guessed: ' + userGuess);
		correctLetters.push(userGuess);

	} else {
		wrongLetters.push(userGuess);
		console.log('No, that\'s wrong. You guessed: ' + userGuess);
		attemptsLeft--;

	}

	score = "<div id = 'wins'>" + 'WINS: ' + wins +
	"<div id = 'losses'>" + 'LOSSES: ' + losses;
	document.querySelector('#game').innerHTML = score;

	letters = "<div id = 'guessedLetters'>" + 'Guessed: ' + wrongLetters + ' ';
	document.querySelector('#guessedLetterBox').innerHTML = letters;

	guesses = "<div id = 'guessCount'>" + 'Attempts Left: ' + attemptsLeft;
	document.querySelector('#guessCountBox').innerHTML = guesses;

	dashedLetter = 	dashWord(randomWord,correctLetters);
	document.querySelector('#dashedBox').innerHTML = dashedLetter;

}
