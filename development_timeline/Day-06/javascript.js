var playing = false;
var score;
var action;
var timeremaining;

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
    
}