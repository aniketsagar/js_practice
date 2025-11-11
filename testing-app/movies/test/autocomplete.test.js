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


it("After searching, dropdown opens up", ()=>{
  const input = document.querySelector(".input");
  input.value = "Avengers";
  input.dispatchEvent(new Event("input"));   // dispatching the input event
  const dropdown = document.querySelector(".dropdown");
  
  expect(dropdown.className).to.include("is-active");
});