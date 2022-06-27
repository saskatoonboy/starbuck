
const outputText = document.getElementById('output');
const drinkButton = document.getElementById('newDrinkButton');
//const drinkWeights = new Map(drinks.getKeys(), settings.drinkWeights);

settings.close();
settings.collapse();

function randRun(func, start, increment, maxRuns) {

  if (increment < 0) {

    increment = 0;

  }

  let threshold = Math.random();
  let returns = [];
  let runs = 0;

  while (threshold < start && runs <= maxRuns) {

    returns.push(func());
    start = start * increment;
    runs = runs + 1;

  }

  return returns;

}

let drink = generateDrink();
function generateDrink() {



}
//while (!makeDrink());
//loadSettings();
