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
  function fizzBuzzNested(max) {
    for (let i = 0; i < max; i += 1) {
      if (i % 3 === 0) {
        if (i % 5 !== 0) {
          console.log(i);
        }
      } else if (i % 5 === 0) {
        console.log(i);
      }
    }}

    function logBetweenWhile(lowNum, highNum) {
        let i = lowNum;
        while (i <= highNum) {
          console.log(i);
          i++;
        }
      }


      function alphabetPosition(text) {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        
        return text.toLowerCase()
                   .split('')
                   .filter(t => letters.indexOf(t) > -1)
                   .map(t => letters.indexOf(t)+1 || '')
                   .join(' ');
      }

  // When you have app try to talk about the app you built more    