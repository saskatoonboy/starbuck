
// basic setting amount values
class Amount {
    static NONE = 0;
    static LIGHT = 1;
    static NORMAL = 2;
    static EXTRA = 3;
}

// basic customization
class Customization {

    static name = 'undefined';
    static season = seasons.get('any');
    static group = new Group('Customizations', undefined, true);
    static loadSetting(customization) {

        // capitalize the words in the name of the drink
        let words = customization.name.split(' ');
        let capName = '';
        for (let word of words) {
            capName = capName + word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() + ' ';
        }
        capName = capName.substring(0, capName.length - 1);

        // create a new percentage setting for this drink within it's group
        new PercentageSetting(capName, customization.group, 100);

    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    constructor(value) {
        if (value) {
            this.value = value;
        }
    }

}

// customizations that track a number of something
class NumberCustomization extends Customization {

    static group = new Group('Other', Customization.group, true);

    constructor(value) {
        if (value) {
            super(value);
        } else {
            super(0);
        }

    }

}

// customizations that track using the amount scale
class AmountCustomization extends Customization {

    static group = NumberCustomization.group;

    constructor(value) {
        if (value) {
            super(value);
        } else {
            super(Amount.NONE);
        }
    }

}

// customizations that track using values
class ValueCustomization extends Customization {

    static group = NumberCustomization.group;

    constructor(value) {
        if (value) {
            super(value);
        } else {
            super(Amount.NONE);
        }
    }

}

// type of milk
class Milk extends ValueCustomization {

    static name = 'milk';
    static NONE = 0;
    static NONFAT = 1;
    static TWO = 2;
    static WHOLE = 3;
    static CREAM = 4;
    static HEAVYCREAM = 5;
    static SOY = 6;
    static ALMOND = 7;
    static COCONUT = 8;
    static OAT = 9;
    static LACTAID = 10;
    static group = new Group('Milk', Customization.group, true);

}

// type of espresso
class EspressoType extends ValueCustomization {

    static name = 'espresso type';
    static SIGNATURE = 0;
    static DECAF = 1;
    static BLONDE = 2;
    static group = new Group('Espresso', Customization.group, true);

}

// type of shot
class ShotType extends ValueCustomization {

    static name = 'shot type';
    static NONE = 0;
    static RISTRETTO = 1;
    static LONG = 2;
    static group = EspressoType.group;

}

// type of shot type
class Size extends ValueCustomization {

    static name = 'size';
    static SHORT = 1;
    static TALL = 2;
    static GRANDE = 0;
    static VENTI = 3;
    static TRENTA = 4;
    static group = new Group('Size', Customization.group, true);

}

// type of shot type
class Cup extends ValueCustomization {

    static name = 'cup';
    static group = Size.group;

}

// amount of water
class Room extends AmountCustomization {

    static name = 'room';

    constructor(value) {

        if (value) {
            super(value);
        } else {
            super(Amount.NORMAL);
        }

    }

}

// amount of water
class Foam extends AmountCustomization {

    static name = 'foam';

}

// amount of water
class Temp extends AmountCustomization {

    static name = 'temp';
    static COLD = Amount.NONE;
    static WARM = Amount.LIGHT;
    static HOT = Amount.NORMAL;
    static EXTRAHOT = Amount.EXTRA;

    constructor(value) {

        if (value) {
            super(value);
        } else {
            super(Temp.WARM);
        }
    }

}

// amount of water
class Water extends AmountCustomization {

    static name = 'water';

}

class Topping extends AmountCustomization {

    static group = new Group('Other', Customization.group, true);

}

// amount of pumkin spice topping
class PumkinSpiceTopping extends Topping {

    static name = 'pumkin spice topping';
    static season = seasons.get('fall');

}

// amount of cinnamon dolce sprinkles
class CinnamonDolceSprinkles extends Topping {

    static name = 'cinnamon dolce sprinkles';

}

// amount of cinnamon powder
class CinnamonPowder extends Topping {

    static name = 'cinnamon powder';

}

// amount of caramel crunch topping
class CaramelCrunchTopping extends Topping {

    static name = 'caramel crunch topping';

}

// amount of cookie crumble topping
class CookieCrumbleTopping extends Topping {

