// click
// drag
// drops
// hovers
// scrolls
// form Submissions
// key Presses
// focus / blur
// mouse Wheel
// double click
// copying
// pasting
// audio Start
// screen resize 
// printing


//event handling 
//

// pattern for event listners

// the action to listen for    event type   code to run on that event 
let btn = document.querySelector("body #testButton");
console.log(btn);

btn.addEventListener("mouseover", function(){
    console.log("On ME");
    let newLeft = Math.floor((window.innerWidth - 100)*Math.random());
    let newTop = Math.floor((window.innerHeight -100)*Math.random());
    console.log(newLeft, newTop)
    btn.style.top = `${newTop}px`;
    btn.style.left = `${newLeft}px`;

});

btn.addEventListener("click",function(){
    console.log("click");
    btn.innerText = "Ummmm!!!";
    btn.style.backgroundColor = "yellow";
    
});