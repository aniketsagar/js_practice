function f1(x){
    console.log(x,"this is callback");
}


function f2(y){
    if(y>2){
        f1(y);
    }else{
        console.log("no callback");
    }
}


f2(10);

f2(0);