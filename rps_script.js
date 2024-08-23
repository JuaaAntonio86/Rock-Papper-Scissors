function getRandomInt() {
	return Math.floor(Math.random() * 3);
}

function getcomputer() {
	if (computer === 0){
		return "✋🏻";
	}
	else if (computer === 1){
		return "✊🏻";
	}
	else if (computer === 2){
		return "✌🏻";
	}
}

function getHuman(human) {
	if (human.toUpperCase() === "PAPER"){
		return "✋🏻";
	}
	else if (human.toUpperCase() === "ROCK"){
		return "✊🏻";
	}
	else if (human.toUpperCase() === "SCISSORS"){
		return "✌🏻";
	}
	else
		throw Error("No selection!!");
}

let computer = getRandomInt();
let compres = getcomputer();
let human = getHumanselection();
try{
	let humanres = getHuman(human);
}
catch (error){
	alert(error.message + " Please choose a correct choice")
}

function game(){
	if ( humanres === compres){
		console.log("Draws!!");
	}
	else if( humanres == "✋🏻" && compres === "✌🏻"){
		console.log("You loose!!");
	}
	else if(humanres === "✌🏻" && compres  === "✋🏻"){
		console.log("You Win!!");
	}
	else if (humanres === "✊🏻" && compres === "✌🏻"){
		console.log("You Win!!");
	}
	else if( humanres == "✋🏻" && compres === "✊🏻"){
		console.log("You Win!!");
	}
	else if(humanres === "✌🏻" && compres  === "✊🏻"){
		console.log("You loose!!");
	}
	else if (humanres === "✊🏻" && compres === "✋🏻"){
		console.log("You loose!!");
	}
}

console.log(humanres + " PC");
console.log(compres + " HUMAN");
