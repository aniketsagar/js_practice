const form = document.querySelector("#signup");
const userName = document.querySelector("#name");
const mail = document.querySelector("#mail");
const subjectOption = document.querySelector("#subject");
const termsCheck = document.querySelector("#terms");
const msg = document.querySelector("#msg");

//onSubmit
form.addEventListener("submit",function(e){
    alert("form submitted");
    e.preventDefault();
    console.log(e);
    console.log("userName", userName.value);
    console.log("mail",mail.value);
    console.log("subject", subjectOption.value);
    console.log("terms",termsCheck.checked);
    console.log("msg", msg.value);
});
// onInput Event
// This event fires on every input change
const formData = {};
for(let val of [userName,mail,subjectOption,termsCheck,msg]){
    val.addEventListener("input",function(e){
        // if(e.target.type.toLowerCase() === "checkbox"){
        //     formData[e.target.name] = e.target.checked;
        // }else{
        //     formData[e.target.name] = e.target.value;
        // }
        formData[e.target.name] = e.target.type.toLowerCase() === "checkbox" ? e.target.checked : e.target.value;
        console.log("formData", formData);
    });

}


//onChange Event
// This event fires only when the focus is lost from an element or return is pressed
const formChangeData = {};
for(let val of [userName,mail,subjectOption,termsCheck,msg]){
    val.addEventListener("change",function(e){
        // if(e.target.type.toLowerCase() === "checkbox"){
        //     formData[e.target.name] = e.target.checked;
        // }else{
        //     formData[e.target.name] = e.target.value;
        // }
        formChangeData[e.target.name] = e.target.type.toLowerCase() === "checkbox" ? e.target.checked : e.target.value;
        console.log("formChangeData", formChangeData);
    });

}
