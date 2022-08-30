
const outputText = document.getElementById('output'); // text element where the drink will be displayed
const drinkButton = document.getElementById('newDrinkButton'); // button for creating a new drink
//const drinkWeights = new Map(drinks.getKeys(), settings.drinkWeights);

settings.close(); // make sure the settings window is closed on start
settings.collapse(); // make sure all the settings groups are collapsed on start

// a function to run a function a random number of times
// func, the function to run
// start, the starting value (0-1)
// increment, the amoutn to increase that value
// maxRuns, the maximum number of times the function can run
function randRun(func, start, increment, maxRuns) {

  // if the increment is less than 0 set it to 0
  if (increment < 0) {

    increment = 0;

  }

  // choose a trigger value
  let threshold = Math.random();
  // initalize a table to store the return values from the function
  let returns = [];
  // initialize a variable to track the number of times the function is run
  let runs = 0;

  // loop as long as the threshold values is lower than the start value and we have not excced the maximum number of runs
  while (threshold < start && runs <= maxRuns) {

    returns.push(func()); // store the return value of the function after running it
    start = start * increment; // increase the start value by the amount set to increase
    runs = runs + 1; // track the run

  }

  // return all the values from running the function
  return returns;

}

// generate a drink
let drink = generateDrink();

// function to generate a drink
function generateDrink() {



}
//while (!makeDrink());
//loadSettings();
