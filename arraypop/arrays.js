//#region Random Number Generator
function randomNumberGenerator(randomNumber){
    var randomNumber =  Math.floor(Math.random()*20+1);
    console.log("Random Number is: " + randomNumber);
    document.getElementById("theRandomNumber").innerHTML="Guess the number: "+randomNumber;
    return randomNumber;
}
randomNumber = randomNumberGenerator();
//#endregion

var allGuesses = [];
var playerScore = 0;
//#region Score
function myFunction(){
    var PlayerGuesses
    PlayerGuesses = document.getElementById("input").value;

    
    document.getElementById("numberGuessed").innerHTML = allGuesses;


    if (allGuesses.includes(PlayerGuesses)==true){
    document.getElementById("duplicateNumber").innerHTML = "Yo... You already tried and guessed this number.";

    } else {
        document.getElementById("duplicateNumber").innerHTML = "Negative";
        
    if (PlayerGuesses == randomNumber){
        var text = "Score is going up!";
    document.getElementById("message").innerHTML = text;
    playerScore = playerScore + 5;
    } else{
    playerScore = playerScore - 2;
    var text = "Score is going down!";
    document.getElementById("message").innerHTML = text;
    
    }
    allGuesses.push(PlayerGuesses);
    }

    

    document.getElementById("PlayerScore").innerHTML = playerScore;
};

var click=0;
function click(){
    click++
    document.getElementById('click').innerHTML=click;
}
//#endregion

document.getElementById("reset").onclick = function() {
    document.getElementById("PlayerScore").innerHTML = "";
    
 };
