/* WAP to generate a sequence by following rule
   if n = 1 stop
   if n is even devide by 2
   if n is odd multiply by 3 and add 1
*/

function ebg_seq(n){
    while(n>1){
	let msg ="";
	if(n==1){
	    console.log(" we are at the end... n = 1");
	    break;
	}else if(n%2 === 0){
	    msg = n + " " + "is even so we devide it by 2. New  n = " + (n/2);
	    console.log(msg);
	    n = n/2;
	}else{
	    msg = n+ " " + " is odd so we multiply it by 3 and add 1. New n = " + (3*n +1);
	    console.log(msg);
	    n = 3*n+1;
	}
    }
    return 0;
}

console.log(ebg_seq(15));
