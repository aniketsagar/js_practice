

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const durationInput = document.querySelector("#duration");

const callbacks ={
    onStart(){
        console.log("onStart");
    },
    onTick(){
        console.log("onTick");
    },
    onComplete(){
        console.log("onComplete");
    }
}
const timer = new Timer(durationInput,startButton,pauseButton,callbacks);

//timer.start();
