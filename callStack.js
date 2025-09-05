// sync functions 
let value = 1;
function addTwoNumbers (x,y){
    return x+y;
};

function changeVal(callback ){
    callback();
};

changeVal(()=>{
    value = 2;
});
//value logged is 2 as value = 2 happens before console.log
console.log(value);



// async 

let v = 3; 

function changeValAsync(callback){
    setTimeout(callback, 2000);
};

changeValAsync(()=>{
    v = 4;
});
// this should print 3 as console.log executes before 2 seconds 
console.log(v);