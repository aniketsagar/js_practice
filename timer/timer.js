class Timer{
    constructor(duration,startButton,pauseButton,callbacks){
        this.durationInput = duration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.intervalId = null;
        this.INTERVAL = 50;
        console.log(this.durationInput,this.startButton,this.pauseButton);
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click',this.pause);

    }; 
    start = ()=>{
        console.log("Timer Started")
        if(this.onStart){
            console.log("this.timeRemaining", this.timeRemaining);
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.intervalId = setInterval(this.tick, this.INTERVAL)
    };
    pause = ()=>{
       console.log("pause");
       clearInterval(this.intervalId); 
    };
    tick = ()=>{
        console.log("tick");
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
            this.timeRemaining = this.timeRemaining -(this.INTERVAL/1000); // we can do this because of getters and setters 
        }
        //this.timeRemaining.value = parseFloat(this.timeRemaining.value) - 1;
       // console.log("tick", this.timeRemaining);
      
    };

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    };
    set timeRemaining(newTime){
        this.durationInput.value = newTime.toFixed(2); 
    };
}

