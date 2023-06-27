function generateHashtag(str){
    if(str===''|| str.trim()==='') return false
let words=str.split(' ')
let result=words.map(word=>word.charAt(0).toUpperCase()+word.slice(1))
console.log(result);
}
console.log(generateHashtag('Hello yyyy'));