    static name = 'cookie crumble topping';

}

// amount of caramel drizzle lining the cup
class LineCupWithCaramelDrizzle extends Topping {

    static name = 'line cup with caramel drizzle';

}

// amount of mocha drizzle lining the cup
class LineCupWithMochaDrizzle extends Topping {

    static name = 'line cup with mocha drizzle';

}

// amount of caramel drizzle
class CaramelDrizzle extends Topping {

    static name = 'caramel drizzle';

}

// amount of mocha drizzle
class MochaDrizzle extends Topping {

    static name = 'mocha drizzle';

}

// amount of spiced apple drizzle
class SpicedAppleDrizzle extends Topping {

    static name = 'spiced apple drizzle';
    static season = seasons.get('fall');

}

// amount of whip
class Whip extends Topping {

    static name = 'whip';

}

class ColdFoam extends AmountCustomization {

    static group = new Group('Coal Foam', Customization.group, true);

}

// amount of vanilla sweet cream cold foam
class VanillaSweetCreamColdFoam extends ColdFoam {

    static name = 'vanilla sweet cream cold foam';

}

// amount of pumkin cream cold foam
class PumkinCreamColdFoam extends ColdFoam {

    static name = 'pumkin cream cold foam';
    static season = seasons.get('fall');

}

// amount of salted caramel cream cold foam
class SaltedCaramelCreamColdFoam extends ColdFoam {

    static name = 'salted caramel cream cold foam';

}

// amount of chocolate cream cold foam
class ChocolateCreamColdFoam extends ColdFoam {

    static name = 'chocolate cream cold foam';

}

// amount of splash of nonfat
class SplashOfNonfat extends AmountCustomization {

    static name = 'splash of nonfat';
    static group = Milk.group;

};

// amount of splash of two
class SplashOfTwo extends AmountCustomization {

    static name = 'splash of two';
    static group = Milk.group;

}

// amount of splash of whole
class SplashOfWhole extends AmountCustomization {

    static name = 'splash of whole';
    static group = Milk.group;

}

// amount of splash of cream
class SplashOfCream extends AmountCustomization {

    static name = 'splash of cream';
    static group = Milk.group;

}

// amount of splash of heavy cream
class SplashOfHeavyCream extends AmountCustomization {

    static name = 'splash of heavy cream';
    static group = Milk.group;

}

// amount of splash of soy
class SplashOfSoy extends AmountCustomization {

    static name = 'splash of soy';
    static group = Milk.group;

}

// amount of splash of almond
class SplashOfAlmond extends AmountCustomization {

    static name = 'splash of almond';
    static group = Milk.group;

}

// amount of splash of coconut
class SplashOfCoconut extends AmountCustomization {

    static name = 'splash of coconut';
    static group = Milk.group;

}

// amount of splash of oat
class SplashOfOat extends AmountCustomization {

    static name = 'splash of oat';
    static group = Milk.group;

}

// amount of splash of lactaid
class SplashOfLactaid extends AmountCustomization {

    static name = 'splash of lactaid';
    static group = Milk.group;

}

// amount of splash of sweet cream
class SplashOfSweetCream extends AmountCustomization {

    static name = 'splash of sweet cream';
    static group = Milk.group;

}

// amount of strawberry puree
class StrawberryPuree extends AmountCustomization {

    static name = 'strawberry puree';

}

class Juice extends AmountCustomization {

    static group = new Group('Juice', Customization.group, true);

}

// amount of lemonade
class LemonadeJuice extends Juice {

    static name = 'lemonade';

}

// amount of apple juice
class AppleJuice extends Juice {

    static name = 'apple juice';

}

// amount of peach juice
class PeachJuice extends Juice {

    static name = 'peach juice';

}

// amount of black tea
class BlackTea extends Juice {

    static name = 'black tea';

}

// amount of green tea
class GreenTea extends Juice {

    static name = 'green tea';

}

// amount of passion tango tea
class PassionTangoTea extends Juice {

    static name = 'passion tango tea';

}

// amount of strawberry acai base
class StrawberryAcaiBase extends Juice {

    static name = 'strawberry acai base';

}

// amount of mango dragonfruit base
class MangoDragonfruitBase extends Juice {

    static name = 'mango dragonfruit base';

}

// amount of pineapple passionfruit tea
class PineapplePassionfruitBase extends Juice {

