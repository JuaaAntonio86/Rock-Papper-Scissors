// Function to generate a random integer between 0 and 2
alert("Please select a value to play!!")

function getRandomInt() {
	return Math.floor(Math.random() * 3);
}

const divw = document.getElementById('empty');
divw.textContent = "PC"; 
divw.style.fontSize = '50px';
divw.style.textAlign = 'center';
const div = document.getElementById('result');
// Function to get the computer's choice based on the random integer
function getComputerChoice(computer) {
    if (computer === 0) {
        return "✋🏻"; // Paper
    } else if (computer === 1) {
        return "✊🏻"; // Rock
    } else if (computer === 2) {
        return "✌🏻"; // Scissors
    }
}

// Event listeners for buttons to capture user selection
const buttons = document.querySelectorAll('.minibox');
let userSelection = null; // Variable to store the user's selection
let flag = 0;
buttons.forEach(button => {
	const div = document.getElementById('empty');
	// Start the timeline
	button.addEventListener('click', function() {
		userSelection = this.value; // Store the value of the clicked button
		if (userSelection)
			result.textContent = "";
			document.body.style.backgroundColor = 'white';
			divw.textContent = " "; 
			console.log('Button clicked:', userSelection); // Log the selected value
			tl.play();
			// Get the computer's choice and run the game logic
			const computerChoice = getComputerChoice(getRandomInt());
		console.log('Computer Choice: ', computerChoice);
		setTimeout(() => {
			tl.pause();
			chars.forEach(char => {
			char.style.opacity = 0;
			div.textContent = computerChoice; 
			div.style.fontSize = '150px';
			game(userSelection, computerChoice); // Call the game function with the user's and computer's choices
		});
		}, "3500");
	});
});


// Function to determine the game result
function game(humanres, compres) {
    if (humanres === compres) {
        result.textContent = "Draws!!";
		console.log("Draws!!");
		document.body.style.backgroundColor = 'lightgray';
    } else if (humanres === "✋🏻" && compres === "✌🏻") {
		result.textContent = "You Loose!!";
        console.log("You Loose!!");
		document.body.style.backgroundColor = 'lightcoral';
    } else if (humanres === "✌🏻" && compres === "✋🏻") {
		result.textContent = "You Win!!";
        console.log("You Win!!");
		document.body.style.backgroundColor = 'lightgreen';
    } else if (humanres === "✊🏻" && compres === "✌🏻") {
		result.textContent = "You Win!!";
        console.log("You Win!!");
		document.body.style.backgroundColor = 'lightgreen';
    } else if (humanres === "✋🏻" && compres === "✊🏻") {
		result.textContent = "You Win!!";
        console.log("You Win!!");
		document.body.style.backgroundColor = 'lightgreen';
    } else if (humanres === "✌🏻" && compres === "✊🏻") {
		result.textContent = "You Loose!!";
        console.log("You Lose!!");
		document.body.style.backgroundColor = 'lightcoral';
    } else if (humanres === "✊🏻" && compres === "✋🏻") {
		result.textContent = "You Loose!!";
        console.log("You Lose!!");
		document.body.style.backgroundColor = 'lightcoral';
    }
}

// GSAP Animation
gsap.to(".char", { opacity: 0, duration: 0.2 });

const chars = document.querySelectorAll('.char');

const tl = gsap.timeline({ paused: true, repeat: -1 }); // repeat: -1 makes the animation loop infinitely

chars.forEach((char, index) => {
    tl.to(char, { opacity: 1, duration: 0.2 })   // Fade in
      .to(char, { opacity: 0, duration: 0.2 }, "+=0.1"); // Fade out after a brief delay
});

