
// basic customization
class Customization {

    static name = 'undefined';
    static season = seasons.get('any');

}

// customizations that track a number of something
class NumberCustomization extends Customization {

    constructor() {

        this.value = 0;

    }
    
}

// customizations that track using the amount scale
class AmountCustomization extends Customization {

    constructor() {
        this.value = Amount.NONE;
    }

}

// customizations that track using values
class ValueCustomization extends Customization {

    constructor() {
        this.value = Amount.NONE;
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

}

// type of espresso type
class EspressoType extends ValueCustomization {

    static name = 'espresso type';
    static BLONDE = 0;
    static DECAF = 1;
    static SIGNATURE = 2;

}

// type of shot type
class ShotType extends ValueCustomization {

    static name = 'shot type';
    static LONG = 0;
    static RISTRETTO = 1;
    static NONE = 2;

}

// type of shot type
class Size extends ValueCustomization {

    static name = 'size';
    static SHORT = 0;
    static TALL = 1;
    static GRANDE = 2;
    static VENTI = 3;
    static TRENTA = 4;

}

// type of shot type
class Cup extends ValueCustomization {

    static name = 'cup';

}

// amount of water
class Room extends AmountCustomization {

    static name = 'room';

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
    static HOT = Amount.DEFAULT;
    static EXTRAHOT = Amount.EXTRA;

}

// amount of water
class Water extends AmountCustomization {

    static name = 'water';

}

// amount of pumkin spice topping
class PumkinSpiceTopping extends AmountCustomization {

    static name = 'pumkin spice topping';
    static season = seasons.get('fall');

}

// amount of cinnamon dolce sprinkles
class CinnamonDolceSprinkles extends AmountCustomization {

    static name = 'cinnamon dolce sprinkles';

}

// amount of cinnamon powder
class CinnamonPowder extends AmountCustomization {

    static name = 'cinnamon powder';

}

// amount of caramel crunch topping
class CaramelCrunchTopping extends AmountCustomization {

    static name = 'caramel crunch topping';

}

// amount of cookie crumble topping
class CookieCrumbleTopping extends AmountCustomization {

    static name = 'cookie crumble topping';

}

// amount of caramel drizzle lining the cup
class LineCupWithCaramelDrizzle extends AmountCustomization {

    static name = 'line cup with caramel drizzle';

}

// amount of mocha drizzle lining the cup
class LineCupWithMochaDrizzle extends AmountCustomization {

    static name = 'line cup with mocha drizzle';

}

// amount of caramel drizzle
class CaramelDrizzle extends AmountCustomization {

    static name = 'caramel drizzle';

}

// amount of mocha drizzle
class MochaDrizzle extends AmountCustomization {

    static name = 'mocha drizzle';

}

// amount of spiced apple drizzle
class SpicedAppleDrizzle extends AmountCustomization {

    static name = 'spiced apple drizzle';
    static season = seasons.get('fall');

}

// amount of whip
class Whip extends AmountCustomization {

    static name = 'whip';

}

// amount of vanilla sweet cream cold foam
class VanillaSweetCreamColdFoam extends AmountCustomization {

    static name = 'vanilla sweet cream cold foam';

}

// amount of pumkin cream cold foam
class PumkinCreamColdFoam extends AmountCustomization {

    static name = 'pumkin cream cold foam';
    static season = seasons.get('fall');

}

// amount of salted caramel cream cold foam
class SaltedCaramelCreamColdFoam extends AmountCustomization {

    static name = 'salted caramel cream cold foam';

}

// amount of chocolate cream cold foam
class ChocolateCreamColdFoam extends AmountCustomization {

    static name = 'chocolate cream cold foam';

}

// amount of splash of nonfat
class SplashOfNonfat extends AmountCustomization {

    static name = 'splash of nonfat';

}

// amount of splash of two
class SplashOfTwo extends AmountCustomization {

    static name = 'splash of two';

}

// amount of splash of whole
class SplashOfWhole extends AmountCustomization {

    static name = 'splash of whole';

}

// amount of splash of cream
class SplashOfCream extends AmountCustomization {

    static name = 'splash of cream';

}

// amount of splash of heavy cream
class SplashOfHeavyCream extends AmountCustomization {

    static name = 'splash of heavy cream';

}

// amount of splash of soy
class SplashOfSoy extends AmountCustomization {

    static name = 'splash of soy';

}

// amount of splash of almond
class SplashOfAlmond extends AmountCustomization {

    static name = 'splash of almond';

}

// amount of splash of coconut
class SplashOfCoconut extends AmountCustomization {

    static name = 'splash of coconut';

}

// amount of splash of oat
class SplashOfOat extends AmountCustomization {

    static name = 'splash of oat';

}

// amount of splash of lactaid
class SplashOfLactaid extends AmountCustomization {

