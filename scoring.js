

//add up dice/score
export function updateScore() {
    score = 0;
    dice_set.forEach((item) => {
        if (item.classList.contains("held") || container2_div.contains(item)) {
            score += item.value;
        }
    });
    score_display.textContent = score;
}