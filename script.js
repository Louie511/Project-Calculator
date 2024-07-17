document.addEventListener('DOMContentLoaded', () => {
    let inputs = [];
    let operatorPressed = false; 
    const display = document.querySelector(".screen");

    function add(a, b){
        return a + b;
    }
    function multiply(a, b){
        return a * b;
    }

    function subtract(a, b){
        if (a === null) return -b;
        return a - b;
    }

    function divide(a, b){
        return b !== 0 ? a / b : 0;
    }

    function operate(operator, a, b){
        switch (operator) {
            case "+":
                return add(a, b);
            case "-":
                return subtract(a, b);
            case "x":
                return multiply(a, b);
            case "÷":
                return divide(a, b);
            default:
                return null;
        }
    }

    const deleteBtn = document.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        let numStr = display.textContent.trim();
        if (numStr.length > 1){
            display.textContent = numStr.slice(0, -1);
        } else {
            display.textContent = "0";
        }
    });

    document.querySelectorAll("#numPad button").forEach(button => {
        button.addEventListener("click", () => {
            const helloMsg = document.querySelector("p.textContent");
            if (helloMsg){
                helloMsg.textContent = "";
            }
            
            const buttonText = button.textContent.trim();

            if (!isNaN(buttonText) || buttonText === ".") {
                if (operatorPressed) {
                    display.textContent = buttonText; 
                    operatorPressed = false; 
                } else {
                    if (display.textContent === "0"){
                        display.textContent = buttonText;
                    } else {
                        display.textContent += buttonText;
                    }
                }
            } else if (["+", "-", "x", "÷"].includes(buttonText)){
                if (display.textContent !== ""){
                    inputs.push(parseFloat(display.textContent));
                }
                inputs.push(buttonText);
                operatorPressed = true; 
                console.log(inputs);

            } else if (buttonText === "="){
                if (display.textContent !== "") {
                    inputs.push(parseFloat(display.textContent));
                }
                let result = inputs[0];
                for (let i = 1; i < inputs.length; i += 2){
                    const operator = inputs[i];
                    const nextNumber = inputs[i + 1];
                    result = operate(operator, result, nextNumber);
                }
                display.textContent = result;
                inputs = [];
            }
        });
    });

    const clearBtn = document.querySelector(".clearBtn");
    clearBtn.addEventListener("click", () => {
        const helloMsg = document.querySelector(".textContent");
        if (helloMsg){
            helloMsg.textContent = "";
        }
        display.innerHTML = "0";
        inputs = [];
        operatorPressed = false; 
    });

    const addButton = document.querySelector(".add");
    addButton.addEventListener("click", () => {
        display.textContent += addButton.textContent;
    });

    const multiplyButton = document.querySelector(".multiply");
    multiplyButton.addEventListener("click", () => {
        display.textContent += multiplyButton.textContent;
    });

    const subtractButton = document.querySelector(".subtract");
    subtractButton.addEventListener("click", () => {
        if (display.textContent === "0"){
            display.textContent = "";
            display.textContent += subtractButton.textContent;
        } else {
            display.textContent += subtractButton.textContent;
        }
    });

    const divideButton = document.querySelector(".divide");
    divideButton.addEventListener("click", () => {
        display.textContent += divideButton.textContent;
    });
});

