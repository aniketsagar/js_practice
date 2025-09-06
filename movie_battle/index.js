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
    return results.data;
};

const getMovieById = async function(imdbId){
    const params = {
        "apikey" : APIKEY,
        "i": imdbId
    }
    const response = await axios.get(OMDBAPI_URL,{params});
    return response.data;

};
let timeoutId = null;
// debounce pattern
const debounce = (func,delayMs = 1000)=>{
    let timeoutId = null; 
    return (...args)=>{   // ...args is multiple args
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func.apply(null,args); // apply calls the function after applying arguments to it
        },delayMs)
    };
}; 

const onInput = (event)=>{
    // this whole process for delaying input is called debounce pattern
    searchMoviesbyTitle(event.target.value)
    .then((res)=>{
        console.log("movie data", res);
        // const movieData = getMovieById(res.Search[1].imdbID);
        // return movieData;
    }).catch((err)=>{
        console.log(err);
    });
        
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