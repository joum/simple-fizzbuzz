var players = ["Alfredo", "Bruno", "Carlos", "David", "Edgar", "Filipe", "Guilherme", "Hélder", "Ivo", "Joaquim", "Luís", "Manuel"];

var count = 1;
var mistakeProb = 0;
var playerCount = 0;
var failedPlayer = 0;

while(players.length > 1){
  mistakeProb = Math.round((70*Math.random())/100);
    // fizz
    if((count)%3===0 && (count)%5!==0){
      if(!mistakeProb){
        console.log(players[playerCount] + ": fizz");
      }else{
        console.log(players[playerCount] + " FAILED! (fizz)");  
        failedPlayer = players.indexOf(players[playerCount]);
        players.splice(failedPlayer,1);
        playerCount--;
      }      
    }
    // buzz
    else if((count)%3!==0 && (count)%5===0){
      if(!mistakeProb){
        console.log(players[playerCount] + ": buzz");
      }else{
        console.log(players[playerCount] + " FAILED! (buzz)");  
        failedPlayer = players.indexOf(players[playerCount]);
        players.splice(failedPlayer,1);
        playerCount--;
      }      
    }
    // fizzbuzz
    else if((count)%3===0 && (count)%5===0){
      if(!mistakeProb){
        console.log(players[playerCount] + ": fizzbuzz");
      }else{
        console.log(players[playerCount] + " FAILED! (fizzbuzz)");  
        failedPlayer = players.indexOf(players[playerCount]);
        players.splice(failedPlayer,1);
        playerCount--;
      }      
    }else{ // normal
        console.log(players[playerCount] + ": " + (count));  
    }

    if(playerCount < players.length-1){
      playerCount++;
    }else{
      playerCount = 0;
    }
    
    count++;      
}

var victoryString = "WINNER: "+players[0];
function border(size){
  var total ="";
  for(var i=0; i<size+4; i++){
    total += String.fromCharCode(9604);
  }
  return total;
}

console.log(border(victoryString.length));
console.log(String.fromCharCode(9608)+" "+victoryString+" "+String.fromCharCode(9608));
console.log(border(victoryString.length));
