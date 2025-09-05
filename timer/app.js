

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const durationInput = document.querySelector("#duration");


const timer = new Timer(durationInput,startButton,pauseButton);

//timer.start();
