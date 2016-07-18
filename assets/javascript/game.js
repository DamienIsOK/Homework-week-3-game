
var word = ['charizard', 'mewtwo', 'lugia', 'blastoise', 'dragonite', 'pikachu', 'gengar'];
var wins = 0;
var losses = 0;
var attemptsLeft = 10;
var dash = "_ ";
var letters = "";
var wrongLetters = [];
var correctLetters = [];


var randomWord = word[Math.floor(Math.random() * word.length)];
console.log('The correct answer is ' + randomWord);

// word is a string
// letters in an array
// dash is an optional string
// letters = ["p","i","k","a","c","h","u"]

var dashWord = function(word,letters){
	// dash = dash || "_";
	var output = "";
	for(var i = 0; i < randomWord.length; i++){
		if(letters.indexOf(word[i]) > -1){
			output = output + word[i];
		}
		else
		{
			output = output + dash;
		}
	}

	return output;
}

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (randomWord.indexOf(userGuess) >= 0) {
		console.log('Correct! You guessed: ' + userGuess);
		correctLetters.push(userGuess);


	} else {
		wrongLetters.push(userGuess);
		console.log('Nah dawg, that\'s wrong. You guessed: ' + userGuess);
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

};
