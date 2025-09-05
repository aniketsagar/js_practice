const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const h1 = document.createElement("h1");
h1.innerText = "Score Table";

const body = document.querySelector("body");
body.appendChild(h1);

const ul = document.createElement("ul"); // primary list for table

// for(let i in warriorsGames){
//     const li = document.createElement("li");
//     console.log(warriorsGames[i]);
//     let msg ="";
//     let highlight = null;
//     msg +=  warriorsGames[i].awayTeam.team + " " + "@" + " " + warriorsGames[i].homeTeam.team
//     if(warriorsGames[i].awayTeam.isWinner){
//         highlight = "red";
//         msg += " "+ "<b>"+warriorsGames[i].awayTeam.points+"</b>";
//         msg += "-";
//         msg +=  warriorsGames[i].homeTeam.points;

//     }else{
//         console.log(warriorsGames[i].homeTeam.points)
//         highlight = "green";
//         msg += " "+warriorsGames[i].awayTeam.points;
//         msg += "-";
//         msg += "<b>"+ warriorsGames[i].homeTeam.points + "</b>";

//     }

//     li.innerHTML = msg;
//     li.style.color=highlight;
//     ul.appendChild(li);
// }


for(let game of warriorsGames){
    const {homeTeam, awayTeam} = game;
    console.log(homeTeam.team , awayTeam.team) 
    const gameLi = document.createElement("li");
    const teamNames = `${awayTeam.team} @ ${homeTeam.team}`; // these are not quotes  
    let scoreLine = null
    let hightlight = null;
    if(awayTeam.isWinner){
        scoreLine = `<b>${awayTeam.points}</b>-${homeTeam.points}`;
    }else{
        scoreLine = `${awayTeam.points}-<b>${homeTeam.points}</b>`;
 
    }
    if(awayTeam.team.toLowerCase() === "houston" && awayTeam.isWinner || 
       homeTeam.team.toLowerCase() === "houston" && homeTeam.isWinner){
        // apply class
        gameLi.classList.add("loss");
        
    }else{
        gameLi.classList.add("win");
    }
    gameLi.innerHTML = `${teamNames} ${scoreLine}`; //imp
   
    ul.appendChild(gameLi);

}


body.appendChild(ul);

console.log("ul==>");
console.log(ul);