/**
 * fact(n) = 1 if n in {0,1}
 * fact(n) = n*fact(n-1) for n > 1
 * @param {} n 
 */
function fact(n){
    console.log("fact[",n,"]")
    if(n == 0 || n == 1){
        return n;
    }else{
        return n*fact(n-1);
    }
}

console.log(fact(6));