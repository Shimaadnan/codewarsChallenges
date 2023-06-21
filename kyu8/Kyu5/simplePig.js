// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.



function pigIt(str){let str="Pig latin is cool"
let arr=str.split(' ')
let t=arr.map(item=>(item.substring(1)+item[0]+'ay'))

return (t.join(' '));}
