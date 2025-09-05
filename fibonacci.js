/**
 * fib(n) = n if n in {0,1}
 * fib(n) = fib(n-2)+fib(n-1) if n > 1
 */


function fib(n){
    console.log("fib [",n,"]");
    if(n == 0 || n == 1){
        return n;
    }else{
        return fib(n-1) + fib(n-2);
    }
}

function fibMemo(n){
    let mem = {} //new Object();
    mem[0] = 0;
    mem[1] = 1;
    console.log("fib(n)", n)
   
    if(n===0 || n=== 1){
        return mem[n];
    }else{
        if(!mem[n]){
            mem[n] = fibMemo(n-1) + fibMemo(n-2);
        }
        console.log("mem [",n,"]",mem[n]);
        return mem[n];
      
    }
}
console.log(fib(6));
console.log(fibMemo(6));