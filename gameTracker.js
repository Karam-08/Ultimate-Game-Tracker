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

    if(!players.includes(name)){
        alert(`You must add your player first.`)
        return;
    }

    const games = playerGames.get(name);

    if(games.has(game)){
        alert(`${name} already has ${game} in their list.`)
    }else if(games.size >= 3){
        alert(`${name} already has 3 games in their list.`)
    }else{
        games.add(game)
        alert(`${game} has been assigned to ${name}'s list.`)
    }
}

function addScores(){
    const name = document.getElementById("playerName").value
    const scoreInput = document.getElementById("scoreInput").value

    if(!players.includes(name)){
        alert(`You must add your player first.`)
        return;
    }

    const scores = scoreInput.split(",")
    console.log(scores)

    if (scores.length !== 3) {
        alert("Please enter exactly 3 valid numbers, separated by commas.");
        return;
    }

    gameScores.set(name, scores);
    alert(`Scores for ${name} have been recorded: ${scores.join(', ')}`);
    console.log(gameScores);
}

function displaySummary(){
    const output = document.getElementById("output");
    output.innerHTML = ""

    if(players.length === 0){
        output.innerHTML = "<p>There are no players selected.</p>";
        return
    }
}

function sortByAverage(){

}

function showPopularGame(){

}