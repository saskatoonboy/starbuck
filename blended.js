
// basic frappucino
class Frappucino extends ColdDrink {

    static group = new Group('Blended', ColdDrink.group, true);

    constructor(name, drinkType) {

        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Milk(Milk.WHOLE));

    }

}

// basic creme frappucino
class CremeFrappucino extends Frappucino {

    constructor(name, drinkType) {

        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Whip(Amount.NORMAL));

    }

}

// pumkin spice creme frappucino
class PumkinSpiceCremeFrappucino extends CremeFrappucino {

    static season = seasons.get('fall');

    constructor() {
        super('pumkin spice creme frappucino', PumkinSpiceCremeFrappucino);
        this.customizations.setDefaultCustomization(new PumkinSpiceSauce(-1));
        this.customizations.setDefaultCustomization(new PumkinSpiceTopping(Amount.NORMAL));
    }

}

// apple crisp oat creme frappucino
class AppleCrispOatCremeFrappucino extends CremeFrappucino {

    static season = seasons.get('fall');

    constructor() {
        super('apple crisp oat creme frappucino', AppleCrispOatCremeFrappucino);
        this.customizations.setDefaultCustomization(new AppleBrownSugarSyrup(-1));
        this.customizations.setDefaultCustomization(new SpicedAppleDrizzle(Amount.NORMAL));
    }

}

// chocolate cookie crumble creme frappucino
class ChocolateCookieCrumbleCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('chocolate cookie crumble creme frappucino', ChocolateCookieCrumbleCremeFrappucino);
        this.customizations.setDefaultCustomization(new MochaSauce(-1));
        this.customizations.setDefaultCustomization(new MochaDrizzle(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new CookieCrumbleTopping(Amount.NORMAL));
    }

}

// caramel ribbon crunch creme frappucino
class CaramelRibbonCrunchCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('caramel ribbon crunch creme frappucino', CaramelRibbonCrunchCremeFrappucino);
        this.customizations.setDefaultCustomization(new DarkCaramelSauce(-1));
        this.customizations.setDefaultCustomization(new CaramelDrizzle(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new CaramelCrunchTopping(Amount.NORMAL));
    }

}

// apple crisp oat creme frappucino
class StrawberryCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('strawberry creme frappucino',StrawberryCremeFrappucino);
        this.customizations.setDefaultCustomization(new ClassicSyrup(-1));
        this.customizations.setDefaultCustomization(new StrawberryPuree(Amount.NORMAL));
    }

}

// chai creme frappucino
class ChaiCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('chai creme frappucino', ChaiCremeFrappucino);
        this.customizations.setDefaultCustomization(new ChaiSyrup(-1));
        this.customizations.setDefaultCustomization(new CinnamonPowder(Amount.NORMAL));
    }

}

// double chocolaty chip creme frappucino
class DoubleChocolatyChipCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('double chocolaty chip creme frappucino', DoubleChocolatyChipCremeFrappucino);
        this.customizations.setDefaultCustomization(new MochaSauce(-1));
        this.customizations.setDefaultCustomization(new MochaDrizzle(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new FrapChips(-1));
    }

}

// match creme frappucino
class MatchaCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('matcha creme frappucino', MatchaCremeFrappucino);
        this.customizations.setDefaultCustomization(new ClassicSyrup(-1));
        this.customizations.setDefaultCustomization(new MatchaPowder(-1));
    }

}

// vanilla bean creme frappucino
class VanillaBeanCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('vanilla bean creme frappucino', VanillaBeanCremeFrappucino);
        this.customizations.setDefaultCustomization(new VanillaBeanPowder(-1));
    }

}

// white chocolate creme frappucino
class WhiteChocolateCremeFrappucino extends CremeFrappucino {

    constructor() {
        super('white chocolate creme frappucino', WhiteChocolateCremeFrappucino);
        this.customizations.setDefaultCustomization(new WhiteMochaSauce(-1));
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
        this.customizations.setDefaultCustomization(new Shots(1));

    }

}

// basic coffee frappucino with whip
class WhipCoffeeFrappucino extends CoffeeFrappucino {

    constructor(name, drinkType) {

        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Whip(Amount.NORMAL));

    }

}

// pumkin spice frappucino
class PumkinSpiceFrappucino extends WhipCoffeeFrappucino {

    static season = seasons.get('fall');

    constructor() {
        super('pumkin spice frappucino', PumkinSpiceFrappucino);
        this.customizations.setDefaultCustomization(new PumkinSpiceSauce(-1));
        this.customizations.setDefaultCustomization(new PumkinSpiceTopping(Amount.NORMAL));
    }

}

// apple crisp oat frappucino
class AppleCrispOatFrappucino extends WhipCoffeeFrappucino {

    static season = seasons.get('fall');

    constructor() {
        super('apple crisp oat frappucino', AppleCrispOatFrappucino);
        this.customizations.setDefaultCustomization(new AppleBrownSugarSyrup(-1));
        this.customizations.setDefaultCustomization(new SpicedAppleDrizzle(Amount.NORMAL));
    }

}

// mocha cookie crumble frappucino
class MochaCookieCrumbleFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('mocha cookie crumble frappucino', MochaCookieCrumbleFrappucino);
        this.customizations.setDefaultCustomization(new MochaSauce(-1));
        this.customizations.setDefaultCustomization(new MochaDrizzle(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new CookieCrumbleTopping(Amount.NORMAL));
    }

}

// caramel ribbon crunch frappucino
class CaramelRibbonCrunchFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('caramel ribbon crunch frappucino', CaramelRibbonCrunchFrappucino);
        this.customizations.setDefaultCustomization(new DarkCaramelSauce(-1));
        this.customizations.setDefaultCustomization(new CaramelDrizzle(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new CaramelCrunchTopping(Amount.NORMAL));
    }

}

// java chip frappucino
class JavaChipFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('java chip frappucino', JavaChipFrappucino);
        this.customizations.setDefaultCustomization(new MochaSauce(-1));
        this.customizations.setDefaultCustomization(new MochaDrizzle(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new FrapChips(-1));
    }

}

// cafe vanilla frappucino
class CafeVanillaFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('cafe vanilla frappucino', CafeVanillaFrappucino);
        this.customizations.setDefaultCustomization(new VanillaBeanPowder(-1));
    }

}

// white mocha frappucino
class WhiteMochaFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('white mocha frappucino', WhiteMochaFrappucino);
        this.customizations.setDefaultCustomization(new WhiteMochaSauce(-1));
    }

}

// mocha frappucino
class MochaFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('mocha frappucino', MochaFrappucino);
        this.customizations.setDefaultCustomization(new MochaSauce(-1));
    }

}

// caramel frappucino
class CaramelFrappucino extends WhipCoffeeFrappucino {

    constructor() {
        super('caramel frappucino', CaramelFrappucino);
        this.customizations.setDefaultCustomization(new CaramelSyrup(-1));
        this.customizations.setDefaultCustomization(new CaramelDrizzle(Amount.NORMAL));
    }

}

// blended strawberry lemonade
class BlendedStrawberryLemonade extends ColdDrink {

    static group = Frappucino.group;

    constructor() {
        super('blended strawberry lemonade', BlendedStrawberryLemonade);
        this.customizations.setDefaultCustomization(new StrawberryPuree(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new LemonadeJuice(Amount.NORMAL));
    }

}