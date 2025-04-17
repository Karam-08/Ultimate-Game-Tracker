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

function assignGame(){
    var gamePlayer = document.getElementById("playerName").value;
}

function addScores(){
    var scores = document.getElementById("playerName").value;
    for(var i = 0; i < scores.length; i++){
        if(!gameScores.includes(scores)){
            gameScores.push(scores)
        }else{
            alert("This person already has their scores set.")
        }
        console.log(gameScores)
    }
}

function displaySummary(){
    let player = player[i]
    for(var i = 0; i < players.length; i++){
        ("output").innerHTML(`${player} has gotten these scores: $l`)
    }
}

function sortByAverage(){

}

function showPopularGame(){

}