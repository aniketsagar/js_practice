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
    document.querySelector("#summary").innerHTML= movieTemplate(response.data);
    //return response.data;
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

const root = document.querySelector(".autocomplete");
const renderOptions = (movie) => {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
        <img src= "${imgSrc}"/>
        ${movie.Title}(${movie.Year})

    `;
};
const onOptionSelect = (movie)=>{
    getMovieById(movie.imdbID);
};
const inputValue = (movie)=>{
    return movie.Title;
}

const autoCompleteConfig = {
    root: document.querySelector(".autocomplete"),
    renderOption: renderOptions,
    onOptionSelect: onOptionSelect,
    inputValue: inputValue,
    fetchData: searchMoviesbyTitle

};

createAutoComplete(autoCompleteConfig);


const movieTemplate = (movieDetails)=>{
    /**
     * We have to figure out how to structure and compose this screen
     */
    return `
        <article class="media">
            <figure class="media-left>
                <p class="image">
                    <img src="${movieDetails.Poster}" />
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${movieDetails.Title}</h1>
                    <h4>${movieDetails.Genre}</h4>
                    <p>${movieDetails.Plot}</p>
                </div>
            </div>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.BoxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
    `;
};
