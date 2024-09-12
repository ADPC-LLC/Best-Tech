/** @format */
function printNumbers() {
  const conditions = {
    3: "Apple",
    5: "Pear",
  };

  for (let i = 1; i <= 100; i++) {
    let output = "";

    for (const key in conditions) {
      if (i % key === 0) {
        output += conditions[key];
      }
    }

    console.log(output || i);
  }
}

printNumbers();
