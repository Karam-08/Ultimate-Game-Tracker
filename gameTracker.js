let gameTitles = ['Warframe', 'Black Ops Zombies', 'Half Life', 'Portal', 'Roblox', 'Dead Space', 'Fable: The Lost Chapters', 'Fortnite'];
let players = [];
let playerGames = new Map(); // Holds each player and assigned games
let gameScores = new Map();

function addPlayer(){
    const name = document.getElementById("playerName").value;
    if(name && !players.includes(name)){
        players.push(name)
        playerGames.set(name, new Set())
        gameScores.set(name, [])
        alert(`${name} has been added.`)
    }else{
        alert(`${name} is already playing.`)
    }
    console.log(players)
}

function assignGame(){
    const name = document.getElementById("playerName").value
    const game = document.getElementById("gameSelect").value
    if(!playerGames.has(game)){
        playerGames.set(game)
        alert(`${game} has been added to the player's list`)
    }else{
        alert(`${game} is already being played by your current player`)
    }
    console.log(playerGames)
}

function addScores(){
    const scores = document.getElementById("scoreInput")
}

function displaySummary(){

}

function sortByAverage(){

}

function showPopularGame(){

}