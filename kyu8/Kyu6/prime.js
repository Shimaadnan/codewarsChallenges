function prime(n){
    let res=[]
for(let i=2;i<n;i++){
    if(n%i===0){
 res.push(1)
    }
}
return res.length!==0? false:true;
}
console.log(prime(23));