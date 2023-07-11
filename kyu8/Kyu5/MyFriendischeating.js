function removeNb (n) {
    let sum=n*(n+1)/2
    let result=[]
    for(b=n;b>0;b--){
      a=(sum-b)/(b+1)
    
    if(a<n && Number.isInteger(a)){
      result.push([a,b])
    }
      }
    return result
  }