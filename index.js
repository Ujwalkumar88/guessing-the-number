let generateNumber;
let start = document.getElementById("start");
let check = document.getElementById("check");
let scoredisplay = document.getElementById("score");
let message = document.getElementById("message");
let input = document.getElementById("text-input");
let restart = document.getElementById("restart");
let score = 2;

// ❌ FIX: it's `disabled` not `disable`
check.disabled = true;

start.addEventListener("click", function () {
    generateNumber = Math.floor(Math.random() * 10) + 1;
    console.log(generateNumber);

    alert("The game has started! You can guess your number");
    input.disabled =false;
    check.disabled = false;

    // Reset score and message
    score = 10;
    scoredisplay.textContent = score;
    message.textContent = "";
    document.getElementById("text-input").value = "";
});

check.addEventListener("click", function () {
    let userguess = parseInt(document.getElementById("text-input").value);

    // ✅ Check for empty or NaN input
    if (!userguess && userguess !== 0) {
        alert("Please enter a number before checking!");
        return;
    }

    if (score > 0) {
        if (userguess === generateNumber) {
            message.textContent = "🎉 Congratulations, you won the game!";
            message.style.color = "green";
            check.disabled = true; // ✅ stop further guesses
        } else {
            score--;
            scoredisplay.textContent = score;

            message.textContent = userguess > generateNumber ? "📉 Too High!" : "📈 Too Low!";
             
            message.style.color = "red";

            if (score === 0) {
                message.textContent = "💀 Game Over!";
                message.style.color = "red";
                check.disabled = true; // ✅ properly stop game
            }
        }
    }
});

restart.addEventListener("click",function(){

    generateNumber= Math.floor(Math.random()*10);
    console.log("newnumber:",generateNumber);

    score =10;
    scoredisplay.textContent= score;
    message.textContent="";
    message.style.color ="black";

  document.getElementById("text-input").value ="";

  check.disabled = true;

})