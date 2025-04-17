let gameTitles = ['Warframe', 'Black Ops Zombies', 'Half Life', 'Portal', 'Roblox', 'Dead Space', 'Fable: The Lost Chapters', 'Fortnite'];
let players = [];

let playerGames = new Map(); // Holds each player and assigned games

let gameScores = [];

function addPlayer(){
    var namePlayer = document.getElementById("playerName").value;
    if(!players.includes(namePlayer)){
        players.push(namePlayer)
    }else{
        alert(`This person is already playing.`)
    }
}

function addScores(){
    var scores = document.getElementById("playerName").value;
    for(var i = 0; i < scores.length; i++){
        if(!gameScores.includes(scores)){
            gameScores.push([scores])
        }else{
            alert("This person already has their scores set.")
        }
        console.log(gameScores)
    }
}

function averageScore(scores){ // Scores represents one row
    let sum = 0;
    for(var i = 0; i < scores.length; i++){ // Only loops through one row in the 2d array
        sum += scores[i]; // Adds up every score
    }
    return sum / scores.length; // Returns the average score in the row
}

function getGame(){
selected = new Set(); // Empty set to avoid duplicates
    var gamePlayer = document.getElementById("gameSelect").value;
    if(!selected.has(gamePlayer)) { // If the random game chosen is not already in the set,
        selected.add(gamePlayer); // It is pushed into the set
        alert(`"${gamePlayer}" has been added to the player's list.`);
    }else{
        alert(`Duplicate game "${gamePlayer}" has been detected for the player's list. Skipping addition.`);
    }
    return selected;
}


function assignGames(){
    for(var i = 0; i < players.length; i++) { // For each player,
        playerGames.set(players[i], getGame()); // Give each of them 3 random games
    }
}


console.log(""); // Spacing
console.log("Players Summary:");

function displaySummary(){
    for(var i = 0; i < players.length; i++){ // For each player
        var player = players[i]; // For each player
        let games = playerGames.get(player); // Gets their assigned games
        console.log(player + ":", games); // Displays the games each player will play

        var scores = gameScores[i]; // get their scores
        console.log(players[i] + ":", scores, "|", "Average:", Math.round(averageScore(scores)));
        // Gets specific player, their scores, and shows the average score for each player
    }
}

function sortByAverage(){
    
}

function showPopularGame(){

}
