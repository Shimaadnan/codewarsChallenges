function reverseVowels(str) {
    let s=str.split('')
   let vowels=['a','e','u','i','o','A','E','I','O','U']
   const vow=s.filter(i=>vowels.includes(i))
   const result=str.replace(/[auioe]/ig,_=>vow.pop())
   return result;
 }