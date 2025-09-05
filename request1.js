// XHRs
// This is the OG form of sending requests. Not in use anymore

const myReq = new XMLHttpRequest();

myReq.addEventListener("load",()=>{
    console.log(this) // here "this" refers to global context because we are using
                     // ()=>{ } arrow functions since they don't have access to this
    // hence below line doesn't work
    //const data = JSON.parse(this.responseText);
    // this works
    const data = JSON.parse(myReq.responseText);
    //console.log(data);
     console.log(data[0].residents)
    const firstResident = data[0].residents[0];
    const pplReq = new XMLHttpRequest();
    pplReq.addEventListener("load",()=>{
        console.log("resident 1", JSON.parse(pplReq.responseText));
    })
    pplReq.open("get",firstResident,true);
    //myReq.setRequestHeader("Accept","application/json");
    pplReq.send();
});

myReq.addEventListener("onerror",(err)=>{
    console.log("error::",err);
});

myReq.open("get","https://swapi.info/api/planets",true);
//myReq.setRequestHeader("Accept","application/json");
myReq.send();

