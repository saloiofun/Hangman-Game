// Fighter Constructor
function Fighter(name, nickname, gender, power, affiliation, sound, image) {
	this.name = name;
	this.nickname = nickname;
	this.gender = gender;
	this.power = power;
	this.affiliation = affiliation;
	this.sound = sound;
	this.image = image;
}

// Marvel Characters
var apocalypse = new Fighter(
	"En Sabah Nur",
	"Apocalypse",
	"Male",
	["Size Alteration", "Invulnerability", "Superhuman Attributes"],
	"Villain",
	"marvel/apocalypse/apocalypse.mp3",
	"apocalypse.gif"
	);

var captainAmerica = new Fighter(
	"Steve Rogers",
	"Captain America",
	"Male",
	["Vibranium Alloy Shield", "Super Soldier Serum"],
	"Hero",
	"marvel/captainAmerica/captainAmerica.mp3",
	"captainAmerica.gif"
	);

var cyclops = new Fighter(
	"Scott Summers",
	"Cyclops",
	"Male",
	["Optic Lasers"],
	"Hero",
	"marvel/cyclops/cyclops.mp3",
	"cyclops.gif"
	);

var hulk = new Fighter(
	"Dr. Robert Bruce Banner",
	"Hulk",
	"Male",
	["Potentially Limitless Strength"],
	"Hero",
	"marvel/hulk/hulk.mp3",
	"hulk.gif"
	);

var omegaRed = new Fighter(
	"Arkady Gregorivich Rossovich",
	"Omega Red",
	"Male",
	["Mechanical tentacles"],
	"Villain",
	"marvel/omegaRed/omegaRed.mp3",
	"omegaRed.gif"
	);

var shumaGorath = new Fighter(
	"Shuma-Gorath",
	"Shuma-Gorath",
	"Male",
	["Shape Shifting", "Tentacles", "Mystic Arts"],
	"Villain",
	"marvel/shumaGorath/shumaGorath.mp3",
	"shumaGorath.gif"
	);

var spiderMan = new Fighter(
	"Peter Benjamin Parker",
	"Spider-Man",
	"Male",
	["Various Spider Abilities"],
	"Hero",
	"marvel/spiderMan/spiderMan.mp3",
	"spiderMan.gif"
	);

var wolverine = new Fighter(
	"Logan",
	"Wolverine",
	"Male",
	["Adamantanium Bones and Claws", "Advanced Healing Factor"],
	"Hero",
	"marvel/wolverine/wolverine.mp3",
	"wolverine.gif"
	);

// Street Fighter Characters
var akuma = new Fighter(
	"Akuma",
	"Akuma",
	"Male",
	["Unnamed Ansatsuken art", "Satsui no Hadou"],
	"Antivillain",
	"streetFighter/akuma/akuma.mp3",
	"akuma.gif"
	);

var chunLi = new Fighter(
	"Chun-Li",
	"Chun-Li",
	"Female",
	["Chinese Kenpo", "Chi"],
	"Hero",
	"streetFighter/chunLi/chunLi.mp3",
	"chunLi.gif"
	);

var dan = new Fighter(
	"Dan Hibiki",
	"Dan",
	"Male",
	["Saikyo Karate"],
	"Hero",
	"streetFighter/dan/dan.mp3",
	"dan.gif"
	);

var dhalsim = new Fighter(
	"Dhalsim",
	"Dhalsim",
	"Male",
	["Extreme flexibility", "rubbery body", "fire manipulation"],
	"Hero",
	"streetFighter/dhalsim/dhalsim.mp3",
	"dhalsim.gif"
	);

var ken = new Fighter(
	"Ken Masters",
	"Ken",
	"Male",
	["Ansatsuken Karate"],
	"Hero",
	"streetFighter/ken/ken.mp3",
	"ken.gif"
	);

var ryu = new Fighter(
	"Ryu",
	"Ryu",
	"Male",
	["Unnamed Ansatsuken art mixed with Shoutoukan Karate"],
	"Hero",
	"streetFighter/ryu/ryu.mp3",
	"ryu.gif"
	);

var sakura = new Fighter(
	"Sakura Kasugano",
	"Sakura",
	"Female",
	["Imitation of Ansatsuken Karate"],
	"Hero",
	"streetFighter/sakura/sakura.mp3",
	"sakura.gif"
	);

