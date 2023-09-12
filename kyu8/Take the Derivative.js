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
  //log between steps
  function logBetweenStepper(min,max,step){
    let i=min
    while(i<=max){
        console.log(i)
          i=i+step
    }
   
}
//divisible by either 3 or 5, but not both.
function fizzBuzzWhile(max) {
    let i = 0;
    while (i < max) {
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
      i++;
    }
  }
  