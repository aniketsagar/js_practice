class Timer{
    constructor(duration,startButton,pauseButton){
        this.durationInput = duration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.intervalId = null;
        console.log(this.durationInput,this.startButton,this.pauseButton);
        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click',this.pause);
    }; 
    start = ()=>{
        console.log("Timer Started")
        this.tick();
        this.intervalId = setInterval(this.tick,1000)
    };
    pause = ()=>{
       console.log("pause");
       clearInterval(this.intervalId); 
    };
    tick = ()=>{
        console.log("tick");
        if(this.timeRemaining <= 0){
            this.pause();
        }else{
            this.timeRemaining = this.timeRemaining -1; // we can do this because of getters and setters 
        }
        //this.timeRemaining.value = parseFloat(this.timeRemaining.value) - 1;
       // console.log("tick", this.timeRemaining);
      
    };

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    };
    set timeRemaining(newTime){
        this.durationInput.value = newTime; 
    };
}
