let gameTitles = ['Warframe', 'Black Ops Zombies', 'Half Life', 'Portal', 'Roblox', 'Dead Space', 'Fable: The Lost Chapters', 'Fortnite'];
let players = []; // Stores amount of players
let playerGames = new Map(); // Stores each player and their assigned games
let playerScores = []; // Stores each player and their scores


function addPlayer(){
    const name = document.getElementById("playerName").value; // Gets value from textbox

    if(name && !players.includes(name)){ // If the name is valid and not already in the list
        players.push(name) // Add player
        playerGames.set(name, new Set()) // Gives an empty game list
        playerScores.push([name, []]) // Adds empty score array
        alert(`${name} has been added.`)
    }else{
        alert(`${name} is already playing.`)
    }

    console.log(players) // Shows every player in the console
}


// Assigns games to player, 3 maximum
function assignGame(){
    const name = document.getElementById("playerName").value // Gets values from textboxes
    const game = document.getElementById("gameSelect").value

    if(!players.includes(name)){ // If the player is not in the game
        alert(`You must add your player first.`)
        return; // End function
    }

    const games = playerGames.get(name); // Gets player's current games

    if(games.has(game)){ // If the player already has the game in the textbox,
        alert(`${name} already has ${game} in their list.`)
    }else if(games.size >= 3){ // If the player already has 3 games,
        alert(`${name} already has the maximum of 3 games in their list.`)
    }else{ // But if there's nothing wrong,
        games.add(game) // Add game to list
        alert(`${game} has been assigned to ${name}'s list.`)
    }
    console.log(playerGames) // Shows all of the player's games
}


// Adds or updates scores
function addScores(){
    const name = document.getElementById("playerName").value; // Player name
    const scoreInput = document.getElementById("scoreInput").value; // Score input

    if(!players.includes(name)){ // If the player doesn't exist
        alert("You must add your player first.");
        return;
    }

    const scores = scoreInput.split(',') // Splits scores array to get individual scores

    if(scores.length !== 3){ // If there are not 3 scores
        alert("Please enter exactly 3 numbers, separated by commas.");
        return;
    }

    for(var i = 0; i < playerScores.length; i++){ // Loops through each score entry
        if(playerScores[i][0] === name){ // If it's the right player
            playerScores[i][1] = scores // The scores get updated
            alert(`The scores for ${name} have been updated.`)
        }
    }
    console.log(scores) // Checks the scores in console
}


function displaySummary(){
    const output = document.getElementById("output")
    output.innerHTML = ""; // Clears the previous results when switching

    if(players.length === 0){ // If there are no players
        output.innerHTML = "<p>There are no players to display.</p>"
        return;
    }

    var html = "<h3>Player Summary</h3>" // Simple title

    for(var i = 0; i < players.length; i++){
        var name = players[i]; // name represents each player
        var games = []; // Stores game names

        var gamesSet = playerGames.get(name); // Gets the set of games from the player
        if(gamesSet){ // If the player has games,
            var gamesArray = Array.from(gamesSet); // Array.from converts the set to array
            for(var j = 0; j < gamesArray.length; j++){ // Loops through array
                games.push(gamesArray[j]); // Adds each game to the list
            }
        }

        if(games.length === 0){ // If no games are assigned
            games.push("No games assigned")
        }

        var scores = "No scores added"; // Default if no scores are found
        for(var j = 0; j < playerScores.length; j++){ // Loops through  
            if(playerScores[j][0] === name){ // If the entry matches the player,
                if(playerScores[j][1].length === 3){ // and if the scores were inputted correctly,
                    scores = playerScores[j][1]; // The scores will be displayed
                }
            }
        }

        html += "<li><strong>" + name + "</strong><br/>Games: " + games + "<br/>Scores: " + scores + " " + "</li>";
    }

    html += "</ul>";
    output.innerHTML = html;
}


function sortByAverage(){
    const output = document.getElementById("output");
    output.innerHTML = "";

    if(players.length === 0){
        output.innerHTML = "<p>There are no players to sort.</p>";
        return;
    }

    const averages = []; // Stores averages for each player

    for(var i = 0; i < playerScores.length; i++){
        var name = playerScores[i][0] // Player name
        var scores = playerScores[i][1] // Player scores

        if(scores.length !== 3){
            averages.push[name, 0] // Cannot display average if there are not 3 scores
        }else{
            var total = 0 // Empty variable
            for(var j = 0; j < scores.length; j++){
                total += parseFloat(scores[j]) // Scores are converted to floats (numbers with decimals) and added to the empty variable
            }
            var average = total/3 // Gets average score for player
            averages.push([name, average]) // Pushes an array that contains the player and their average score
        }
    }
    var html = "<h3>Players Sorted by Average Score:</h3><ul>"; // Shortener
    for(var i = 0; i < averages.length; i++){
        html += "<li>" + averages[i][0] + " — Average: " + averages[i][1].toFixed(2) + "</li>";
        // Adds the player and their score to the second decimal place
        // += is used to add on to the existing html
    }
    html += "</ul>"; // Everything is sandwiched between the ul tags

    output.innerHTML = html; // Displays everything
    console.log(averages) // Checks the averages in the console
}


function showPopularGame(){
    const output = document.getElementById("output");
    output.innerHTML = "";

    if(players.length === 0){ // If there are no players
        output.innerHTML = "<p>No players have been added yet.</p>";
        return; // End function
    }

    const gameCounts = new Map(); // Stores how many times each game has been assigned

    for(var i = 0; i < players.length; i++){ // Loop through each player
        var name = players[i];
        var gamesSet = playerGames.get(name); // Get that player's assigned games

        if(gamesSet){
            var gamesArray = Array.from(gamesSet); // Convert set to array
            for(var j = 0; j < gamesArray.length; j++){ // Loop through each game
                var game = gamesArray[j];
                if(gameCounts.has(game)){ // If the game is already in the map,
                    gameCounts.set(game, gameCounts.get(game) + 1); // Increase the count by 1
                }else{ // If it's the first time the game is seen,
                    gameCounts.set(game, 1); // Set count to 1
                }
            }
        }
    }

    if(gameCounts.size === 0){ // If no games have been assigned
        output.innerHTML = "<p>No games have been assigned yet.</p>";
        return;
    }

    var maxCount = 0; // Highest number of assignments
    var mostPopular = []; // Stores the most popular game(s)

    var keys = Array.from(gameCounts.keys()); // Converts the map into an array and gets all of keys (game names)
    for(var i = 0; i < keys.length; i++){ // Loops through each game in the array
        var game = keys[i];
        var count = gameCounts.get(game); // Get how many times the game was assigned

        if(count > maxCount){ // If this game has more assignments than current max
            maxCount = count; // Update max
            mostPopular = [game]; // Replace list with this game
        }else if(count === maxCount){ // If there's a tie,
            mostPopular.push(game); // Add game to the list
        }
    }

    var html = "<h3>Most Popular Game";
    if(mostPopular.length > 1){ // If there is more than one game,
        html += "s"; // turns plural
    }
    html += "</h3>"; // closes h3 tag

    html += "<p>" + mostPopular + " with " + maxCount + " assignment";
    if(maxCount > 1){
        html += "s";
    }
    html += ".</p>";

    output.innerHTML = html; // Displays everything
    console.log("Popular game(s):", mostPopular, "with", maxCount, "assignments");
}