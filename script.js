document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            button.classList.add("clicked");
            setTimeout(() => button.classList.remove("clicked"), 150);
        });
    });
});

function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        shakeDisplay();
    }
}

function appendFunction(func) {
    let display = document.getElementById("display");
    let value = display.value;

    try {
        switch(func) {
            case 'sin': display.value = Math.sin(eval(value)); break;
            case 'cos': display.value = Math.cos(eval(value)); break;
            case 'tan': display.value = Math.tan(eval(value)); break;
            case 'log': display.value = Math.log10(eval(value)); break;
            case 'sqrt': display.value = Math.sqrt(eval(value)); break;
            case 'exp': display.value = Math.exp(eval(value)); break;
            case 'fact': display.value = factorial(parseInt(value)); break;
            default: alert("Fungsi tidak dikenali");
        }
    } catch (e) {
        shakeDisplay();
    }
}

function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function shakeDisplay() {
    let display = document.getElementById("display");
    display.classList.add("shake");
    setTimeout(() => display.classList.remove("shake"), 500);
}


document.addEventListener("mousemove", (e) => {
    let trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);

    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    setTimeout(() => {
        trail.remove();
    }, 300);
});
