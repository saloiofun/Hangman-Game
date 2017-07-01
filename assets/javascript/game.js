// Fighter Constructor
function Fighter(name, nickname, fightStyle, sound, image) {
	this.name = name;
	this.nickname = nickname;
	this.fightStyle = fightStyle;
	this.sound = sound;
	this.image = image;
}

// Street Fighter Characters
var akuma = new Fighter(
	"Akuma",
	"Akuma",
	"Satsui no Hado, Ansatsuken",
	"https://www.youtube.com/embed/hTD3LhS7TXE?",
	"akuma.png"
	);

var chunLi = new Fighter(
	"Chun-Li",
	"Chun-Li",
	"Chinese martial arts",
	"https://www.youtube.com/embed/EWk3Pm6M3-I?",
	"chunLi.png"
	);

var dan = new Fighter(
	"Dan Hibiki",
	"Dan",
	"Saikyo \"Ultimate\" Style",
	"https://www.youtube.com/embed/lmSYC2N8sbs?",
	"dan.png"
	);

var dhalsim = new Fighter(
	"Dhalsim",
	"Dhalsim",
	"Esoteric Yoga",
	"https://www.youtube.com/embed/P8zF56ol5Gs?",
	"dhalsim.png"
	);

var ken = new Fighter(
	"Ken Masters",
	"Ken",
	"Ansatsuken",
	"https://www.youtube.com/embed/Je7u4onLVC8?",
	"ken.png"
	);

var ryu = new Fighter(
	"Ryu",
	"Ryu",
	"Ansatsuken",
	"https://www.youtube.com/embed/swPlzzavzWg?",
	"ryu.png"
	);

var sakura = new Fighter(
	"Sakura Kasugano",
	"Sakura",
	["Imitation of Ansatsuken Karate"],
	"https://www.youtube.com/embed/2gWGbmGD7r8?",
	"sakura.png"
	);

var elFuerte = new Fighter(
	"El Fuerte",
	"El Fuerte",
	"Lucha Libre",
	"https://www.youtube.com/embed/FDrBjA9SCPI?",
	"elFuerte.png"
	);

var guile = new Fighter(
	"Guile",
	"Guile",
	"Martial arts and professional wrestling",
	"https://www.youtube.com/embed/Q6XM3fDUxLg?",
	"guile.png"
	);

var feiLong = new Fighter(
	"Fei Long",
	"Fei Long",
	"Kung Fu",
	"https://www.youtube.com/embed/kTLwCx6spkU?",
	"feiLong.png"
	);

// Initialize Variables
var fighters = [akuma, chunLi, dan, dhalsim, ken, ryu, sakura, elFuerte, guile, feiLong];
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
		} else if (fighterCharArray[i] === " ") {
			lines.push("&nbsp;");
		} 
		else {
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
	fighterThemeDiv.className = "hideTheme";
	fighterTheme.innerHTML = "";

	var iframeElement = document.createElement("iframe");
	iframeElement.src = fighterObj.sound + "&autoplay=1";

	fighterThemeDiv.appendChild(iframeElement);
} 

// function to display fighter's image
var fighterImage = function(fighterObj) {
	var fighterImageDiv = document.getElementById("fighterImage");
	fighterImageDiv.innerHTML = "";
	var imageElement = document.createElement("img");
	imageElement.src = "assets/images/" + fighterObj.image;
	imageElement.className = "img-responsive fighterPortrait"; // for Bootstrap
	imageElement.alt = fighterObj.nickname;

	var h1Element = document.createElement("h1");
	h1Element.className = "fighterNickname";
	h1Element.innerHTML = fighterObj.nickname;	

	fighterImageDiv.appendChild(imageElement);
	fighterImageDiv.appendChild(h1Element);
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

innerHtmlById("guessesRemaining",numberOfTries);
innerHtmlById("gameWins","Wins: " + wins);
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