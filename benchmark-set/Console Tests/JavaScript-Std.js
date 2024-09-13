/** @format */

function printNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
      console.log("Five-Seven");
    } else if (i % 5 === 0) {
      console.log("Five");
    } else if (i % 7 === 0) {
      console.log("Seven");
    } else {
      console.log(i);
    }
  }
}

printNumbers();
