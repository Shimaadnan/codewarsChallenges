function nthFibo(n) {
    // Return the n-th number in the Fibonacci Sequence

    // if(n<2){
    //   return 0
    // }
    // if(n==2){return 1}

    // else{
    //   return nthFibo(n-1)+nthFibo(n-2)
    // }
    let[a,b]=[0,1]
    let res=[]
    for(let i=0;i<n;i++){
        [a,b]=[b,a+b]
        res.push(a)
    }
    return res[n-1]
  }