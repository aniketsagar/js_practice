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
    //console.log(results.data);
    return results.data.Search;
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
    console.log(movies);

    for(let movie of movies){
        const div = document.createElement("div");
        div.innerHTML = `
            <img src= "${movie.Poster}"/>
            <h1>${movie.Title}</h1>
        `;
        document.querySelector("#movieInfo").appendChild(div);
    };
        
};

// console.log(getMovies());
const input = document.querySelector("input");
input.addEventListener("input", debounce(onInput,DEBOUNCE_DELAY));
// searchMoviesbyTitle("avengers")
// .then((res)=>{
//     console.log("movie data", res);
//     const movieData = getMovieById(res.Search[1].imdbID);
//     return movieData;
// })
// .then((data)=>{
//     console.log(data);

// });