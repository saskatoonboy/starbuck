
const outputText = document.getElementById('output'); // text element where the drink will be displayed
const drinkButton = document.getElementById('newDrinkButton'); // button for creating a new drink
const display = document.getElementById('display');

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

function weightedRandomFromPlain(map) {

  map = prepareWeightedMap(map);
  return random(map);

}

function prepareWeightedMap(map) {

  let keys = map.getKeys();
  let values = map.getValues();
  let total = 0;

  for (let value of values) {

    total = total + value;

  }

  let accu = 0;

  for (let key of keys) {

    accu = accu + map.get(key)

    map.set(key, accu/total);

  }

  return map;

}

function weightedRandom(map) {
  let rand = Math.random();
  let keys = map.getKeys();

  for (let key of keys) {
    if (map.get(key) >= rand) {
      return key;
    }

  } 
}

function recalulateWeightedMap(map, source) {
  
  let keys = map.getKeys();

  for (let index = 0; index < source.length; index ++) {
    
    let value = source[index].getValue();
    if (!source[index].sibling.isEnabled()) {
      value = 0;
    }

    map.set(keys[index], value);

  }

  return prepareWeightedMap(map);

}

prepareWeightedMap(weightedDrinks[0]);

// generate a drink
let drink;
drink = generateDrink();

// function to generate a drink
function generateDrink() {

  drink = weightedRandom(weightedDrinks[0]);
  display.innerHTML = drink.checkbox.name;

}

//while (!makeDrink());
//loadSettings();
