
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

    constructor() {
        super();
        this.name = Milk.name;
    }

}

// type of espresso
class EspressoType extends ValueCustomization {

    static name = 'espresso type';
    static SIGNATURE = 0;
    static DECAF = 1;
    static BLONDE = 2;
    static group = new Group('Espresso', Customization.group, true);

    constructor() {
        super();
        this.name = EspressoType.name;
    }

}

// type of shot
class ShotType extends ValueCustomization {

    static name = 'shot type';
    static NONE = 0;
    static RISTRETTO = 1;
    static LONG = 2;
    static group = EspressoType.group;

    constructor() {
        super();
        this.name = ShotType.name;
    }

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

    constructor() {
        super();
        this.name = Size.name;
    }

}

// type of shot type
class Cup extends ValueCustomization {

    static name = 'cup';
    static group = Size.group;

    constructor() {
        super();
        this.name = Cup.name;
    }

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
        this.name = Room.name;

    }

}

// amount of water
class Foam extends AmountCustomization {

    static name = 'foam';

    constructor() {
        super();
        this.name = Foam.name;
    }

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
        this.name = Temp.name
    }

}

// amount of water
class Water extends AmountCustomization {

    static name = 'water';

    constructor() {
        super();
        this.name = Water.name;
    }

}

class Topping extends AmountCustomization {

    static group = new Group('Other', Customization.group, true);

}

// amount of pumkin spice topping
class PumkinSpiceTopping extends Topping {

    static name = 'pumkin spice topping';
    static season = seasons.get('fall');

    constructor() {
        super();
        this.name = PumkinSpiceTopping.name;
    }

}

// amount of cinnamon dolce sprinkles
class CinnamonDolceSprinkles extends Topping {

    static name = 'cinnamon dolce sprinkles';

    constructor() {
        super();
        this.name = CinnamonDolceSprinkles.name;
    }

}

// amount of cinnamon powder
class CinnamonPowder extends Topping {

    static name = 'cinnamon powder';

    constructor() {
        super();
        this.name = CinnamonPowder.name;
    }

}

// amount of caramel crunch topping
class CaramelCrunchTopping extends Topping {

    static name = 'caramel crunch topping';

    constructor() {
        super();
        this.name = CaramelCrunchTopping.name;
    }

}

// amount of cookie crumble topping
class CookieCrumbleTopping extends Topping {

    static name = 'cookie crumble topping';

    constructor() {
        super();
        this.name = CookieCrumbleTopping.name;
    }

}

// amount of caramel drizzle lining the cup
class LineCupWithCaramelDrizzle extends Topping {

    static name = 'line cup with caramel drizzle';

    constructor() {
        super();
        this.name = LineCupWithCaramelDrizzle.name;
    }

}

// amount of mocha drizzle lining the cup
class LineCupWithMochaDrizzle extends Topping {

    static name = 'line cup with mocha drizzle';

    constructor() {
        super();
        this.name = LineCupWithMochaDrizzle.name;
    }

}

// amount of caramel drizzle
class CaramelDrizzle extends Topping {

    static name = 'caramel drizzle';

    constructor() {
        super();
        this.name = CaramelDrizzle.name;
    }

}

// amount of mocha drizzle
class MochaDrizzle extends Topping {

    static name = 'mocha drizzle';

    constructor() {
        super();
        this.name = MochaDrizzle.name;
    }

}

// amount of spiced apple drizzle
class SpicedAppleDrizzle extends Topping {

    static name = 'spiced apple drizzle';
    static season = seasons.get('fall');

    constructor() {
        super();
        this.name = SpicedAppleDrizzle.name;
    }

}

// amount of whip
class Whip extends Topping {

    static name = 'whip';

    constructor() {
        super();
        this.name = Whip.name;
    }

}

class ColdFoam extends AmountCustomization {

    static group = new Group('Coal Foam', Customization.group, true);

}

// amount of vanilla sweet cream cold foam
class VanillaSweetCreamColdFoam extends ColdFoam {

    static name = 'vanilla sweet cream cold foam';

    constructor() {
        super();
        this.name = VanillaSweetCreamColdFoam.name;
    }

}

// amount of pumkin cream cold foam
class PumkinCreamColdFoam extends ColdFoam {

    static name = 'pumkin cream cold foam';
    static season = seasons.get('fall');

    constructor() {
        super();
        this.name = PumkinCreamColdFoam.name;
    }

}

// amount of salted caramel cream cold foam
class SaltedCaramelCreamColdFoam extends ColdFoam {

    static name = 'salted caramel cream cold foam';

    constructor() {
        super();
        this.name = SaltedCaramelCreamColdFoam.name;
    }

}

// amount of chocolate cream cold foam
class ChocolateCreamColdFoam extends ColdFoam {

    static name = 'chocolate cream cold foam';

    constructor() {
        super();
        this.name = ChocolateCreamColdFoam.name;
    }

}

// amount of splash of nonfat
class SplashOfNonfat extends AmountCustomization {

    static name = 'splash of nonfat';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfNonfat.name;
    }

};

