var wins = 0;
var losses = 0;
var numbertoMatch;
 var   randomNumber;
 var   randomNumber2;
 var   randomNumber3;
 var   randomNumber4;
 var   numbertoAdd;

 function play (){
    
    numbertoMatch = Math.floor(Math.random() * 121) + 13
    randomNumber = Math.floor(Math.random() * 13) + 1
    randomNumber2 = Math.floor(Math.random() * 13) + 1
    randomNumber3 = Math.floor(Math.random() * 13) + 1
    randomNumber4 = Math.floor(Math.random() * 13) + 1
    numbertoAdd = 0
    document.getElementById("numberAttempt").innerHTML = "Your number is  " + numbertoMatch + " dont forget it!"
    document.getElementById("wins").innerHTML = "Wins: " + wins
    document.getElementById("loss").innerHTML = "Losses: " + losses
 }

function makeSure(num1, num2) {
    if (num1 === num2) {
        document.getElementById("numberAttempt").innerHTML = "You Won";
        wins ++;
        document.getElementById("wins").innerHTML = "Wins: " + wins
        $(".question").text("?")
        play()
        
    } else if (num1 > num2) {
        document.getElementById("numberAttempt").innerHTML = "You Lost";
        losses ++;
        document.getElementById("loss").innerHTML = "Losses: " + losses
        $(".question").text("?")
        play()
    }
    else { }
}

play() 

$(document).ready(function () {
    

    $("#button1").on("click", function () {
        $(this).text(randomNumber);
        numbertoAdd += randomNumber
        document.getElementById("numberAttempt").innerHTML = numbertoAdd
        makeSure(numbertoAdd, numbertoMatch)
    });
    $("#button2").on("click", function () {
        document.getElementById("button2").innerHTML = randomNumber2
        numbertoAdd += randomNumber2
        document.getElementById("numberAttempt").innerHTML = numbertoAdd
        makeSure(numbertoAdd, numbertoMatch)
    });
    $("#button3").on("click", function () {
        document.getElementById("button3").innerHTML = randomNumber3
        numbertoAdd += randomNumber3;
        document.getElementById("numberAttempt").innerHTML = numbertoAdd
        makeSure(numbertoAdd, numbertoMatch)
    });
    $("#button4").on("click", function () {
        document.getElementById("button4").innerHTML = randomNumber4
        numbertoAdd += randomNumber4
        document.getElementById("numberAttempt").innerHTML = numbertoAdd
        makeSure(numbertoAdd, numbertoMatch)
    });


});