var zangief = new Fighter(
	"Zangief",
	"Zangief",
	"Male",
	["Various Wrestling Moves"],
	"Neutral",
	"streetFighter/zangief/zangief.mp3",
	"zangief.gif"
	);

// Initialize Variables
var fighters =
[apocalypse, captainAmerica, cyclops, hulk, omegaRed, shumaGorath, spiderMan, wolverine, akuma, chunLi, dan, dhalsim, ken, ryu, sakura, zangief];
var validChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var fighter = fighters[Math.floor(Math.random() * fighters.length)];
var wrongChars = [];
var numberOfTries = fighter.nickname.length + 5;
var fighterChar = fighter.nickname.toUpperCase().split(''); // Splits fighter's nickname into chars and returns an array
var hiddenChar = hideChars(fighter, validChars, fighterChar);
var wins = 0;

// Function to create guess lines for the game
function hideChars(fighterObj, validCharsArray, fighterCharArray) {
	var lines = [];
	for (var i = 0; i < fighterObj.nickname.length; i++) {
		if (validCharsArray.includes(fighterCharArray[i])) {
			lines.push("_");
		} else {
			lines.push(fighterCharArray[i]);
		}
	}
	return lines;
}

function innerHtmlById(id, add){
	document.getElementById(id).innerHTML = add;
}

// replaces a line by a char
var replaceLine = function(array, index, char) {
	array[index] = char;
};

// function to play fighter's theme
var playTheme = function(fighterObj) {
	var fighterThemeDiv = document.getElementById("fighterTheme");
	fighterTheme.innerHTML = "";
	var audioElement = document.createElement("audio");
	audioElement.autoplay = "autoplay";
	var sourceElement = document.createElement("source");
	sourceElement.src = "assets/sounds/" + fighterObj.sound;
	sourceElement.type = "audio/mpeg";
	audioElement.appendChild(sourceElement);

	fighterThemeDiv.appendChild(audioElement);
} 

// function to display fighter's image
var fighterImage = function(fighterObj) {
	var fighterImageDiv = document.getElementById("fighterImage");
	fighterImageDiv.innerHTML = "";
	var imageElement = document.createElement("img");
	imageElement.src = "assets/images/" + fighterObj.image;
	imageElement.alt = fighterObj.nickname;

	fighterImageDiv.appendChild(imageElement);
}

var resetGame = function(fightersObj) {
	// Randomly chooses a choice from the fighters array.
	fighter = fightersObj[Math.floor(Math.random() * fightersObj.length)];
	fighterChar = fighter.nickname.toUpperCase().split('');

	// Reset variables
	wrongChars = [];
	hiddenChar = hideChars(fighter, validChars, fighterChar);
	numberOfTries = fighter.nickname.length + 5;
}

innerHtmlById("currentWord",hiddenChar.join(" "));

// receives user's input and checks if key exists in the fighterChar array
document.onkeyup = function(event) {
	var key = event.key.toUpperCase();

	// if key exists in the figther array and number of tries is greater than 0, replaces the line by the key
	// otherwise stores the wrong key and decrements number of tries
	if (validChars.includes(key) && fighterChar.includes(key) && numberOfTries > 0) {
		for(var i = 0; i < fighterChar.length; i++) {
			if(fighterChar[i] === key) {
				replaceLine(hiddenChar, i, key);
			}
		}
	} else {
		if (validChars.includes(key) && !wrongChars.includes(key) && numberOfTries > 0) {
			wrongChars.push(key);
			numberOfTries--;
		}
	}

	// if number of tries reaches 0 
	if (numberOfTries === 0) {
		resetGame(fighters);
	}

	// if there are no more lines to guess
	if (!hiddenChar.includes("_")) {
		wins++;
		playTheme(fighter);
		fighterImage(fighter);
		resetGame(fighters);
	}

	innerHtmlById("guessesRemaining",numberOfTries);
	innerHtmlById("gameWins","Wins: " + wins);
	innerHtmlById("wrongGuesses",wrongChars.join(", "));
	innerHtmlById("currentWord",hiddenChar.join(" "));
}