// amount of splash of two
class SplashOfTwo extends AmountCustomization {

    static name = 'splash of two';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfTwo.name;
    }

}

// amount of splash of whole
class SplashOfWhole extends AmountCustomization {

    static name = 'splash of whole';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfWhole.name;
    }

}

// amount of splash of cream
class SplashOfCream extends AmountCustomization {

    static name = 'splash of cream';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfCream.name;
    }

}

// amount of splash of heavy cream
class SplashOfHeavyCream extends AmountCustomization {

    static name = 'splash of heavy cream';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfHeavyCream.name;
    }

}

// amount of splash of soy
class SplashOfSoy extends AmountCustomization {

    static name = 'splash of soy';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfSoy.name;
    }

}

// amount of splash of almond
class SplashOfAlmond extends AmountCustomization {

    static name = 'splash of almond';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfAlmond.name;
    }

}

// amount of splash of coconut
class SplashOfCoconut extends AmountCustomization {

    static name = 'splash of coconut';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfCoconut.name;
    }

}

// amount of splash of oat
class SplashOfOat extends AmountCustomization {

    static name = 'splash of oat';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfOat.name;
    }

}

// amount of splash of lactaid
class SplashOfLactaid extends AmountCustomization {

    static name = 'splash of lactaid';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfLactaid.name;
    }

}

// amount of splash of sweet cream
class SplashOfSweetCream extends AmountCustomization {

    static name = 'splash of sweet cream';
    static group = Milk.group;

    constructor() {
        super();
        this.name = SplashOfSweetCream.name;
    }

}

// amount of strawberry puree
class StrawberryPuree extends AmountCustomization {

    static name = 'strawberry puree';

    constructor() {
        super();
        this.name = StrawberryPuree.name;
    }

}

class Juice extends AmountCustomization {

    static group = new Group('Juice', Customization.group, true);

}

// amount of lemonade
class LemonadeJuice extends Juice {

    static name = 'lemonade';

    constructor() {
        super();
        this.name = LemonadeJuice.name;
    }

}

// amount of apple juice
class AppleJuice extends Juice {

    static name = 'apple juice';

    constructor() {
        super();
        this.name = AppleJuice.name;
    }

}

// amount of peach juice
class PeachJuice extends Juice {

    static name = 'peach juice';

    constructor() {
        super();
        this.name = PeachJuice.name;
    }

}

// amount of black tea
class BlackTea extends Juice {

    static name = 'black tea';

    constructor() {
        super();
        this.name = BlackTea.name;
    }

}

// amount of green tea
class GreenTea extends Juice {

    static name = 'green tea';

    constructor() {
        super();
        this.name = GreenTea.name;
    }

}

// amount of passion tango tea
class PassionTangoTea extends Juice {

    static name = 'passion tango tea';

    constructor() {
        super();
        this.name = PassionTangoTea.name;
    }

}

// amount of strawberry acai base
class StrawberryAcaiBase extends Juice {

    static name = 'strawberry acai base';

    constructor() {
        super();
        this.name = StrawberryAcaiBase.name;
    }

}

// amount of mango dragonfruit base
class MangoDragonfruitBase extends Juice {

    static name = 'mango dragonfruit base';

    constructor() {
        super();
        this.name = MangoDragonfruitBase.name;
    }

}

// amount of pineapple passionfruit tea
class PineapplePassionfruitBase extends Juice {

    static name = 'pineapple passionfruit base';

    constructor() {
        super();
        this.name = PineapplePassionfruitBase.name;
    }

}

// amount of ice
class Ice extends AmountCustomization {

    static name = 'ice';

    constructor() {
        super();
        this.name = Ice.name;
    }

}

// amount of shots
class Shots extends NumberCustomization {

    static name = 'shots';
    static group = EspressoType.group;

    constructor() {
        super();
        this.name = Shots.name;
    }

}

class Syrup extends NumberCustomization {

    static group = new Group('Syrup', Customization.group, true);

}

// amount of apple brown sugar syrup
class AppleBrownSugarSyrup extends Syrup {

    static name = 'apple brown sugar syrup';
    static season = seasons.get('fall');

    constructor() {
        super();
        this.name = AppleBrownSugarSyrup.name;
    }

}

// amount of brown sugar syrup
class BrownSugarSyrup extends Syrup {

    static name = 'brown sugar syrup';

    constructor() {
        super();
        this.name = BrownSugarSyrup.name;
    }

}

// amount of caramel syrup
class CaramelSyrup extends Syrup {

    static name = 'caramel syrup';

    constructor() {
        super();
        this.name = CaramelSyrup.name;
    }

}

// amount of cinnamon dolce syrup
class CinnamonDolceSyrup extends Syrup {

    static name = 'cinnamon dolce syrup';

    constructor() {
        super();
        this.name = CinnamonDolceSyrup.name;
    }

}

// amount of hazelnut syrup
class HazelnutSyrup extends Syrup {

    static name = 'hazelnut syrup';

    constructor() {
        super();
        this.name = HazelnutSyrup.name;
    }

}

