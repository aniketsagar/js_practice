// Functions as return values

function multiplyBy(num){
    
    return function(x){
        let result = x * num;
        return result;
    }
}



let double = multiplyBy(2);

console.log(double(3));

let quadrupal = multiplyBy(4);

console.log(quadrupal(5));
