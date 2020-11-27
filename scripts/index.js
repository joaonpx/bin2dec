function convert() {
  let binaryNum = document.querySelector("#binary-number");
  let result = document.querySelector("#result-number");

  if (!binaryNum.value) {
    window.alert("Please, enter a binary number.");
  } else if (binaryNum.value.match(/^[0-1]+$/g) === null) {
    window.alert("Please, enter a binary number.");
  } else {
    let value = parseInt(binaryNum.value, 2);

    result.value = value;
  }
  binaryNum.value = "";
}
