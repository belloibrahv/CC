const koalasScores = prompt("Enter the Koalas scores seperated by commas").split(",").map(Number);
const dolphinScores = prompt("Enter the Dolphin scores seperated by commas").split(",").map(Number);

// Calculate the average score for each team
const koalaAvg = (koalasScores.reduce((acc, score) => acc + score )) / koalasScores.length;
const dolphinAvg = dolphinScores.reduce((acc, score) => acc + score ) / koalasScores.length;

const winner = koalaAvg > dolphinAvg ? `Koalas won the Trophy with ${koalaAvg} points` :
  dolphinAvg > koalaAvg ? `Dolphins won the trophy with ${dolphinAvg} points` : `Both teams tied with same ${koalaAvg} point`;

console.log(winner);ø
