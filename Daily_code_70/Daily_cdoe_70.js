function isPerfectNumber(num) {
    // Convert the number to a string to work with its digits
    const numStr = num.toString();
    
    // Initialize a variable to store the sum of digits
    let sum = 0;
  
    // Loop through each digit in the string and sum them up
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]);
    }
  
    // Check if the sum of digits is equal to 10
    return sum === 10;
  }
  
  function findNthPerfectNumber(n) {
    if (n < 1) {
      return "Invalid input";
    }
  
    let count = 0;
    let currentNumber = 0;
  
    while (count < n) {
      currentNumber++;
      if (isPerfectNumber(currentNumber)) {
        count++;
      }
    }
  
    return currentNumber;
  }
  
  // Example usage:
  const n = 1; // Change n to the desired value
  const nthPerfectNumber = findNthPerfectNumber(n);
  console.log(`The ${n}-th perfect number is: ${nthPerfectNumber}`);
  