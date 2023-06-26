var sum_pairs=function(ints, s){
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
      if (seen[s - ints[i]]) console.log(`result=${[s - ints[i], ints[i]]}`); 
      seen[ints[i]] = true
      console.log(seen);
    }
  }
  console.log(sum_pairs([10,5,2,3,7,5],10));