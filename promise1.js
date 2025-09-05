function checkIfAliceIsHome(delay, success, failure){
    console.log("Knock Knock!!! Alice are you home!!!");
      let N = 3;
    setTimeout(()=>{
        console.log("-- here1")
      //Math.floor(Math.random() * 10);
        //N = 6;
        if(N > 5){
            success();
        }else{
            failure();
        }
    },delay);
};

// const aliceIsHome = ()=>{
//     console.log("Hey there!!! wait a sec, coming.");
// };

// const aliceIsNotHome = (callback)=>{
//     setTimeout(()=>{
//         console.log("................, looks like no one is home!!!")
//         callback();
//     }, 2000);
// };


const aliceIsHome = ()=>{
    console.log("Hey there!!! wait a sec, coming.");
};

const aliceIsNotHome = (callback)=>{
    //console.log("................, looks like no one is home!!!")
    setTimeout(()=>{
        console.log("................, looks like no one is home!!!")
         if(callback)callback();
    }, 2000);
};


//checkIfAliceIsHome(1000,()=>{aliceIsHome()},aliceIsNotHome(console.log("hahahah")))

// checkIfAliceIsHome(600,aliceIsHome,aliceIsNotHome(()=>{
//      console.log("Hmmm she is out of town maybe!!!");
//     // checkIfAliceIsHome(3000, aliceIsHome, aliceIsNotHome(()=>{
//     //     checkIfAliceIsHome(3000, aliceIsHome, aliceIsNotHome(()=>{
//     //         console.log("Hmmm she is out of town maybe!!!");
//     //     }));
//     // }));   
// }));


// // correct sequence
// checkIfAliceIsHome(1000,()=>{
// //success 
// aliceIsHome();
// },()=>{
//     aliceIsNotHome(()=>{
//         console.log("Hmmm she is out of town maybe!!!");
//         checkIfAliceIsHome(1000,()=>{
//             aliceIsHome();
//         },()=>{
//             aliceIsNotHome();
//         });
//     })
// });


// function isBobHome(){
//     console.log("Is BOB home!!!!");
//     setTimeout(()=>{
//         console.log("no answer !!!  lets try once more");
//         console.log("try2-> Are you there BOB!!!")
//         setTimeout(()=>{
//             console.log("lets try again !! final this time!!!");
//             console.log("try3-=> Hey BOB!!! Fucking Open the door man!!!")
//             setTimeout(()=>{
//                 console.log("........|.|....... door opens");
//                 console.log("Hey Alex!! how the fuck are you doing");
//             },3000)
//         },2000)
//     }, 1000);
// }

// isBobHome();




// promise first look
const checkAboutAlice = new Promise((resolve, reject)=>{
    console.log("Knock Knock 11111!! AAAAlllicceee are you there!!!")
    setTimeout(()=>{
       let N = Math.floor(Math.random() * 10);
      
       if(N>5){
        resolve();
       }else{
        reject();
       }
    },1000)

});

// we can also do checkAboutALice.then and checkAboutAlice.catch() seperately
// and in this case it will work because this is a single promise;

// checkAboutAlice.then(()=>{
//     console.log("alice is home!!")
// }).catch( ()=>{
//  console.log("Alice not found!!")
// }).finally(()=>{
//  console.log("finally going home");
// });



// lets return a promise from a function
const makeAlicePromise = ()=>{
    return new Promise((resolve, reject)=>{
        console.log("Knock Knock !! AAAAlllicceee are you there!!!")
        setTimeout(()=>{
        const N = Math.floor(Math.random() * 10);
            if(N>5){
                resolve();
            }else{
                reject();
            }
        },1000)

    });
};



// here if we do makeAlicePromise().then and makeALicePromise().catch seperetly
// it might give random results because each call is a different promise
// also note the () in makeAlicePromise()  this is a function call

makeAlicePromise().then(()=>{
    console.log("Alice is at home .... yayyyy");
}).catch((e)=>{
    console.log("Alice is not at home.... Nayyyyyeee");
    console.log(e);
});






/**
 * 15
why are both console.logs printing 
Knock Knock 11111!! AAAAlllicceee are you there!!!
Knock Knock !! AAAAlllicceee are you there!!!
even when they are in different promise??

Thinking of promises as "executing" is getting you confused. A promise is purely a notification mechanism. It is typically tied to some underlying asynchronous operation and when you create the promise, the asynchronous operation is typically started.

Promise.all() is then used to track when a whole bunch of asynchronous operations that you've already started have completed (or ended with an error).

So, you don't use Promise.all() to start a bunch of things. You use it just to track when they are all done and they are started elsewhere in your code.

When you manually create a promise with new Promise(), the promise executor is executed immediately. That's how they are designed.

If you had real asynchronous operations in your promise executor and you were doing console.log() when those operations completed, you'd probably not find any issue with how promises are designed. I think most of your confusion stems from the fact that you don't actually have any asynchronous operation inside your promise executor and thus there's really no reason to even use a promise for that. Promises are designed to track the completion of asynchronous operations. No reason to use them if you don't have an actual asynchronous operation.

FYI, if you want to start some asynchronous operation at some time in the future from inside the promise executor, you can use the normal setTimeout() or process.nextTick() or setImmediate() operations to schedule the operation to start later.

would have expected output to have been

Plus, it appears you are expecting your output to be in a strict order. Promise.all() expects there to be N asynchronous operations running in parallel and there is no guaranteed order of completion for those N operations. Instead, Promise.all() will track them all, collect all the results and present the .then() handler with an array of results in order (if they all resolved successfully). It does not run the operations themselves in order. The operations run in parallel and complete in whatever natural order they take.

Share
Improve this answer
Follow
edited Apr 6, 2018 at 5:23
answered Apr 6, 2018 at 5:17
jfriend00's user avatar
jfriend00
710k104104 gold badges1k1k silver badges1k1k bronze badges
1
This just blew my mind! My mental model for promises has always been 
that they were "special" functions that "resolved" as opposed to "returned" 
hence making them appropriate for asynchronous operations. Now I just need to 
go figure out why my current code works ¯_(ツ)_/¯ – 
takinola
 CommentedApr 6, 2018 at 15:42
3
@takinola - It's not an uncommon confusion.
 But, if you have a function that returns a promise, think of it like this. 
 The function starts an asynchronous operation, then creates a new promise
  and hooks it up to monitor that asynchronous operation. 
  The function then returns that promise that's like a tracker 
  you can use to know when the async operation is done and what result 
  it finished with. The promise is not the operation itself, 
  just a tracking mechanism. One would typically have a single function 
  to both start an async operation and get a promise back to track it. – 
jfriend00
 CommentedApr 6, 2018 at 15:49
1
I finally can say I'm not completely clueless about promises ! – 
OrenIshShalom
 CommentedOct 25, 2023 at 13:53
Add a comment
 */