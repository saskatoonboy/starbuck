
const sizesDiv = document.getElementById('sizes');
const flavourDiv = document.getElementById('flavour');
const iceDiv = document.getElementById('ice');
const whipDiv = document.getElementById('whip');
const milkDiv = document.getElementById('milk');
const espressoDiv = document.getElementById('espressoDiv');
const coldDiv = document.getElementById('coldBar');
const hotDiv = document.getElementById('hotBar');
const sizeCheckboxes = [document.getElementById('short'), document.getElementById('tall'), document.getElementById('grande'), document.getElementById('venti'), document.getElementById('trenta')];
const iceValues = [document.getElementById('noIce'), document.getElementById('lightIce'), document.getElementById('normalIce'), document.getElementById('extraIce')];
const espressoValues = [document.getElementById('decaf'), document.getElementById('normal'), document.getElementById('blonde')];
const whipValues = [document.getElementById('noWhip'), document.getElementById('lightWhip'), document.getElementById('normalWhip'), document.getElementById('extraWhip')];
const milkValues = [document.getElementById('nonfatMilk'), document.getElementById('oneMilk'), document.getElementById('twoMilk'), document.getElementById('wholeMilk'), document.getElementById('lactaidMilk'), document.getElementById('coconutMilk'), document.getElementById('almondMilk'), document.getElementById('soyMilk'), document.getElementById('oatMilk'), document.getElementById('heavyCream'), document.getElementById('breve')];
const newMilkChance = document.getElementById('changeMilk');
const newWhipChance = document.getElementById('changeWhip');
const newEspressoChance = document.getElementById('changeEspresso');
const maxFlavours = document.getElementById('maxFlavour');
const minSweetness = document.getElementById('minSweet');
const maxSweetness = document.getElementById('maxSweet');

const drinkEnables = {

  refreshers: document.getElementById('refreshers'),
  icedTea: document.getElementById('icedTea'),
  frappuccino: document.getElementById('frappuccino'),
  icedCoffee: document.getElementById('icedCoffee'),
  coldBrew: document.getElementById('coldBrew'),
  other: document.getElementById('other'),
  latte: document.getElementById('latte'),
  brewedTea: document.getElementById('brewedTea'),
  otherTea: document.getElementById('otherTea'),
  brewedCoffee: document.getElementById('brewedCoffee'),
  americano: document.getElementById('americano'),
  steamedMilk: document.getElementById('steamedMilk'),
  appleJuice: document.getElementById('appleJuice'),
  espresso: document.getElementById('espresso'),

}

const expansions = {

  espresso: document.getElementById('espressoExpansion'),
  flavours: document.getElementById('flavoursExpansion'),
  whip: document.getElementById('whipExpansion'),
  milk: document.getElementById('milkExpansion'),
  cold: document.getElementById('coldExpansion'),
  hot: document.getElementById('hotExpansion'),
  coldSimple: document.getElementById('coldSimple'),
  hotSimple: document.getElementById('hotSimple')

}

function expandHot() {

  if (isHidden(expansions.hot)) {
    hide(expansions.hotSimple);
    reveal(expansions.hot, true);
  } else {
    reveal(expansions.hotSimple, true);
    hide(expansions.hot);
  }

}

function expandCold() {
  if (isHidden(expansions.cold)) {
    hide(expansions.coldSimple);
    reveal(expansions.cold, true);
  } else {
    reveal(expansions.coldSimple, true);
    hide(expansions.cold);
  }
}

function expandWhip() {
  if (isHidden(expansions.whip)) {
    reveal(expansions.whip, true);
  } else {
    hide(expansions.whip);
  }
}

function expandMilk() {
  if (isHidden(expansions.milk)) {
    reveal(expansions.milk, true);
  } else {
    hide(expansions.milk);
  }
}

function expandEspresso() {
  if (isHidden(expansions.espresso)) {
    reveal(expansions.espresso, true);
  } else {
    hide(expansions.espresso);
  }
}

function expandFlavour() {
  if (isHidden(expansions.flavours)) {
    reveal(expansions.flavours, true);
  } else {
    hide(expansions.flavours);
  }
}

function unselectColdBar() {

    const selections = ['refreshers','icedTea','frappuccino','icedCoffee','coldBrew','other'];

    for (let i = 0; i < selections.length; i++) {

        drinkEnables[selections[i]].checked = false;

    }

}

function selectColdBar() {

    const selections = ['refreshers','icedTea','frappuccino','icedCoffee','coldBrew','other'];

    for (let i = 0; i < selections.length; i++) {

        drinkEnables[selections[i]].checked = true;

    }

}

function unselectHotBar() {

    const selections = ['latte','brewedTea','otherTea','brewedCoffee','americano','steamedMilk','appleJuice','espresso'];

    for (let i = 0; i < selections.length; i++) {

        drinkEnables[selections[i]].checked = false;

    }

}

function selectHotBar() {

    const selections = ['latte','brewedTea','otherTea','brewedCoffee','americano','steamedMilk','appleJuice','espresso'];

    for (let i = 0; i < selections.length; i++) {

        drinkEnables[selections[i]].checked = true;

    }

}

function isHidden(ele) {

  return ele.style.display == 'none' || ele.style.display == '';

}

function hide(ele) {
  ele.style.display = 'none';
}

function reveal(ele, line) {
  if (line) {
    ele.style.display = 'block';
  } else {
    ele.style.display = 'inline';
  }
}

function openSettings() {
    if (outputText.style.display == 'none') {
      outputText.style.display = '';
      drinkButton.style.display = 'inline-block';
      settingsButton.innerHTML = 'Settings';
      hide(sizesDiv);
      hide(flavourDiv);
      hide(iceDiv);
      hide(whipDiv);
      hide(milkDiv);
      hide(coldDiv);
      hide(hotDiv);
      hide(espressoDiv);
      if (!(sizeCheckboxes[1].checked || sizeCheckboxes[2].checked || sizeCheckboxes[3].checked)) {
        sizeCheckboxes[2].checked = true;
      }
      saveSettings();
  
    } else {
      hide(outputText);
      drinkButton.style.display = 'none';
      settingsButton.innerHTML = 'Save Settings';
      reveal(sizesDiv);
      reveal(flavourDiv);
      reveal(iceDiv);
      reveal(whipDiv);
      reveal(milkDiv);
      reveal(coldDiv);
      reveal(hotDiv);
      reveal(espressoDiv);
    }
  
  }