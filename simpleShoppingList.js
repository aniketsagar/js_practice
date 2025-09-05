const foodItemInput = document.querySelector(" #fooditems");
const shoppingListUl = document.querySelector("#shoppingList");

foodItemInput.addEventListener("keypress",function(e){
    console.log(e);
    console.log(this.value); // this refers to the foodItemInput since it is executing in its context
    //console.log(foodItemInput.value);
    if(e.key==="Enter"){
        if(!this.value) return; // check for empty strings
        const newli = document.createElement("li");
        newli.innerText = this.value ; // this is same as foodItemInput.value
        shoppingListUl.appendChild(newli);
        this.value = "";
    }
});

// I want to add a delete button 
// I also want to add a quantity button
