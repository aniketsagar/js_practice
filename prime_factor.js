/*
  write a program to find prime factors of a given number
*/


function prime_factorize(n){
    let result = [];

    for(let i=2; i<=n/2; i++){
	console.log("i , n, n/2", i,n,n/2);
	if( n%i == 0){
	    result.push(i);
	    n = n/i;
	    i = 1;
	}else if(i==Math.floor(n/2)){
	    result.push(n);
	    
	}
	  
   }
    
    
    return result;
}

console.log("factors",prime_factorize(15));
console.log("factors",prime_factorize(129));
console.log("factors",prime_factorize(13));
console.log("factors",prime_factorize(60));
