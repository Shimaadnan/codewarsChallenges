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