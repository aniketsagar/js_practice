// debounce pattern
const debounce = (func,delayMs = 1000)=>{
    let timeoutId = null; 
    return (...args)=>{   // ...args is multiple args
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func.apply(null,args); // apply calls the function after applying arguments to it
        },delayMs)
    };
}; 
