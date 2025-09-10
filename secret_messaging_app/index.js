console.log("hello!! there!!")

document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    const input = document.querySelector("input");
    console.log("message", input.value);
});