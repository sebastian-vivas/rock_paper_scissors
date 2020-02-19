var botScore=0,
	playerScore=0;
document.getElementById("foot").onclick=playerThrowsRock;
document.getElementById("cockroach").onclick=playerThrowsScissors;
document.getElementById("nuclear-bomb").onclick=playerThrowsPaper;

function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"foot");
	displayBotMessage(botsWeapon);
}

function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"cockroach");
	displayBotMessage(botsWeapon);
}

function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"nuclear-bomb");
	displayBotMessage(botsWeapon);
}

function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="foot";
	if(randomNumber<.33){
		botsWeapon="cockroach";
	}
	else if(randomNumber<.6666){
		botsWeapon="nuclear-bomb";
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Bot: Boo! A tie. Let's do another one!");
	}
	else if(
		(botsWeapon=="cockroach" && playersWeapon=="nuclear-bomb") ||
		(botsWeapon=="nuclear-bomb" && playersWeapon=="foot") ||
		(botsWeapon=="foot" && playersWeapon=="cockroach")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Bot: GOOOOT EMMMM");
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Bot: ..I was just learning how to love...");
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

function displayBotMessage(msg){
	document.getElementById("weapon").innerHTML=msg;
}
