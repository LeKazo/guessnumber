var randomNumber = Math.floor(Math.random() * 20) + 1; //creates a random number between 1 and 10//

function myFunction(){

    var x, text; //declaring 2 variables to be used.//


    //assigning the value of x//
    x = document.getElementById("numb").nodeValue;
    // get the value of the input field with id="numb"


    //If x is not a number or less then one or grearter then 10
    //checking to validate they entered a number first.
    if (x<1 || x>20){
        text = "Hey there, you should totally enter a number between 1 and 20. please and thank you :)";
        document.getElementById("response").innerHTML = text;
    }else if (x == randomNumber)
    {
        text = "Wow, good guesser";
        document.getElementById("response").innerHTML = text;
        document.getElementById("answer").innerHTML = "the number i chose was" + randomNumber;
        document.getElementById("yourGuess").innerHTML = "you chose " + x;
    } else {
        text = "nope try again :)";
        document.getElementById("response").innerHTML = text;
        document.getElementById("answer").innerHTML = "the number i chose was " + randomNumber;
        document.getElementById("yourGuess").innerHTML = "you choose " + x;
    }
           
       }
       