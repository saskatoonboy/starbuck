
// basic espresso drink
class Espresso extends HotDrink {

    // create a settings group for espressos
    static group = new Group('Espressos', HotDrink.group, true);

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'espresso';
            drinkType = Espresso;
        }
        super(name, drinkType);

    }

}

// basic americano drink
class Americano extends HotDrink {

    // create a settings group for americanos
    static group = new Group('Americanos', HotDrink.group, true);

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'americano';
            drinkType = Americano;
        }
        super(name, drinkType);

    }

}

// basic americano misto drink
class AmericanoMisto extends Americano {

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'americano misto';
            drinkType = AmericanoMisto;
        }
        super(name, drinkType);

    }

}

// brown sugar oat americano misto
class BrownSugarOatAmericanoMisto extends AmericanoMisto {

    constructor() {

        super('brown sugar oat americano misto', BrownSugarOatAmericanoMisto);

    }

}

// irish cream americano misto
class IrishCreamAmericanoMisto extends AmericanoMisto {

    constructor() {
        super('irish cream americano misto', IrishCreamAmericanoMisto);

    }

}

// espresso con panna
class EspressoConPanna extends Espresso {

    constructor() {
        super('espresso con panna', EspressoConPanna);
    }

    
}

// espresso macchiato
class EspressoMacchiato extends Espresso {

    constructor() {
        super('espresso macchiato', EspressoMacchiato);
    }

}

// iced version of the basic americano drink
class IcedAmericano extends ColdDrink {

    static group = new Group('Americanos', ColdDrink.group, true);

    constructor() {
        super('iced americano', IcedAmericano);
    }

}

// iced versin of the basic espresso drink
class IcedEspresso extends ColdDrink {

    static group = new Group('Espressos', ColdDrink.group, true);

    constructor() {
        super('iced espresso', IcedEspresso);
    }

}

// basic iced shaken espresso
class IcedShakenEspresso extends ColdDrink {
    
    static group = IcedEspresso.group;

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'iced shaken espresso';
            drinkType = IcedShakenEspresso;
        }
        super(name, drinkType);
    }

}

// iced toasted vanilla oat shaken espresso
class IcedToastedVanillaOatShakenEspresso extends IcedShakenEspresso {

    static group = IcedEspresso.group;

    constructor() {
        super('iced toasted vanilla oat shaken espresso', IcedToastedVanillaOatShakenEspresso);
    }
}

// iced brown sugar oat shaken espresso
class IcedBrownSugarOatBeverageShakenEspresso extends IcedShakenEspresso {

    static group = IcedEspresso.group;

    constructor() {
        super('iced brown sugar oat beverage shaken espresso', IcedBrownSugarOatBeverageShakenEspresso);
    }
}
