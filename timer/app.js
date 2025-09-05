

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const durationInput = document.querySelector("#duration");

const circle = document.querySelector("#circle");
const perimeter = circle.getAttribute("r")*2*Math.PI;
circle.setAttribute("stroke-dasharray",perimeter);
let currentOffset = 0;
let duration = null;
const callbacks ={
    onStart(totalDuration){
        duration = totalDuration;
        console.log("onStart");
    },
    onTick(timeRemaining){
        console.log("onTick");
        let offset = perimeter * timeRemaining / duration - perimeter;
        circle.setAttribute("stroke-dashoffset",offset);
        // offset  = (perimeter *timeRemaining)/totalDuration - perimeter
    
    },
    onComplete(){
        console.log("onComplete");
    }
}
const timer = new Timer(durationInput,startButton,pauseButton,callbacks);

//timer.start();
