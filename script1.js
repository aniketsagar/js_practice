/**
 * classList
 * getAttribute()
 * setAttribute()
 * appendChild()
 * append()
 * prepend()
 * removeChild()
 * remove()
 * createElement()
 * innerText
 * textContent
 * innerHTML
 * value
 * parentElement
 * children
 * nextSibling
 * previousSibling
 * style
 */

console.log("script1.js")

//innerText => text part of an html text 
const h1 = document.querySelector("body main h1");

console.log("h1.innerText =>",h1.innerText);
const ul = document.querySelector("body main ul");

console.log(ul)
console.log("ul.innerText =>", ul.innerText)

const p = document.querySelector("body #main");

console.log(p.innerText); /// only the text without any 


console.log("textContent")

console.log(p.textContent) // text with actual text seperation as seen on page 
 

// innerHTML
console.log("innerHTML -> gets us everything in a tag including tags and other html attributes")
console.log(p.innerHTML);
console.log(ul.innerHTML);

p.innerHTML = "this is the new text"

h1.innerHTML += "<b>::: InnerHTML TEXT!!!!!!!</b>"

console.log(p.textContent)

// Dom traversal properties
//children parent siblings

console.log(ul.par)
// getComputedStyle

// create element creates an empty element skeleton
const newH2 = document.createElement("h2");
newH2.innerText = "I like doopoodpoopppdodo"
// the above element is not listed in the dom at this step

// we need to append it to some element
const div1 = document.querySelector("main div");

div1.appendChild(newH2);

//const img1 = new Image()

const newImg = document.createElement("img");
newImg.src = "https://plus.unsplash.com/premium_photo-1748909096232-ed00d0bec4a4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const body = document.querySelector("body");
newImg.style.width = "300px";
console.log(body);
body.appendChild(newImg);

const newLink = document.createElement("a");
newLink.innerText = "No Agentic SAAS";
newLink.href="https://www.youtube.com/watch?v=SDYm5bpqKt8&ab_channel=StephenG.Pope"
const firstP = document.querySelector("body main #main");
console.log(firstP);
firstP.appendChild(newLink);

// append insertBefore prepend

const pUl = document.querySelector("ul");
console.log(pUl);
const newLI = document.createElement("li");
newLI.innerText = "This is created in script";
newLI.style.color = "green";
pUl.appendChild(newLI);
console.log("List after adding the child");  // this doesnt print the updated list as the script is loaded lazy after all the updates 
console.log(pUl);

pUl.removeChild(newLI);
console.log("List after removing the child"); 
console.log(pUl);

// insertBefore puts an element inside a parent element before a given element

const ul_two = document.querySelector("body main ul");
const li_ul_two = document.querySelectorAll("body main ul li")[1]; // rows 
console.log(li_ul_two);
ul_two.insertBefore(newLI,li_ul_two);
li_ul_two.remove(); // doesn't work in IE