// amount of peppermint syrup
class PeppermintSyrup extends Syrup {

    static name = 'peppermint syrup';

    constructor() {
        super();
        this.name = PeppermintSyrup.name;
    }

}

// amount of raspberry syrup
class RaspberrySyrup extends Syrup {

    static name = 'raspberry syrup';

    constructor() {
        super();
        this.name = RaspberrySyrup.name;
    }

}

// amount of toasted vanilla sugar syrup
class ToastedVanillaSyrup extends Syrup {

    static name = 'toasted vanilla syrup';

    constructor() {
        super();
        this.name = ToastedVanillaSyrup.name;
    }

}

// amount of toffee nut syrup
class ToffeeNutSyrup extends Syrup {

    static name = 'toffee nut syrup';

    constructor() {
        super();
        this.name = ToffeeNutSyrup.name;
    }

}

// amount of vanilla syrup
class VanillaSyrup extends Syrup {

    static name = 'vanilla syrup';

    constructor() {
        super();
        this.name = VanillaSyrup.name;
    }

}

// amount of sugar free vanilla syrup
class SugarFreeVanillaSyrup extends Syrup {

    static name = 'sugar free vanilla syrup';

    constructor() {
        super();
        this.name = SugarFreeVanillaSyrup.name;
    }

}

// amount of chai syrup
class ChaiSyrup extends Syrup {

    static name = 'chai syrup';

    constructor() {
        super();
        this.name = ChaiSyrup.name;
    }

}

// amount of chai syrup
class ClassicSyrup extends Syrup {

    static name = 'classic syrup';

    constructor() {
        super();
        this.name = ClassicSyrup.name;
    }

}

// amount of chai syrup
class LiquidCaneSugarSyrup extends Syrup {

    static name = 'liquid cane sugar syrup';

    constructor() {
        super();
        this.name = LiquidCaneSugarSyrup.name;
    }

}

// amount of honey blend syrup
class HoneyBlendSyrup extends Syrup {

    static name = 'honey blend syrup';

    constructor() {
        super();
        this.name = HoneyBlendSyrup.name;
    }

}

// amount of mocha sauce
class MochaSauce extends Syrup {

    static name = 'mocha sauce';

    constructor() {
        super();
        this.name = MochaSauce.name;
    }

}

// amount of dark caramel sauce
class DarkCaramelSauce extends Syrup {

    static name = 'dark caramel sauce';

    constructor() {
        super();
        this.name = DarkCaramelSauce.name;
    }

}

// amount of white mocha sauce
class WhiteMochaSauce extends Syrup {

    static name = 'white mocha sauce';

    constructor() {
        super();
        this.name = WhiteMochaSauce.name;
    }

}

// amount of pumkin spice sauce
class PumkinSpiceSauce extends Syrup {

    static name = 'pumkin spice sauce';
    static season = seasons.get('fall');

    constructor() {
        super();
        this.name = PumkinSpiceSauce.name;
    }

}

class Sweetner extends NumberCustomization {

    static group = new Group('Sweetner', Customization.group, true);

}

// amount of sugar
class Sugar extends Sweetner {

    static name = 'sugar';

    constructor() {
        super();
        this.name = Sugar.name;
    }

}

// amount of raw sugar
class RawSugar extends Sweetner {

    static name = 'raw sugar';

    constructor() {
        super();
        this.name = RawSugar.name;
    }

}

// amount of stevia
class Stevia extends Sweetner {

    static name = 'stevia';

    constructor() {
        super();
        this.name = Stevia.name;
    }

}

// amount of splenda
class Splenda extends Sweetner {

    static name = 'splenda';

    constructor() {
        super();
        this.name = Splenda.name;
    }

}

// amount of honey
class Honey extends Sweetner {

    static name = 'honey';

    constructor() {
        super();
        this.name = Honey.name;
    }

}

class Inclusion extends NumberCustomization {

    static group = new Group('Inclusions', Customization.group, true);

}

// amount of matcha powder
class MatchaPowder extends Inclusion {

    static name = 'matcha powder';

    constructor() {
        super();
        this.name = MatchaPowder.name;
    }

}

// amount of matcha
class VanillaBeanPowder extends Inclusion {

    static name = 'vanilla bean powder';

    constructor() {
        super();
        this.name = VanillaBeanPowder.name;
    }

}

// amount of frap chips
class FrapChips extends Inclusion {

    static name = 'frap chips';

    constructor() {
        super();
        this.name = FrapChips.name;
    }

}

// amount of dragonfruit inclusions
class DragonFruitInclusions extends Inclusion {

    static name = 'dragonfruit inclusions';

    constructor() {
        super();
        this.name = DragonFruitInclusions.name;
    }

}

// amount of strawberry inclusions
class StrawberryInclusions extends Inclusion {

    static name = 'strawberry inclusions';

    constructor() {
        super();
        this.name = StrawberryInclusions.name;
    }

}

// amount of pineapple inclusions
class PineappleInclusions extends Inclusion {

    static name = 'pineapple inclusions';

    constructor() {
        super();
        this.name = PineappleInclusions.name;
    }

}
