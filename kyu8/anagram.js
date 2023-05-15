function anagram(firstword,secondword){
   let f= firstword.toLowerCase().split('').sort().join('')
   let g=secondword.toLowerCase().split('').sort().join('')
   return f==g? true:false
}

console.log(anagram('silent','listen'));