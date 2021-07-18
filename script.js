var randNumber;
var pinCount = 3;
if (pinCount) {
    document.getElementById("generate-btn").addEventListener("click", function () {
        randNumber = Math.round(1000 + Math.random() * 9000);
        document.getElementById("generate-num").value = randNumber;
    })

    var buttons = document.getElementsByClassName("button");

    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        var userInput = parseFloat(document.getElementById("user-input").value);
        if (userInput = "NaN") userInput = 0;
        element.addEventListener("click", function () {
            var button = element.innerHTML;
            if (button >= "0" && button <= "9") {
                if(userInput==0 && button == "0"){
                    alert("There won't be a 0 at the beginning of any pattern.");
                }
                else if (userInput * 10 <= 9999) {
                    userInput = userInput * 10 + parseFloat(button);
                    document.getElementById("user-input").value = userInput;
                }
                else {
                    alert("You're only able to enter maximum 4 digits.");
                }
            }
            else if (button == "C") {
                userInput = "";
                document.getElementById("user-input").value = "";
            }
            else {
                userInput = Math.floor(userInput / 10);
                if (userInput == 0) {
                    document.getElementById("user-input").value = "";
                }
                else {
                    document.getElementById("user-input").value = userInput;
                }
            }
        })
        
    }

    document.getElementById("submit-btn").addEventListener("click", function () {
        if (!pinCount) {
            alert("You've access all your chances!");
        }
        else {
            console.log(randNumber);
            console.log(userInput);
            if (userInput == randNumber) {
                document.getElementById("not-matched").style.display = "none";
                document.getElementById("matched").style.display = "block";
                pinCount = 3;
                document.getElementById("action-left").innerHTML = pinCount + " try left";
            }
            else {
                pinCount--;
                if (pinCount)
                    document.getElementById("action-left").innerHTML = pinCount + " try left";
                else {
                    document.getElementById("action-left").innerHTML = "You dumbass.. You couldn't even matched that easy number.";
                }
                document.getElementById("matched").style.display = "none";
                document.getElementById("not-matched").style.display = "block";
            }
        }
    })
}