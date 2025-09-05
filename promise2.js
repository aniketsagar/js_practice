const fakeRequest = (url) =>{
    return new Promise((resolve, reject)=>{
        console.log("fake apis >>> hahahahahaha")
        setTimeout(()=>{
            const pages ={
                "/users" : [
                    {id:1, name:"spiderman"},
                    {id:2, name:"catwoman"}
                ],
                "/user/1":{
                    id:1,
                    name:"spiderman",
                    city:"newyork",
                    fans:"200",
                    topPost:201
                },
                "/user/2":{
                    id:2,
                    name:"catwoman",
                    city:"gotham",
                    fans:"500",
                    topPost:301
                },
                "/posts/301":{
                    id:301,
                    title:"hey I am a fan!!"
                },
                "/about": "this is about page"
            };
            const data = pages[url];
            
            if(data){
                resolve({status:200, data});
            }else{
                reject({status:404});
            }
        },1000)
    })
}

// fakeRequest("/a").then((r)=>{
//     console.log("Request 200ed");
//     console.log(r)
// }).catch((e)=>{
//     console.log("request 404rd");
//     console.log(e)
// })


// fakeRequest("/users").then((r)=>{
//     console.log("Request 200ed");
//     console.log(r)
// }).catch((e)=>{
//     console.log("request 404rd");
//     console.log(e)
// })


// fakeRequest("/about").then((r)=>{
//     console.log("Request 200ed");
//     console.log(r)
// }).catch((e)=>{
//     console.log("request 404rd");
//     console.log(e)
// })


// promise chaining
// this is the regular nested flow 
// fakeRequest("/users").then((res)=>{
//     console.log("user result", res.data);
//     const id = res.data[1].id;
//     const url = `/user/${id}`
//     fakeRequest(url).then((res)=>{
//         console.log(`user_data for ${id}`, res.data);
//         const postId = res.data.topPost
//         fakeRequest(`/posts/${postId}`).then((res)=>{
//             console.log(res)
//         }).catch((e)=>{
//             console.log(e);
//         })
//     }).catch((e)=>{
//         console.log(e)});
//     }).catch((e)=>{
//     console.log(e)
// });

// promise chaining , we can do this because we are returning 
// promise from the calling function
fakeRequest("/users").then((res)=>{
    if(res && res.data && res.data.length){
        console.log("users:", res.data)
        const id = res.data[1].id;
        return fakeRequest(`/user/${id}`)
    }else{
        const err = new Error("Error in api call 1: user list not found")
        throw err;
    }
}).then((res)=>{
    console.log(res);
    if(!res || !res.data){
        throw new Error(`Error in api call 2: user data not found`);
    }else{
        const postId = res.data.topPost;
        return fakeRequest(`/posts/${postId}`);
    }
   
}).then((res)=>{
    console.log(res);
    if(!res || !res.data ){
        throw new Error(`Error in api call 3: post data not found for post`);
    }else{
        console.log(`post data for `, res.data);
    }
}).catch((err)=>{
    console.log("Error :", err);
})




