const createAutoComplete = ({root}) => {
    
    root.innerHTML = `
        <label><b>Search for a movie </b></label>
        <input class="input"/>
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
    `;


    

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
                getMovieById(movie.imdbID);
            });
            resultsWrapper.appendChild(option);
        };
            
    };

    const dropdown = root.querySelector(".dropdown");
    const resultsWrapper = root.querySelector(".results");
   
    const input = root.querySelector("input");
    input.addEventListener("input", debounce(onInput,DEBOUNCE_DELAY));

};