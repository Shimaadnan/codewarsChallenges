let x = 7;
x++;
x - 2;
x *= 3;
// console.log(x);
function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  console.log(addThreeNumbers(1, 2, 3, 4)); // => ???
  //JavaScript Magic
  function isCool(string) {
    let coolSentence = string + " is cool!"
    console.log(coolSentence)
    return coolSentence
  }
  console.log('hi i am shima'.indexOf('Dani'))
  function isSubstring(searchString, subString) {
    // your code here...
    let lowersearchstring=searchString.toLowerCase()
    let lowersubString=subString.toLowerCase()
    return (lowersearchstring.indexOf(lowersubString) !== -1 ?  true :  false) 
  }