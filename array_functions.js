let a = [1,2,3,4,5,6,7,8,9];

const parityList = a.map( n => { if(n%2===0) return "even"; return "odd";
})

console.log(parityList);

const findMax = a.find((n) => {n > 5})

const o = {
    "x":1,
    "y":2
}


function addProp(obj,k,v){
    obj[k] = v;
}

addProp(o,"a",100);

console.log(o);