

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const durationInput = document.querySelector("#duration");

const circle = document.querySelector("#circle");
const perimeter = circle.getAttribute("r")*2*Math.PI;
circle.setAttribute("stroke-dasharray",perimeter);
let currentOffset = 0;
const callbacks ={
    onStart(){
        console.log("onStart");
    },
    onTick(){
        console.log("onTick");
        circle.setAttribute("stroke-dashoffset",currentOffset);
        currentOffset = currentOffset - 50;
    },
    onComplete(){
        console.log("onComplete");
    }
}
const timer = new Timer(durationInput,startButton,pauseButton,callbacks);

//timer.start();
