function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

// My gameObject and log its output.
console.log(gameObject());

// Now the second functions
function homeTeamName() {
 let game = gameObject();
 return game['home']['teamName']
}
console.log(homeTeamName())

function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
  }
  console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
}
console.log(shoeSize("Alan Anderson")); 

function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
}
console.log(teamColors("Brooklyn Nets"));  

function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
console.log(teamNames());  

function playerNumbers(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
}
console.log(playerNumbers("Brooklyn Nets"));  

function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
}
console.log(playerStats("Alan Anderson")); 

function bigShoeRebounds() {
    let game = gameObject();
    let maxShoeSize = 0;
    let playerWithMaxShoeSize;
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > maxShoeSize) {
          maxShoeSize = game[team].players[player].shoe;
          playerWithMaxShoeSize = player;
        }
      }
    }
    return game.home.players[playerWithMaxShoeSize].rebounds;
}
console.log(bigShoeRebounds()); 

// Bonus Questions
function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints;
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          playerWithMostPoints = player;
        }
      }
    }
    return playerWithMostPoints;
}
console.log(mostPointsScored());

function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}
console.log(winningTeam());
  
function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
}
console.log(playerWithLongestName()); 

function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals;
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > mostSteals) {
          mostSteals = game[team].players[player].steals;
          playerWithMostSteals = player;
        }
      }
    }
    return playerWithMostSteals === longestName;
}
console.log(doesLongNameStealATon());



   

 
 

 
 