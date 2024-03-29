
// a map to store all of the drinks and drink types relative to their names
const drinks = new Map();
const drinkTypes = new Map();

class Drink {
    
    static season = seasons.get('any');

    constructor(name, active, drinkType) {

        if (Season.isValid(drinkType.season)) {


            // geet the group of the drink
            let group = drinkType.group;
            // store the drink and drink types in their maps
            drinks.push(name, this);
            drinkTypes.push(name, drinkType);
            // capitalize the words in the name of the drink
            let words = name.split(' ');
            let capName = '';
            for (let word of words) {
                capName = capName + word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() + ' ';
            }
            capName = capName.substring(0, capName.length - 1);
            // create a new checkbox setting for this drink within it's group
            this.weight = new WeightedSetting(capName, 10);
            this.advancedGroup = new Group('', group.advanced);
            this.checkbox = new CheckboxSetting(capName, group, active);
            if (group.advanced) {
                this.weight.addGroup(this.advancedGroup);
                this.checkbox.createLink(this.advancedGroup);
                this.weight.setSibling(this.checkbox.link);
                this.checkbox.link.setSibling(this.weight);
                this.weight.hideLabel();
            }
            
            weightedDrinks[0].push(this, this.weight.getValue());
            weightedDrinks[1].push(this.weight);
        }
        // create a customization holder to store the customizations on this drink
        this.customizations = new CustomizationHolder();
        

    }

    // reset the cussomization holder to the default values
    reset() {
        this.customizations = new CustomizationHolder(this.cusomizations.getDefaults());
    }

}

// a generic hot drink
class HotDrink extends Drink {

    // declare a settings group that all hot drinks fall under
    static group = new Group('Hot Drinks', undefined, true);

    constructor(name, active, drinkType) {
        if (drinkType == undefined) {
            drinkType = active;
            active = true;
        }
        super(name, active, drinkType);
    }

}

// a generic cold drink
class ColdDrink extends Drink {

    // declare a settings group that all cold drinks fall under
    static group = new Group('Cold Drinks', undefined, true);

    constructor(name, active, drinkType) {
        if (drinkType == undefined) {
            drinkType = active;
            active = true;
        }
        super(name, active, drinkType);
        this.customizations.setDefaultCustomization(new Temp(Temp.COLD));
        this.customizations.setDefaultCustomization(new Ice(Amount.NORMAL));
    }

}
