var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

// if we are not playing
            //  reload page
        // if we are not playing
        // set score to 0
        // show countdown box
        // reduce time by 1sec in loops
            // time left?
                // yes->continue
                    // no gameover
        // change button to reset
        // generate new Q&A

// if we click on the start/reset
document.getElementById("startreset").onclick = function() {
    // if we are playing
    if (playing == true) {
        
        location.reload();  // the syntax for reloading the page, 
        
    } else { // if we are not playing
        
        // change mode to playing
        playing = true;
        
        // set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
        // show countdown box
        show("timeremaining");
        timeremaining = 60;
        
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box
        hide("gameover");
        
        // change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        // start countdown
        startCountdown();
        
        // generate a new Q&A
        
        generateQA();
    }
}

//Clicking on an answer box

for(i=1; i<5 ;i++) {
    document.getElementById("box"+i).onclick = function() {
    //check if we are playing
    if (playing == true) { //yes
        if(this.innerHTML == correctAnswer) {
            //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000); 
            
            //Generate new Q&A
            
            generateQA();
            
        } else {
            //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
            
            //Generate new Q&A
            
            generateQA();
        }
    }
}
}

// if we click on answer box
    // if we are playing
        // correct?
            // yes
                // increase score by 1
                // show correct box for 1 sec
                // generate new Q&A
            // no
                // show try again box for 1 sec

//functions

//start counter
function startCountdown() {
    action = setInterval(function() {
        timeremaining -= 1;
        if (timeremaining == 0) { // game over
            stopCountdown(); // stops the timer
            show("gameover");
            
            document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    }, 1000);
}

//stop counter
function stopCountdown() {
    clearInterval(action);
}

//hides an element
function hide(Id) { // "Id" parameter refers to the Id you'd like to hide
    document.getElementById(Id).style.display = "none";
}

//shows an element
function show(Id) { // "Id" parameter refers to the Id you'd like to show
    document.getElementById(Id).style.display = "block";
}

//generate question and multiple answers
function generateQA() {
    var x = 1 + Math.round(9*Math.random()); // generate a number between 1-10;
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x * y; // global var
    
    document.getElementById("question").innerHTML = x + "x" + y;
    /* NOTE: When we add numbers and strings, then everything becomes a string. */
    
    var correctPosition = 1 + Math.round(3 * Math.random());
    
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; // fills one box with the correct answer.
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for (i=1; i<5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1+ Math.round(9+ Math.random())); //a wrong answer.
            }
            while (answers.indexOf(wrongAnswer) > -1); // checks if the index of the wrong answer inside our array is greater than -1
            
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            
            answers.push(wrongAnswer); // before going to the next box, we are going to add wrongAnswers values to our array answers.
        }
    }
}