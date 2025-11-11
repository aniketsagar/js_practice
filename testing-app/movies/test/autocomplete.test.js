const waitFor = async (selector) => {
  return new Promise((resolve, reject)=>{
    const intervalId = setInterval(()=>{
      if(document.querySelector(selector)){
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        resolve();
      }
    }, 30);
    const timeoutId = setTimeout(()=>{
      clearInterval(intervalId);
      reject();
    },2000)
  });
};



beforeEach(() => { // hook provided by mocha, this executes before each testcase
  document.querySelector("#target").innerHTML = "";
  createAutoComplete(
  {
    root:document.querySelector("#target"),
    fetchData(){
      return [
        {Title:"Avangers"},
        {Title:"Naked Fury"},
        {Title:"Dawn of the cassanova"}
      ];
    },
    renderOption(movie){
      return movie.Title;
    }

  });
  
});



it("Dropdown starts closed",()=>{
 
  const dropdown = document.querySelector(".dropdown");
  expect(dropdown.className).not.to.include("is-active");
  
}); 


it("After searching, dropdown opens up", async ()=>{
  const input = document.querySelector(".input");
  input.value = "Avengers";
  input.dispatchEvent(new Event("input"));   // dispatching the input event
  await waitFor(".dropdown-item");
  const dropdown = document.querySelector(".dropdown");
  
  expect(dropdown.className).to.include("is-active");
});


it("Movies dislpayed after searching ", async () => {
  const input = document.querySelector(".input");
  input.value = "Avengers";
  input.dispatchEvent(new Event("input"));   // dispatching the input event
  await waitFor(".dropdown-item");
  const items = document.querySelectorAll(".dropdown-item");
  expect(items.length).to.equal(3);
});