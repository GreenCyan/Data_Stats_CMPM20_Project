// general rule of thumb: anything that carries across days or should be saved goes here

// Stats that affect hacking
var crackStats = function(atck, def, spd, msk) {
  this.attack = atck;
  this.defense = def;
  this.speed = spd;
  this.mask = msk;
};

var gameHackStats = function() {
  // important stats
  
  // Current day. Every week starts with Monday
  this.theDay = 0;
  // positive numbers closer to government, negative numbers closer to freedom fighters
  this.govAlignment = 30;
  // The hacker's budget
  this.money = 100;
  // The hacker's hacking stats
  this.hackCrack = new crackStats(5, 5, 5, 5);
  
  // other stats
  
  // Targets Hacked
  this.targetNum = 0;
  // Successful Hacks
  this.winNum = 0;
  // Times Caught
  this.loseNum = 0;
  // Money Earned
  this.totalEarn = 0;
  

};

// current game stats
var currentStats = null;

// saved game stats
// since loading a day 0 game would be the same as starting a new game,
// only games at day one or later are saved
var saveStats = [];
for (var i = 0; i < 10; i++) {
	saveStats.push([]);
}

// Stat functions

// generate enemy stats
var genEnemy = function(difficulty) {
  var genArr = [];
  for (var i = 0; i < 4; i++) { genArr.push(Math.floor(difficulty + (Math.random() * difficulty) ) ) }
  return new crackStats(genArr[0], genArr[1], genArr[2], genArr[3]);
};

// loads saved game from loadStats or starts new game if loadStats is empty
function startGame(loadStats) {
  if (loadStats == null) {
    currentStats = new gameHackStats();
	return;
  } else if (!(typeof loadStats == 'gameHackStats')) {
    window.alert('Error: Incompatible object. Cannot load game.');
    return;
  } currentStats = loadStats;
};

// adds save game data to saveStats

// clones the currentStats object

// since loading a day 0 game would be the same as starting a new game,
// only games at day one or later are saved
function saveGame() {
	var newStats = new gameHackStats();
	newStats.theDay = currentStats.theDay;
	newStats.govAlignment = currentStats.govAlignment;
	newStats.money = currentStats.money;
	
	newStats.hackCrack.attack = currentStats.hackCrack.attack;
	newStats.hackCrack.defense = currentStats.hackCrack.defense;
	newStats.hackCrack.speed = currentStats.hackCrack.speed;
	newStats.hackCrack.mask = currentStats.hackCrack.mask;
	
	newStats.targetNum = currentStats.targetNum;
	newStats.winNum = currentStats.winNum;
	newStats.loseNum = currentStats.loseNum;
	newStats.totalEarn = currentStats.totalEarn;
	var i = newStats.theDay - 1;
	saveStats[i].push(newStats);
};

// deletes save data from saveStats and pushes down save data indexed above the deleted data
// dayIndex == theDay - 1
function deleteSave(dayIndex, saveIndex) {
	var len = saveStats[dayIndex].length;
	for (var i = saveIndex; i < len - 1; i++) {
		saveStats[dayIndex][i] = saveStats[dayIndex][i + 1];
	} saveStats[dayIndex].pop();
};

console.log(gameHackStats);
currentStats =  new gameHackStats();
console.log(currentStats);
console.log(typeof currentStats);
console.log(currentStats instanceof gameHackStats);
var JasonTest = JSON.stringify(currentStats);
console.log(JasonTest);
console.log(typeof JasonTest);
console.log(JSON.parse(JasonTest));
console.log(JSON.parse(JasonTest) instanceof gameHackStats);
console.log(document.cookie);