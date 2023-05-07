

// Set the timer to 60 seconds
var timeLeft = 40;

// Update the timer every second
var countdown = setInterval(function () {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    document.getElementById("timer").innerHTML =
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    timeLeft--;

    // Lock the form and stop the timer when time is out
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("MatrixForm").classList.add("locked");
        document.getElementById("timer").innerHTML = "Time's up!";
        alert("Time's up!");
        location.reload();
    }
}, 1000);


// Disable form inputs after time is out
var formInputs = document.querySelectorAll("#myForm input");
for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        if (document.getElementById("myForm").classList.contains("locked")) {
            this.value = "";
            this.disabled = true;
        }
    });
}

document
    .getElementById("MatrixForm")
    .addEventListener("submit", function (event) {
        function stringToHex(str) {
            let hex = "";
            for (let i = 0; i < str.length; i++) {
                hex += str.charCodeAt(i).toString(16);
            }
            return hex;
        }

        var name = stringToHex(document.getElementById("name").value);
        console.log(name);

        var NameInHex = document.getElementById("NameInHex").value;
        console.log(NameInHex);
        if (name.localeCompare(NameInHex) == 0) {
            console.log("you are in the matrix");
            alert("you are out of the matrix");
        } else {
            console.log("you are not in the matrix");
            alert("you are  in the matrix");
            // event.preventDefault();
        }
    });

var canvas = document.getElementById("matrix");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var columns = Math.floor(canvas.width / 15);
var matrix = [];
for (var i = 0; i < columns; i++) {
    matrix[i] = Math.floor(Math.random() * canvas.height);
}
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = "15px monospace";
    for (var i = 0; i < columns; i++) {
        var character = String.fromCharCode(
            Math.floor(Math.random() * 94) + 33
        );
        ctx.fillText(character, i * 15, matrix[i]);
        if (matrix[i] > canvas.height && Math.random() > 0.975) {
            matrix[i] = 0;
        }
        matrix[i] += 15;
    }
}
setInterval(draw, 50);
