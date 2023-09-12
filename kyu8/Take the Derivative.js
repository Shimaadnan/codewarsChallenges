//Take the Derivative
function derive(coefficient,exponent) {
  
 return `${coefficient*exponent}x^${exponent-1}` 
}

console.log(derive(4,5));

//concept of Loop
function logBetweenWhile(lowNum, highNum) {
    let i = lowNum;
    while (i <= highNum) {
      console.log(i);
      i++;
    }
  }
  // the multiples of 5 that are less than the max.
  function printFives1(max) {
    let i = 0;
    while (i < max) {
      if (i % 5 === 0) {
        console.log(i);
      }
      i++;
    }
  }