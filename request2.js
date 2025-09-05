// request using fetch api 
// this api supports promises
// the fetch api returnes data as a readableStream
// This is different from text outputs, and can be very large
// there is a function in fetch api body.json() which reads and 
// converts the whole stream to a json. this function is async 
// and returns a promise because streams can be very large.
fetch("https://swapi.info/api/planets").then((response)=>{
    console.log(response); // returns our data in body as readableStream
    if(response.status !== 200){
        const e = {"status":response.status,"message": response.statusText}
        throw new Error("Error: request failed in api https://swapi.info/api/planets", e);
    } 
    return response.json(); // returns a promise
   

}).then((data)=>{
    console.log(data[0]);
    const film = data[0].films[1];
    return fetch(film)

}).then((response)=>{
    if(response.status !== 200){
        throw new Error(" Error in api ", 
            {"status":response.status, "message":response.statusText});
    }
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("error::", err);
})