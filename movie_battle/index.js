console.log('Hi there!');
/// http://www.omdbapi.com/?i=tt3896198&apikey=491e8064

const APIKEY = "491e8064";
const OMDBAPI_URL = "http://www.omdbapi.com/";
const DEBOUNCE_DELAY = 500;

async function searchMoviesbyTitle(title){
    const params = {}
    params["apikey"] = APIKEY;
    params["s"] = title;
    const results = await axios.get(OMDBAPI_URL,{params});
    if(results.data.Search){
        return results.data.Search;

    }else{
        return []
    }
};

const getMovieById = async function(imdbId){
    const params = {
        "apikey" : APIKEY,
        "i": imdbId
    }
    const response = await axios.get(OMDBAPI_URL,{params});
    return response.data;
};
 // in the below function we are using .then which is also a  correct way
 // but we want to use await hence changing the implementation
 // we aren't throwing any errors to log though 
// const onInput = (event)=>{
//     // this whole process for delaying input is called debounce pattern
//     searchMoviesbyTitle(event.target.value)
//     .then((res)=>{
//         console.log("movie data", res);
//         // const movieData = getMovieById(res.Search[1].imdbID);
//         // return movieData;
//     }).catch((err)=>{
//         console.log(err);
//     });
        
// };




const onInput = async (event)=>{
    // this whole process for delaying input is called debounce pattern
    const movies = await searchMoviesbyTitle(event.target.value)
    if(!movies.length){
        dropdown.classList.remove("is-active");
        return;
    }
    console.log(movies);
    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for(let movie of movies){
        const option = document.createElement("a");
        const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
        option.classList.add("dropdown-item");
        option.innerHTML = `
            <img src= "${imgSrc}"/>
            ${movie.Title}
        `;
        /**
         * when user clicks on the item in dropdown 
         * 1. close the dropdown
         * 2. Populate the input with the movie name in dropdown
         * 3. Make a fetch call to get details of that movie
         * 4. Render those details on the screen 
         */
        option.addEventListener("click",()=>{
            dropdown.classList.remove("is-active");
            input.value = movie.Title;
        });
        resultsWrapper.appendChild(option);
    };
        
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
    <label><b>Search for a movie </b></label>
    <input class="input"/>
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`;


// console.log(getMovies());
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");
input.addEventListener("input", debounce(onInput,DEBOUNCE_DELAY));

/**
 * event bubbles in javascript >>> this is important here
 * To close the menu when a user clicks anywhere else apart from the dropdown
 * We are going to use <element>.contains(x) function this is true if x is a child
 * somewhere in element and false if x is a sibling or parent of that element
 * so what we can do is: 
 * we add an event listener for click on document,
 * get event.target -> this tells us what't the target of that event
 * in our case we want it to be dropdown elements ie. label, input, or content
 * so we check 
 * if our desired element ie. root in our case contains the event target
 * then we keep the dropdown open else we close it
 */

document.addEventListener("click",(event)=>{
    if(!root.contains(event.target)){
        dropdown.classList.remove("is-active");
    };
});