    static name = 'pineapple passionfruit base';

}

// amount of ice
class Ice extends AmountCustomization {

    static name = 'ice';

}

// amount of shots
class Shots extends NumberCustomization {

    static name = 'shots';
    static group = EspressoType.group;

}

class Syrup extends NumberCustomization {

    static group = new Group('Syrup', Customization.group, true);

}

// amount of apple brown sugar syrup
class AppleBrownSugarSyrup extends Syrup {

    static name = 'apple brown sugar syrup';
    static season = seasons.get('fall');

}

// amount of brown sugar syrup
class BrownSugarSyrup extends Syrup {

    static name = 'brown sugar syrup';

}

// amount of caramel syrup
class CaramelSyrup extends Syrup {

    static name = 'caramel syrup';

}

// amount of cinnamon dolce syrup
class CinnamonDolceSyrup extends Syrup {

    static name = 'cinnamon dolce syrup';

}

// amount of hazelnut syrup
class HazelnutSyrup extends Syrup {

    static name = 'hazelnut syrup';

}

// amount of peppermint syrup
class PeppermintSyrup extends Syrup {

    static name = 'peppermint syrup';

}

// amount of raspberry syrup
class RaspberrySyrup extends Syrup {

    static name = 'raspberry syrup';

}

// amount of toasted vanilla sugar syrup
class ToastedVanillaSyrup extends Syrup {

    static name = 'toasted vanilla syrup';

}

// amount of toffee nut syrup
class ToffeeNutSyrup extends Syrup {

    static name = 'toffee nut syrup';

}

// amount of vanilla syrup
class VanillaSyrup extends Syrup {

    static name = 'vanilla syrup';

}

// amount of sugar free vanilla syrup
class SugarFreeVanillaSyrup extends Syrup {

    static name = 'sugar free vanilla syrup';

}

// amount of chai syrup
class ChaiSyrup extends Syrup {

    static name = 'chai syrup';

}

// amount of chai syrup
class ClassicSyrup extends Syrup {

    static name = 'classic syrup';

}

// amount of chai syrup
class LiquidCaneSugarSyrup extends Syrup {

    static name = 'liquid cane sugar syrup';

}

// amount of honey blend syrup
class HoneyBlendSyrup extends Syrup {

    static name = 'honey blend syrup';

}

// amount of mocha sauce
class MochaSauce extends Syrup {

    static name = 'mocha sauce';

}

// amount of dark caramel sauce
class DarkCaramelSauce extends Syrup {

    static name = 'dark caramel sauce';

}

// amount of white mocha sauce
class WhiteMochaSauce extends Syrup {

    static name = 'white mocha sauce';

}

// amount of pumkin spice sauce
class PumkinSpiceSauce extends Syrup {

    static name = 'pumkin spice sauce';
    static season = seasons.get('fall');

}

class Sweetner extends NumberCustomization {

    static group = new Group('Sweetner', Customization.group, true);

}

// amount of sugar
class Sugar extends Sweetner {

    static name = 'sugar';

}

// amount of raw sugar
class RawSugar extends Sweetner {

    static name = 'raw sugar';

}

// amount of stevia
class Stevia extends Sweetner {

    static name = 'stevia';

}

// amount of splenda
class Splenda extends Sweetner {

    static name = 'splenda';

}

// amount of honey
class Honey extends Sweetner {

    static name = 'honey';

}

class Inclusion extends NumberCustomization {

    static group = new Group('Inclusions', Customization.group, true);

}

// amount of matcha powder
class MatchaPowder extends Inclusion {

    static name = 'matcha powder';

}

// amount of matcha
class VanillaBeanPowder extends Inclusion {

    static name = 'vanilla bean powder';

}

// amount of frap chips
class FrapChips extends Inclusion {

    static name = 'frap chips';

}

// amount of dragonfruit inclusions
class DragonFruitInclusions extends Inclusion {

    static name = 'dragonfruit inclusions';

}

// amount of strawberry inclusions
class StrawberryInclusions extends Inclusion {

    static name = 'strawberry inclusions';

}

// amount of pineapple inclusions
class PineappleInclusions extends Inclusion {

    static name = 'pineapple inclusions';

}
