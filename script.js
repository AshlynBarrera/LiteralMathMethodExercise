



//1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs."

//1b
console.log(warmHugs.toUpperCase());
//1c

console.log(warmHugs.replace("like","love"));
//2a
var beenImpaled = "Oh, look at that. I've been impaled."

//2b
console.log(beenImpaled.slice(18));

//3a
var dotDotDot = "..."

//3b
var skullBones = 'I don\'t have a skull' + dotDotDot + "or bones."
console.log(skullBones);

//4
console.log(Math.PI);  

//5 
let randomNumber = Math.random();
console.log(randomNumber);
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber ++;
console.log(randomNumber);



//Bonus

//7a
var spaceOne = "_"
var spaceTwo = "_"
var spaceThree =  "_"
var spaceFour = "_"

var reindeers = "Reindeers are better than people."
//7b
reindeers = 'Reindeers' + spaceOne+  'are' + spaceTwo + 'better'+spaceThree+ 'than' +spaceFour+'people.'
console.log(reindeers);

//or 
// the short cut "g" stands for global, so ever =y space it finds it replaces it with an under score
console.log(reindeers.replace(/ /g,"_"));


// 8

console.log(Math.sqrt2); // sqrt stands for square root of, using it to find two 


//9 
let newRandomNumber = Math.random();
newRandomNumber *= 17; // 23 - 7 + 1
newRandomNumber = Math.floor(newRandomNumber);
newRandomNumber += 7;
console.log(newRandomNumber);


// Extra Bonus: 9 completed all on one line
let newRandomNumber2 = Math.floor(Math.random()* 17)+7






