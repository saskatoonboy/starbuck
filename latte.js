
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

    }

}
// basic latte with whip
class WhipLatte extends Latte {

    constructor(name, drinkType) {

        super(name, drinkType);

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

    }

}

// honey almond flat white
class HoneyAlmondFlatWhite extends FlatWhite {

    constructor() {

        super('honey almond flat white', HoneyAlmondFlatWhite);

    }

}

// pumkin spice latte
class PumkinSpiceLatte extends WhipLatte {

    constructor() {
        super('pumkin spice latte', PumkinSpiceLatte);
    }

}

// cinnamon dolce latte
class CinnamonDolceLatte extends WhipLatte {

    constructor() {
        super('cinnamon dolce latte', CinnamonDolceLatte);
    }

}

// mocha
class Mocha extends WhipLatte {

    constructor() {
        super('mocha', Mocha);
    }

}

// white mocha
class WhiteMocha extends WhipLatte {

    constructor() {
        super('white mocha', WhiteMocha);
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
    }

}

// apple crisp oat macchiato
class AppleCrispOatMacchiato extends Macchiato {

    constructor() {
        super('apple crisp oat macchiato', AppleCrispOatMacchiato);
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

    }

}
// basic latte with whip
class IcedWhipLatte extends IcedLatte {

    constructor(name, drinkType) {

        super(name, drinkType);

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

    }

}

// honey almond flat white
class IcedHoneyAlmondFlatWhite extends IcedFlatWhite {

    constructor() {

        super('iced honey almond flat white', IcedHoneyAlmondFlatWhite);

    }

}

// pumkin spice latte
class IcedPumkinSpiceLatte extends IcedWhipLatte {

    constructor() {
        super('iced pumkin spice latte', IcedPumkinSpiceLatte);
    }

}

// cinnamon dolce latte
class IcedCinnamonDolceLatte extends IcedWhipLatte {

    constructor() {
        super('iced cinnamon dolce latte', IcedCinnamonDolceLatte);
    }

}

// mocha
class IcedMocha extends IcedWhipLatte {

    constructor() {
        super('iced mocha', IcedMocha);
    }

}

// white mocha
class IcedWhiteMocha extends IcedWhipLatte {

    constructor() {
        super('iced white mocha', IcedWhiteMocha);
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
    }

}

// apple crisp oat macchiato
class IcedAppleCrispOatMacchiato extends IcedMacchiato {

    constructor() {
        super('iced apple crisp oat macchiato', IcedAppleCrispOatMacchiato);
    }

}

