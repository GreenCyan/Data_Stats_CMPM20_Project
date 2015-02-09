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
  hackCrack = new crackStats(5, 5, 5, 5);
  
  // 

};

// Stat functions

// generate enemy stats
var genEnemy = function(difficulty) {
  var genArr = [];
  for (var i = 0; i < 4; i++) { genArr.push(Math.floor(difficulty + (Math.random() * difficulty) ) ) }
  return new crackStats(genArr[0], genArr[1], genArr[2], genArr[3]);
}

var currentStats = null;

