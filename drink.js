
const drinks = new Map();
const drinkTypes = new Map();

class Drink {

    constructor(name, active, drinkType) {

        let group = drinkType.group;
        drinks.push(name, this);
        drinkTypes.push(name, drinkType);
        let words = name.split(' ');
        let capName = '';
        for (let word of words) {
            capName = capName + word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() + ' ';
        }
        capName = capName.substring(0, capName.length-1);
        new DrinkSetting(capName, group, active);
        this.cusomizations = new CustomizationHolder();

    }

    reset() {
        this.cusomizations = new CustomizationHolder(this.cusomizations.getDefaults());
    }

}

class HotDrink extends Drink {

    static group = new ExpandableParentGroup('Hot Drinks');

    constructor(name, active, drinkType) {
        if (drinkType == undefined) {
            drinkType = active;
            active = true;
        }
        super(name, active, drinkType);
    }

}

class ColdDrink extends Drink {

    static group = new ExpandableParentGroup('Cold Drinks');

    constructor(name, active, drinkType) {
        if (drinkType == undefined) {
            drinkType = active;
            active = true;
        }
        super(name, active, drinkType);
    }

}
