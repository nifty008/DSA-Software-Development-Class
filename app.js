const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Ask for the first number
readline.question("Enter the first number: ", (num1) => {
  
  // 2. Ask for the second number
  readline.question("Enter the second number: ", (num2) => {
    
    // Convert text inputs into actual numbers
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // 3. Do the math
    console.log("\n--- CALCULATING RESULTS ---");
    console.log(`Addition: ${n1} + ${n2} = ${n1 + n2}`);
    console.log(`Subtraction: ${n1} - ${n2} = ${n1 - n2}`);
    console.log(`Multiplication: ${n1} * ${n2} = ${n1 * n2}`);
    console.log(`Division: ${n1} / ${n2} = ${n2 !== 0 ? n1 / n2 : "Cannot divide by zero!"}`);
    
    readline.close();
  });
});