let expj = document.getElementById("exp");
let ansj = document.getElementById("ans");
let expVal = "";
let mirrorVal = "";
let buttons = document.querySelectorAll("button");
for (ele of buttons) {
    ele.addEventListener("click", (e) => {
        let keyVal = e.target.innerHTML;
        let keyVal2 = keyVal;
        console.log(keyVal);
        if (keyVal == "=") {
            ansj.value = eval(expVal);
            mirrorVal += "";
        } else if (keyVal == "C") {
            expVal = "";
            mirrorVal = "";
            ansj.value = "";
        } else if (keyVal == "×") {
            expVal += "*";
            mirrorVal += keyVal;
            console.log("× is print");
        } else if (keyVal == "÷") {
            expVal += "/";
            mirrorVal += keyVal;
        } else if (keyVal == "DEL") {
            expVal = expVal.slice(0, -1);
            mirrorVal = mirrorVal.slice(0, -1);
        } else {
            expVal += keyVal;
            mirrorVal += keyVal;
        }

        expj.value = mirrorVal;
    });
}

window.addEventListener("keydown", (e2) => {
    let keyVal = e2.key;
    console.log(keyVal);
    if (keyVal == "=" || keyVal == "Enter") {
        ansj.value = eval(expVal);
    } else if (keyVal == "Delete") {
        expVal = "";
        mirrorVal = "";
        ansj.value = "";
    } else if (keyVal == "*") {
        expVal += "*";
        mirrorVal += "×";
        console.log("× is print");
    } else if (keyVal == "÷") {
        expVal += "/";
        mirrorVal = keyVal;
    } else if (keyVal == "Backspace") {
        expVal = expVal.slice(0, -1);
        mirrorVal = mirrorVal.slice(0, -1);
    } else {
        expVal += keyVal;
        mirrorVal += keyVal;
    }

    expj.value = mirrorVal;
});
setInterval(() => {
    try {
        ansj.value = eval(expVal);
    } catch (error) {
        ansj.value += "";
    }
    if (ansj.value == "undefined") {
        // console.log("und");
        ansj.value = 0;
    }
}, 0.1);