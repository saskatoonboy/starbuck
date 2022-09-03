
// basic latte drink
class Latte extends HotDrink {

    // create a settings group for lattes
    static group = new Group('Lattes', HotDrink.group, true);

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'latte';
            drinkType = Latte;
        }

        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));
        this.customizations.setDefaultCustomization(new Foam(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new Shots(-1));

    }

}
// basic latte with whip
class WhipLatte extends Latte {

    constructor(name, drinkType) {

        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Whip(Amount.NORMAL));

    }

}

// cappuccino
class Cappuccino extends Latte {

    constructor() {

        super('cappuccino', Cappuccino);

    }

}

// basic flat white
class FlatWhite extends Latte {

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'flate white';
            drinkType = FlatWhite;
        }

        super(name, drinkType);
        this.customizations.setDefaultCustomization(new ShotType(ShotType.RISTRETTO));
        this.customizations.setDefaultCustomization(new Milk(Milk.WHOLE));

    }

}

// honey almond flat white
class HoneyAlmondFlatWhite extends FlatWhite {

    constructor() {

        super('honey almond flat white', HoneyAlmondFlatWhite);
        this.customizations.setDefaultCustomization(new HoneyBlendSyrup(-1));
        this.customizations.setDefaultCustomization(new Milk(Milk.ALMOND));

    }

}

// pumkin spice latte
class PumkinSpiceLatte extends WhipLatte {

    static season = seasons.get('fall');

    constructor() {
        super('pumkin spice latte', PumkinSpiceLatte);
        this.customizations.setDefaultCustomization(new PumkinSpiceSauce(-1));
        this.customizations.setDefaultCustomization(new PumkinSpiceTopping(Amount.NORMAL));
    }

}

// cinnamon dolce latte
class CinnamonDolceLatte extends WhipLatte {

    constructor() {
        super('cinnamon dolce latte', CinnamonDolceLatte);
        this.customizations.setDefaultCustomization(new CinnamonDolceSyrup(-1));
        this.customizations.setDefaultCustomization(new CinnamonDolceSprinkles(Amount.NORMAL));
    }

}

// mocha
class Mocha extends WhipLatte {

    constructor() {
        super('mocha', Mocha);
        this.customizations.setDefaultCustomization(new MochaSauce(-1));
        this.customizations.setDefaultCustomization(new MochaDrizzle(Amount.NORMAL));
    }

}

// white mocha
class WhiteMocha extends WhipLatte {

    constructor() {
        super('white mocha', WhiteMocha);
        this.customizations.setDefaultCustomization(new WhiteMochaSauce(-1));
    }

}

// basic macchiato
class Macchiato extends Latte {

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

// caramel macchiato
class CaramelMacchiato extends Macchiato {

    constructor() {
        super('caramel macchiato', CaramelMacchiato);
        this.customizations.setDefaultCustomization(new VanillaSyrup(-1));
        this.customizations.setDefaultCustomization(new CaramelDrizzle(Amount.NORMAL));
    }

}

// apple crisp oat macchiato
class AppleCrispOatMacchiato extends Macchiato {

    static season = seasons.get('fall');

    constructor() {
        super('apple crisp oat macchiato', AppleCrispOatMacchiato);
        this.customizations.setDefaultCustomization(new AppleBrownSugarSyrup(-1));
        this.customizations.setDefaultCustomization(new SpicedAppleDrizzle(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new Milk(Milk.OAT));
    }

}
// basic latte drink
class IcedLatte extends ColdDrink {

    // create a settings group for lattes
    static group = new Group('Lattes', ColdDrink.group, true);

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'iced latte';
            drinkType = IcedLatte;
        }

        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Shots(-1));
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));

    }

}
// basic latte with whip
class IcedWhipLatte extends IcedLatte {

    constructor(name, drinkType) {

        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Whip(Amount.NORMAL));

    }

}

// basic flat white
class IcedFlatWhite extends IcedLatte {

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'iced flate white';
            drinkType = IcedFlatWhite;
        }

        super(name, drinkType);
        this.customizations.setDefaultCustomization(new ShotType(ShotType.RISTRETTO));
        this.customizations.setDefaultCustomization(new Milk(Milk.WHOLE));

    }

}

// honey almond flat white
class IcedHoneyAlmondFlatWhite extends IcedFlatWhite {

    constructor() {

        super('iced honey almond flat white', IcedHoneyAlmondFlatWhite);
        this.customizations.setDefaultCustomization(new HoneyBlendSyrup(-1));
        this.customizations.setDefaultCustomization(new Milk(Milk.ALMOND));

    }

}

// pumkin spice latte
class IcedPumkinSpiceLatte extends IcedWhipLatte {

    static season = seasons.get('fall');

    constructor() {
        super('iced pumkin spice latte', IcedPumkinSpiceLatte);
        this.customizations.setDefaultCustomization(new PumkinSpiceSauce(-1));
        this.customizations.setDefaultCustomization(new PumkinSpiceTopping(Amount.NORMAL));
    }

}

// cinnamon dolce latte
class IcedCinnamonDolceLatte extends IcedWhipLatte {

    constructor() {
        super('iced cinnamon dolce latte', IcedCinnamonDolceLatte);
        this.customizations.setDefaultCustomization(new CinnamonDolceSyrup(-1));
        this.customizations.setDefaultCustomization(new CinnamonDolceSprinkles(Amount.NORMAL));
    }

}

// mocha
class IcedMocha extends IcedWhipLatte {

    constructor() {
        super('iced mocha', IcedMocha);
        this.customizations.setDefaultCustomization(new MochaSauce(-1));
        this.customizations.setDefaultCustomization(new MochaDrizzle(Amount.NORMAL));
    }

}

// white mocha
class IcedWhiteMocha extends IcedWhipLatte {

    constructor() {
        super('iced white mocha', IcedWhiteMocha);
        this.customizations.setDefaultCustomization(new WhiteMochaSauce(-1));
    }

}

// basic macchiato
class IcedMacchiato extends IcedLatte {

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

// caramel macchiato
class IcedCaramelMacchiato extends IcedMacchiato {

    constructor() {
        super('iced caramel macchiato', IcedCaramelMacchiato);
        this.customizations.setDefaultCustomization(new VanillaSyrup(-1));
        this.customizations.setDefaultCustomization(new CaramelDrizzle(Amount.NORMAL));
    }

}

// apple crisp oat macchiato
class IcedAppleCrispOatMacchiato extends IcedMacchiato {

    static season = seasons.get('fall');

    constructor() {
        super('iced apple crisp oat macchiato', IcedAppleCrispOatMacchiato);
        this.customizations.setDefaultCustomization(new AppleBrownSugarSyrup(-1));
        this.customizations.setDefaultCustomization(new SpicedAppleDrizzle(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new Milk(Milk.OAT));
    }

}

