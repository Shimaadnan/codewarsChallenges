// Given an array, return the difference between the count of even numbers and the count of odd numbers.
//  0 will be considered an even number.
function solve(a){
    let counteven=0;
    let countodd=0;
    
    for(let item of a){
      if(typeof(item)==='number'){  if(item%2===0){counteven++}
      else{countodd++}
    }}
    
    return counteven-countodd;
  };
  