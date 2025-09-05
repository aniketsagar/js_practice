
const colors= ["red",
                "orange",
                "yellow",
                "green",
                "blue",
                "violet",
                "indigo",
                "pink",
                "cyan",
                "plum",
                "darkmagenta"
            ];

const h1 = document.querySelector("h1");
const changeColor = function(event){
    console.log(this.style.backgroundColor); //  this refers to the execution context
    // which in this case will be the div which we are refering to 
    // not a very clear style though
    h1.style.color = this.style.backgroundColor;
    console.log(event);
};
const boxContainer = document.querySelector(" #boxes");

for(let color of colors){
    console.log(color);
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.classList.add("box");
    boxContainer.appendChild(box);
    box.addEventListener("click",changeColor);  // the event object is implicitly passed here

}