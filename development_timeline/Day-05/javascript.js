var playing = false;
var score;

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
        document.getElementById("timeremaining").style.display = "block"; 
        
        // change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
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
    