console.log('Hi there!');
/// http://www.omdbapi.com/?i=tt3896198&apikey=491e8064

const APIKEY = "491e8064";
const OMDBAPI_URL = "http://www.omdbapi.com/";
async function searchMoviesbyTitle(title){
    const params = {}
    params["apikey"] = APIKEY;
    params["s"] = title;
    const results = await axios.get(OMDBAPI_URL,{params});
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

// console.log(getMovies());
const input = document.querySelector("input");
input.addEventListener("input",(event)=>{
    searchMoviesbyTitle(event.target.value)
    .then((res)=>{
        console.log("movie data", res);
    }).catch((e)=>{
        console.log(e);
    })
});
// searchMoviesbyTitle("avengers")
// .then((res)=>{
//     console.log("movie data", res);
//     const movieData = getMovieById(res.Search[1].imdbID);
//     return movieData;
// })
// .then((data)=>{
//     console.log(data);

// });