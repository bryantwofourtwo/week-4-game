// let's have some fun!
// Global Variable-------------------------------------------------------------------------

// Crystals Baby!
var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green: 
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	white:
	{
		name: "White",
		value: 0
	}
};

// Scores (current and the target score)
var currentScore = 0;
var targetScore = 0;

// Track wins and losses (baby!)
var winCount = 0;
var lossCount = 0;



// Functions-------------------------------------------------------------------------------
// Creates a reusable random number generator, just add params
var getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

// Starts game and restarts game
var startGame = function() {
	// Reset current score
	var currentScore = 0;

	// Set a new target score between 19 and 120
	var targetScore = getRandom(19, 120);

	// set different values for each crystal (between 1 and 12)
	crystal.blue.value = getRandom(1, 12);
	crystal.white.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);

	// Change the HTML to reflect all of these changes
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	// Testing console
	console.log("------------");
	console.log("Target Score " + targetScore);
	console.log("White: " + crystal.white.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Blue: " + crystal.blue.value);
	console.log("------------");
}

// Respond to clicks on the crystals
var addValues = function(crystal) {

	// Change currentScore
	currentScore = currentScore + crystal.value;

	// Change the HTML to reflect changes in current score
	$("#yourScore").html(currentScore);

	// Call the checkWin funtion
	checkWin();

	// Testing console
	console.log("Your Score:1 " + currentScore);
}
// Check if user has won or lost the game and reset
var checkWin = function() {

	// Check if currentScore is larger than targetScore
	if (currentScore > targetScore) {
		alert("Sorry, you lost");
		console.log("You Lost");

		// Add to Loss counter
		lossCount++;
	}
	else if (currentScore == targetScore) {
		alert("You won, congratulations!");
		console.log("You won");

		// Add to Win counter
		winCount++;
	}
}

// Main Processes--------------------------------------------------------------------------

// Start Game
startGame();


$("#white").click(function() {
	addValues(crystal.white);	
});

$("#red").click(function() {
	addValues(crystal.red);
});

$("#green").click(function() {
	addValues(crystal.green);
});

$("#blue").click(function() {
	addValues(crystal.blue);
});




