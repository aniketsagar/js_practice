console.log("hello!! there!!")
hash = window.location.hash;
console.log(hash)
if(hash){
    let message = atob(hash.replace("#",""));
    console.log("message",message);
}
document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    const input = document.querySelector("#message-input");
    console.log("message", input.value);
    let b64Input = btoa(input.value);
    console.log(b64Input)
    const link_input = document.querySelector("#link-input");
    link_input.value =`${window.location}#${b64Input}`;
    link_input.select();
   document.querySelector("#message-form").classList.add("hide");
   document.querySelector("#link-form").classList.remove("hide");
});