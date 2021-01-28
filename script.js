var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
//var d6 = document.getElementById("d6");

var container1_div = document.querySelector("#dice-container-1");
var container2_div = document.querySelector("#dice-container-2");
const score_display = document.getElementById("score_display");
var score = 0;
const dice_set = [d1, d2, d3, d4, d5];
const dice_container = document.getElementById("dice-container");

const roll_btn = document.getElementById("roll");
const reset_btn = document.getElementById("reset");
const submit_btn = document.getElementById("submit");

roll_btn.addEventListener("click", () => {
    rollDice();
});
reset_btn.addEventListener("click", () => {
    resetDice();
})

dice_set.forEach((item) => {
    item.addEventListener("click", () => {
        holdDice(item);
        //sortDice(item);
        updateScore();
    });
    item.value = parseInt(item.innerText);
});
submit_btn.addEventListener("click", function () {
    console.log("submitted");
    submit();
});

rollDice();

//roll dice
function rollDice() {
    dice_set.forEach((item) => {
        if (!item.classList.contains("held") && container1_div.contains(item)) {
            item.value = Math.ceil(Math.random() * 6);
            item.textContent = item.value;
        }
    });
    console.log("rolled dice");
}

function displayDice() { }

//hold dice
function holdDice(item) {
    if (container1_div.contains(item)) {
        item.classList.toggle("held");
    }
}

// //sort dice
// function sortDice(item) {
//     if (item.classList.contains("held")) {
//         dice_container.insertBefore(item, dice_container.firstChild);
//     } else {
//         dice_container.appendChild(item);
//     }
// }

//add up dice/score
function updateScore() {
    score = 0;
    dice_set.forEach((item) => {
        if (item.classList.contains("held") || container2_div.contains(item)) {
            score += item.value;
        }
    });
    score_display.textContent = score;
}

//reset dice
function resetDice() {

    dice_set.forEach((item) => {
        item.classList.remove("held");
        if (container2_div.contains(item)) container1_div.append(item);
    });
    score = 0;
    rollDice();
    updateScore();
}

function checkDice() { }

function submit() {
    dice_set.forEach((item) => {
        if (item.classList.contains("held") && container1_div.contains(item)) {
            container2_div.append(item);
            item.classList.remove("held");
        }
    });
}
