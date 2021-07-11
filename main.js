let expj = document.getElementById("exp");
let ansj = document.getElementById("ans");
let expVal = "";
let mirrorVal = "";
let buttons = document.querySelectorAll("button");
for (ele of buttons) {
    console.log(ele);
    ele.addEventListener("click", (e) => {
        let keyVal = e.target.innerHTML;
        let keyVal2 = keyVal;
        console.log(keyVal);
        if (keyVal == "=") {
            ansj.value = eval(expVal);
        } else if (keyVal == "C") {
            expVal = "";
            ansj.value = "";
        } else if (keyVal == "×") {
            expVal += "*";
            console.log("× is print");
        } else if (keyVal == "÷") {
            expVal += "/";
        } else if (keyVal == "DEL") {
            expVal = expVal.slice(0, -1);
        } else {
            expVal += keyVal;
        }
        expj.value = expVal;
    });
}

window.addEventListener("keydown", (e2) => {
    let keyVal = e2.key;
    // console.log(e2);
    console.log(keyVal);
    if (keyVal == "=" || keyVal == "Enter") {
        ansj.value = eval(expVal);
    } else if (keyVal == "Delete") {
        expVal = "";
        ansj.value = "";
    } else if (keyVal == "*") {
        expVal += "*";
        console.log("× is print");
    } else if (keyVal == "×") {
        expVal += "*";
        console.log("× is print");
    } else if (keyVal == "÷") {
        expVal += "/";
    } else if (keyVal == "Backspacs") {
        expVal = expVal.slice(0, -1);
    } else {
        expVal += keyVal;
    }
    expj.value = expVal;
});