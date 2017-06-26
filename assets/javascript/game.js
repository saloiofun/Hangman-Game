// Marvel Characters
var apocalypse = {
	name: "En Sabah Nur",
	nickname: "Apocalypse",
	gender: "Male",
	power: ["Size Alteration", "Invulnerability", "Superhuman Attributes"],
	affiliation: "Villain",
	sound: "apocalypse.mp3",
	image: "apocalypse.gif"
};

var captainAmerica = {
	name: "Steve Rogers",
	nickname: "Captain America",
	gender: "Male",
	power: ["Vibranium Alloy Shield", "Super Soldier Serum"],
	affiliation: "Hero",
	sound: "captainAmerica.mp3",
	image: "captainAmerica.png"
};

var cyclops = {
	name: "Scott Summers",
	nickname: "Cyclops",
	gender: "Male",
	power: ["Optic Lasers"],
	affiliation: "Hero",
	sound: "cyclops.mp3",
	image: "cyclops.jpg"
};

var hulk = {
	name: "Dr. Robert Bruce Banner",
	nickname: "Hulk",
	gender: "Male",
	power: ["Potentially Limitless Strength"],
	affiliation: "Hero",
	sound: "hulk.mp3",
	image: "hulk.jpg"
};

var omegaRed = {
	name: "Arkady Gregorivich Rossovich",
	nickname: "Omega Red",
	gender: "Male",
	power: ["Mechanical tentacles"],
	affiliation: "Villain",
	sound: "omegaRed.mp3",
	image: "omegaRed.jpg"
};

var shumaGorath = {
	name: "Shuma-Gorath",
	nickname: "Shuma-Gorath",
	gender: "Male",
	power: ["Shape Shifting", "Tentacles", "Mystic Arts"],
	affiliation: "Villain",
	sound: "shumaGorath.mp3",
	image: "shumaGorath.png"
};

var spiderMan = {
	name: "Peter Benjamin Parker",
	nickname: "Spider Man",
	gender: "Male",
	power: ["Various Spider Abilities"],
	affiliation: "Hero",
	sound: "spiderMan.mp3",
	image: "spiderMan.png"
};

var wolverine = {
	name: "Logan",
	nickname: "Wolverine",
	gender: "Male",
	power: ["Adamantanium Bones and Claws", "Advanced Healing Factor"],
	affiliation: "Hero",
	sound: "wolverine.mp3",
	image: "wolverine.png"
};

// Street Fighter Characters
var akuma = {
	name: "Akuma",
	nickname: "Akuma",
	gender: "Male",
	power: ["Unnamed Ansatsuken art", "Satsui no Hadou"],
	affiliation: "Antivillain",
	sound: "akuma.mp3",
	image: "akuma.png"
};

var chunLi = {
	name: "Chun-Li",
	nickname: "Chun-Li",
	gender: "Female",
	power: ["Chinese Kenpo", "Chi"],
	affiliation: "Hero",
	sound: "chunLi.mp3",
	image: "chunLi.png"
};

var dan = {
	name: "Dan Hibiki",
	nickname: "Dan",
	gender: "Male",
	power: ["Saikyo Karate"],
	affiliation: "Hero",
	sound: "dan.mp3",
	image: "dan.jpg"
};

var dhalsim = {
	name: "Dhalsim",
	nickname: "Dhalsim",
	gender: "Male",
	power: ["Extreme flexibility", "rubbery body", "fire manipulation"],
	affiliation: "Hero",
	sound: "dhalsim.mp3",
	image: "dhalsim.jpg"
};

var ken = {
	name: "Ken Masters",
	nickname: "Ken",
	gender: "Male",
	power: ["Ansatsuken Karate"],
	affiliation: "Hero",
	sound: "ken.mp3",
	image: "ken.jpg"
};

var ryu = {
	name: "Ryu",
	nickname: "Ryu",
	gender: "Male",
	power: ["Unnamed Ansatsuken art mixed with Shoutoukan Karate"],
	affiliation: "Hero",
	sound: "ryu.mp3",
	image: "ryu.png"
};

var sakura = {
	name: "Sakura Kasugano",
	nickname: "Sakura",
	gender: "Female",
	power: ["Imitation of Ansatsuken Karate"],
	affiliation: "Hero",
	sound: "sakura.mp3",
	image: "sakura.png"
};

var zangief = {
	name: "Zangief",
	nickname: "Zangief",
	gender: "Male",
	power: ["Various Wrestling Moves"],
	affiliation: "Neutral",
	sound: "zangief.mp3",
	image: "zangief.png"
};

// Array of Objects
var characters =
[apocalypse, captainAmerica, cyclops, hulk, omegaRed, shumaGorath, spiderMan, wolverine, akuma,
chunLi, dan, dhalsim, ken, ryu, sakura, zangief];

// Randomly chooses a choice from the characters array.

var character = characters[Math.floor(Math.random() * characters.length)];

console.log(character.nickname);
console.log(character.nickname.length);

var charLines = [];
for (var i = 0; i < character.nickname.length; i++) {
	charLines.push("_");
}

// Splits character's nickname into chars and returns an array
var charArray = character.nickname.toLowerCase().split('');

console.log(charLines);
console.log(charLines.join(" "));
console.log(charArray);

var replaceLine = function(array, index, letter) {
	array[index] = letter;
};

document.onkeyup = function(event) {
	var key = event.key.toLowerCase();
	console.log(key);

	for(var i = 0; i < charArray.length; i++) {
        if(charArray[i] === key)
        {
            replaceLine(charLines, i, key);
		}
    }

    console.log(charLines.join(" "));

}