    static name = 'splash of lactaid';

}

// amount of splash of sweet cream
class SplashOfSweetCream extends AmountCustomization {

    static name = 'splash of sweet cream';

}

// amount of strawberry puree
class StrawberryPuree extends AmountCustomization {

    static name = 'strawberry puree';

}

// amount of lemonade
class Lemonade extends AmountCustomization {

    static name = 'lemonade';

}

// amount of apple juice
class AppleJuice extends AmountCustomization {

    static name = 'apple juice';

}

// amount of peach juice
class PeachJuice extends AmountCustomization {

    static name = 'peach juice';

}

// amount of black tea
class BlackTea extends AmountCustomization {

    static name = 'black tea';

}

// amount of green tea
class GreenTea extends AmountCustomization {

    static name = 'green tea';

}

// amount of passion tango tea
class PassionTangoTea extends AmountCustomization {

    static name = 'passion tango tea';

}

// amount of ice
class Ice extends AmountCustomization {

    static name = 'ice';

}

// amount of shots
class Shots extends NumberCustomization {

    static name = 'shots';

}

// amount of apple brown sugar syrup
class AppleBrownSugarSyrup extends NumberCustomization {

    static name = 'apple brown sugar syrup';
    static seasson = seassons.get('fall');

}

// amount of brown sugar syrup
class BrownSugarSyrup extends NumberCustomization {

    static name = 'brown sugar syrup';

}

// amount of caramel syrup
class CaramelSyrup extends NumberCustomization {

    static name = 'caramel syrup';

}

// amount of cinnamon dolce syrup
class CinnamonDolceSyrup extends NumberCustomization {

    static name = 'cinnamon dolce syrup';

}

// amount of hazelnut syrup
class HazelnutSyrup extends NumberCustomization {

    static name = 'hazelnut syrup';

}

// amount of peppermint syrup
class PeppermintSyrup extends NumberCustomization {

    static name = 'peppermint syrup';

}

// amount of raspberry syrup
class RaspberrySyrup extends NumberCustomization {

    static name = 'raspberry syrup';

}

// amount of toasted vanilla sugar syrup
class ToastedVanillaSyrup extends NumberCustomization {

    static name = 'toasted vanilla syrup';

}

// amount of toffee nut syrup
class ToffeeNutSyrup extends NumberCustomization {

    static name = 'toffee nut syrup';

}

// amount of vanilla syrup
class VanillaSyrup extends NumberCustomization {

    static name = 'vanilla syrup';

}

// amount of sugar free vanilla syrup
class SugarFreeVanillaSyrup extends NumberCustomization {

    static name = 'sugar free vanilla syrup';

}

// amount of chai syrup
class ChaiSyrup extends NumberCustomization {

    static name = 'chai syrup';

}

// amount of chai syrup
class ClassicSyrup extends NumberCustomization {

    static name = 'classic syrup';

}

// amount of chai syrup
class LiquidCaneSugarSyrup extends NumberCustomization {

    static name = 'liquid cane sugar syrup';

}

// amount of honey blend syrup
class HoneyBlendSyrup extends NumberCustomization {

    static name = 'honey blend syrup';

}

// amount of mocha sauce
class MochaSauce extends NumberCustomization {

    static name = 'mocha sauce';

}

// amount of dark caramel sauce
class DarkCaramelSauce extends NumberCustomization {

    static name = 'dark caramel sauce';

}

// amount of white mocha sauce
class WhiteMochaSauce extends NumberCustomization {

    static name = 'white mocha sauce';

}

// amount of pumkin spice sauce
class PumkinSpiceSauce extends NumberCustomization {

    static name = 'pumkin spice sauce';
    static season = seasons.get('fall');

}

// amount of sugar
class Sugar extends NumberCustomization {

    static name = 'sugar';

}

// amount of raw sugar
class RawSugar extends NumberCustomization {

    static name = 'raw sugar';

}

// amount of stevia
class Stevia extends NumberCustomization {

    static name = 'stevia';

}

// amount of splenda
class Splenda extends NumberCustomization {

    static name = 'splenda';

}

// amount of honey
class Honey extends NumberCustomization {

    static name = 'honey';

}

// amount of matcha powder
class MatchaPowder extends NumberCustomization {

    static name = 'matcha powder';

}

// amount of matcha
class VanillaBeanPowder extends NumberCustomization {

    static name = 'vanilla bean powder';

}

// amount of frap chips
class FrapChips extends NumberCustomization {

    static name = 'frap chips';

}

// amount of dragonfruit inclusions
class DragonFruitInclusions extends NumberCustomization {

    static name = 'dragonfruit inclusions';

}

// amount of strawberry inclusions
class StrawberryInclusions extends NumberCustomization {

    static name = 'strawberry inclusions';

}

// amount of pineapple inclusions
class PineappleInclusions extends NumberCustomization {

    static name = 'pineapple inclusions';

}
