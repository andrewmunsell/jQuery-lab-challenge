// Challenge summary:
// You will be implementing a countdown clock which take the number
// of seconds as parameter. In addition, you will also add 'confetti'
// to a random location on the page for each passing second.

// After you have completed the basic core components, there are a few
// optional features to work on:
// -- Display time in miliseconds.


// First, take a look at the index.html file to see the items you
// will need to work with.

var intervalId = null;

var timeRemaining = null;
var confettiSize = 10;

// This function is the equivalent of document ready
$(function() {
	$('#countdownButton').click(function() {
		var time = parseInt($('#time').val(), 10);
		var confetti = parseInt($('#size').val(), 10);

		if(isNaN(time)) {
			return alert('You must input a number for the time.');
		}

		if(!isNaN(confetti)) {
			confettiSize = confetti;
		}

		// Remove the old confetti
		$('#confettiField').empty();

		timeRemaining = time + 1;

		countDown();
		clearInterval(intervalId);
		intervalId = setInterval(countDown, 1000);
	});	
});

function countDown() {
	if(--timeRemaining < 1) {
		clearInterval(intervalId);

		$('#displayedTimer').text((timeRemaining % 60) + 's');
		alert('TIME IS UP');
	} else {
		if(timeRemaining > 60) {
			$('#displayedTimer').text(Math.floor(timeRemaining / 60) + 'm' + (timeRemaining % 60) + 's');
		} else {
			$('#displayedTimer').text((timeRemaining % 60) + 's');
		}

		createConfetti();
	}
}

function createConfetti() {
	// Get confetti's size. If user doesn't specify or type in invalid value, switch to a default size.
	$('#confettiField')
		.append(
			$('<div class="confetti"></div>')
				.css('width', confettiSize + 'px')
				.css('height', confettiSize + 'px')
				.css('top', Math.random() * window.innerHeight)
				.css('left', Math.random() * window.innerWidth)
				.css('background-color', 'rgb(' + [rand(0,255), rand(0,255), rand(0,255)].join(',') + ')')
		);

	//	Random color RGB, use Math.floor(Math.random() * 255)


	// Random locations on screen
	// Hint: use Math.floor, Math.random, window.innerHeight/Width to compute px value.


	// Add confetti and apply styles: width/height, location, background-color.
	// Hint: use fixed positioning with top & left attributes


	// [Optional]
	// Change the timer display's font color to the same as the last confetti's
	// background color. This is actually very simple (1-2 line of code).
	
	// [Optional]
	// Allow user to click on each confetti and remove it (1-2 line of code).
}

function rand(min, max) {
	return Math.floor(
		Math.random() * (max - min) + min
	);
}