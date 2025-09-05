const { default: axios } = require("axios");

//   console.log(axios)

//   axios.get("https://swapi.info/api/planets")
//   .then((response,err)=>{
//     if(err) throw new Error("Error in api call 1", {err});
//     console.log(response);
//     return data = response.data;
//   })
//   .then((data,err)=>{
//     if(err) throw new Error("Error in processing user data", {err});
//     const film = data[0].films[1];
//     console.log(film)
//     return film;
// })
//   .then((film,err)=>{
//     if(err) throw new Error("Error in reading film data::", {err} );
//     return axios.get(film);
//   })
//   .then((response, err)=>{
//     if(err) throw new Error("Error in reading film data from api", {err});
//     console.log(response);
//   })
//   .catch((err)=>{
//     console.log("err:",err);
//   });



//   const tryMe = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve("hahahahahahah");
//     });
//   }


//   tryMe()
//   .then((res,err)=>{
//     if(err) throw new Error("error in api call 1", {err});
//     console.log("resolve", res);

//   }).then((res,err)=>{
//     if(err) throw new Error("Error in api call 2", {err});
//     console.log("another resolve");
//   }).then(()=>{
//     console.log("yet another resolve");
//   })


// async await style


  async function getfim(){
    // without await below line return a promise in pending state
    const users = await axios.get("https://swapi.info/api/planets");

    const filmURL = users.data[0].films[1];
    //console.log(filmURL)
    const filmDetails = await axios.get(filmURL);
    //console.log(filmDetails.data); 
    return filmDetails.data;
};


// console.log(getfim());
// getfim().then((res)=>{
//     console.log(res);
// })



// pokiapi 
//Sequential requests 
async function getPokemon(){
    // here the await before every request makes sure that we
    // get response of each of them before proceeding 
    // so this is a sequential form
    const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    console.log(poke1.data.name);
    const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
    console.log(poke2.data.name);
    const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
    console.log(poke3.data.name);

}


//console.log("this...",getPokemon());
// getPokemon().then((response)=>{
//     console.log(response);
// })


// parallel requests 

async function getPokemon2(){
    // here all the requests are sent almost at once, and promises are 
    // returned, then we process those promises when we 
    // await the response 
    const pokeProm1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
    console.log(pokeProm1);
    const pokeProm2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
    console.log(pokeProm2);
    const pokeProm3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
    console.log(pokeProm3);

    const poke1 = await pokeProm1;
    const poke2 = await pokeProm2;
    const poke3 = await pokeProm3;

    console.log(poke1.data.name);
    console.log(poke2.data.name);
    console.log(poke3.data.name);

}

// getPokemon2();
async function getPokemonAll(){
    // here all the requests are sent almost at once, and promises are 
    // returned, then we process those promises when we 
    // await the response 
    const pokeProm1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
    console.log(pokeProm1);
    const pokeProm2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
    console.log(pokeProm2);
    const pokeProm3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
    console.log(pokeProm3);
    const results = await Promise.all([pokeProm1,pokeProm2,pokeProm3]);
    console.log(results);

}

getPokemonAll();