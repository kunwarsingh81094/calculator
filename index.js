const display = document.querySelector(".display"),
    buttons = document.querySelectorAll(".buttons button"),
    operators = ["+", "-", "*", "/", "%", "."];
    
display.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "Enter":
        case "=":
            display.value = solveExpression(display.value);
            break;
        case "Backspace":
            return;
    }
    if ((e.keyCode > 47 && e.keyCode < 58) || operators.includes(e.key)) {
        console.log(true);
    } else {
        console.log(e);
        e.preventDefault();
    }
});
buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (this.dataset.value == "AC") {
            display.value = 0;
        } else if (this.dataset.value == "DEL") {
            display.value = display.value.substring(0, display.value.length - 1) | 0;
        } else if (this.dataset.value == "=") {
            display.value = solveExpression(display.value);
        } else {
            if (display.value.substr(0, 1) == "0") {
                display.value = display.value.substr(1);
            } else if (display.value.substr(0, 5) == "Error") {
                display.value = display.value.substr(5);
            }
            display.value += this.dataset.value;
        }
    });
});
function solveExpression(exp) {
    let res;
    try {
        res = eval(exp) || 0;
    } catch (e) {
        return "Error";
    }
    return res;
}