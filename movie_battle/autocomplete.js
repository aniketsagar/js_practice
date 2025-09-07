const createAutoComplete = ({root,renderOption,onOptionSelect,inputValue}) => {
    
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
        
            option.classList.add("dropdown-item");
            option.innerHTML = renderOption(movie);
            /**
             * when user clicks on the item in dropdown 
             * 1. close the dropdown
             * 2. Populate the input with the movie name in dropdown
             * 3. Make a fetch call to get details of that movie
             * 4. Render those details on the screen 
             */
            option.addEventListener("click",()=>{
                dropdown.classList.remove("is-active");
                input.value = inputValue(movie);
                onOptionSelect(movie);
            });
            resultsWrapper.appendChild(option);
        };
            
    };

    const dropdown = root.querySelector(".dropdown");
    const resultsWrapper = root.querySelector(".results");
   
    const input = root.querySelector("input");
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

};


