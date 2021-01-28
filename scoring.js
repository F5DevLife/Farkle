// scoring.js

import { dice_set, container2_div } from "/script.js"

//add up dice/score
export function updateScore() {
    var score = 0;
    dice_set.forEach((item) => {
        if (item.classList.contains("held") || container2_div.contains(item)) {
            score += item.value;
        }
    });
    score_display.textContent = score;
    console.log("called updateScore from scoring.js") // Used for debugging
}


/**
 * TODO:  Add the following scoring functions:
 * 
 * checkDice()
 * 
 * checkOnes()
 * checkTwos()
 * checkThrees()
 * checkFours()
 * checkFives()
 * 
 * 
 * 
 * 
 */
 