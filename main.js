let expj = document.getElementById("exp");
let ansj = document.getElementById("ans");
let expVal = "";
let buttons = document.querySelectorAll("button");
for (ele of buttons) {
  //   console.log(ele);
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
    //     if (keyVal.endsWith("=")) {
    //       keyVal += "";
    //       console.log("nhsbxj");
    //       expVal = ansj.value;
    //     }
  });
}
