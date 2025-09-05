//sync function

function tryMe(){
    return "you Tried!!!";
};

console.log( tryMe());

// the keyword async makes a function return a promise
// the return value is sent in resolved and the err if thrown is 
// sent in reject 
async function addTwo(a,b){
    console.log(typeof(a),typeof(b))
    if(typeof(a)!=="number" || typeof(b) !=="number")
        throw new Error("please enter two numbers",{a,b});
    return a+b;
};

function addTwoPromise(a,b){
    return new Promise((resolve, reject)=>{
        if(typeof(a)!=="number" || typeof(b) !=="number")
        {
            const err = new Error("please enter aaaaa two numbers",{a,b});
            reject(err);
        }else{
            const sum = a+b;
            resolve(sum);
        }
    });
};


// console.log(addTwoPromise(5,6));
// console.log(addTwoPromise("r",6));

// async function sayHi(){
//    return "HIIIIIIII";
// };

// // const a = addTwo(3,4);
// // console.log(a);

// // addTwo(4,5).then((result, err)=>{
// //     console.log(result);
// //     console.log(err)
// // })

// console.log(addTwo("r",5));
// addTwo("r",5).then((result, err)=>{
//     console.log(result);
//     console.log(err)
// }).catch((err)=>{
//     console.log("Error adasas", err);
// });

// b = sayHi();
// console.log(b)

// addTwo("b","c")

