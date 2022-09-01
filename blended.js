
// basic frappucino
class Frappucino extends ColdDrink {

    constructor(name, drinkType) {

        super(name, drinkType);

    }

}

// basic creme frappucino
class CremeFrappucino extends Frappucino {

    constructor(name, drinkType) {

        super(name, drinkType);

    }

}

// pumkin spice creme frappucino
class PumkinSpiceCremeFrappucino extends CremeFrappucino {

    static season = seasons.get('fall');

    constructor() {
        super('pumkin spice creme frappucino', PumkinSpiceCremeFrappucino);
    }

}

// apple crisp oat creme frappucino
class AppleCrispOatCremeFrappucino extends CremeFrappucino {

    static season = seasons.get('fall');

    constructor() {
        super('apple crisp oat creme frappucino', AppleCrispOatCremeFrappucino);
    }

}

// chocolate cookie crumble creme frappucino
class ChocolateCookieCrumbleCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('chocolate cookie crumble creme frappucino', ChocolateCookieCrumbleCremeFrappucino);
    }

}

// caramel ribbon crunch creme frappucino
class CaramelRibbonCrunchCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('caramel ribbon crunch creme frappucino', CaramelRibbonCrunchCremeFrappucino);
    }

}

// apple crisp oat creme frappucino
class StrawberryCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('strawberry creme frappucino',StrawberryCremeFrappucino);
    }

}

// chai creme frappucino
class ChaiCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('chai creme frappucino', ChaiCremeFrappucino);
    }

}

// double chocolaty chip creme frappucino
class DoubleChocolatyChipCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('double chocolaty chip creme frappucino', DoubleChocolatyChipCremeFrappucino);
    }

}

// match creme frappucino
class MatchaCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('matcha creme frappucino', MatchaCremeFrappucino);
    }

}

// vanilla bean creme frappucino
class VanillaBeanCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('vanilla bean creme frappucino', VanillaBeanCremeFrappucino);
    }

}

// white chocolate creme frappucino
class WhiteChocolateCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('white chocolate creme frappucino', WhiteChocolateCremeFrappucino);
    }

}

// basic coffee frappucino
class CoffeeFrappucino extends Frappucino {

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'coffee frappucino';
            drinkType = CoffeeFrappucino;
        }

        super(name, drinkType);

    }

}

// espresso frappucino
class EspressoFrappucino extends CoffeeFrappucino {

    constructor() {

        super('espresso frappucino', EspressoFrappucino);

    }

}

// basic coffee frappucino with whip
class WhipCoffeeFrappucino extends CoffeeFrappucino {

    constructor(name, drinkType) {

        super(name, drinkType);

    }

}

// pumkin spice frappucino
class PumkinSpiceFrappucino extends WhipCoffeeFrappucino {

    static season = seasons.get('fall');

    constructor() {
        super('pumkin spice frappucino', PumkinSpiceFrappucino);
    }

}

// apple crisp oat frappucino
class AppleCrispOatFrappucino extends WhipCoffeeFrappucino {

    static season = seasons.get('fall');

    constructor() {
        super('apple crisp oat frappucino', AppleCrispOatFrappucino);
    }

}

// mocha cookie crumble frappucino
class MochaCookieCrumbleFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('mocha cookie crumble frappucino', MochaCookieCrumbleFrappucino);
    }

}

// caramel ribbon crunch frappucino
class CaramelRibbonCrunchFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('caramel ribbon crunch frappucino', CaramelRibbonCrunchFrappucino);
    }

}

// java chip frappucino
class JavaChipFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('java chip frappucino', JavaChipFrappucino);
    }

}

// cafe vanilla frappucino
class CafeVanillaFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('cafe vanilla frappucino', CafeVanillaFrappucino);
    }

}

// white mocha frappucino
class WhiteMochaFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('white mocha frappucino', WhiteMochaFrappucino);
    }

}

// mocha frappucino
class MochaFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('mocha frappucino', MochaFrappucino);
    }

}

// caramel frappucino
class CaramelFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('caramel frappucino', CaramelFrappucino);
    }

}

// blended strawberry lemonade
class BlendedStrawberryLemonade extends ColdDrink {

    constructor() {
        super('blended strawberry lemonade', BlendedStrawberryLemonade);
    }

}