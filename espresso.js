
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
        this.customizations.setDefaultCustomization(new Shots(2));

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
        this.customizations.setDefaultCustomization(new Shots(-1));
        this.customizations.setDefaultCustomization(new Water(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new Temp(Temp.EXTRAHOT));

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
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));
        this.customizations.setDefaultCustomization(new Foam(Amount.NORMAL));

    }

}

// brown sugar oat americano misto
class BrownSugarOatAmericanoMisto extends AmericanoMisto {

    constructor() {

        super('brown sugar oat americano misto', BrownSugarOatAmericanoMisto);
        this.customizations.setDefaultCustomization(new Milk(Milk.OAT));
        this.customizations.setDefaultCustomization(new EspressoType(EspressoType.BLONDE));
        this.customizations.setDefaultCustomization(new CinnamonPowder(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new BrownSugarSyrup(-1));

    }

}

// espresso con panna
class EspressoConPanna extends Espresso {

    constructor() {
        super('espresso con panna', EspressoConPanna);
        this.customizations.setDefaultCustomization(new Whip(Amount.NORMAL));
    }

    
}

// espresso macchiato
class EspressoMacchiato extends Espresso {

    constructor() {
        super('espresso macchiato', EspressoMacchiato);
        this.customizations.setDefaultCustomization(new Foam(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));
    }

}

// iced version of the basic americano drink
class IcedAmericano extends ColdDrink {

    static group = new Group('Americanos', ColdDrink.group, true);

    constructor() {
        super('iced americano', IcedAmericano);
        this.customizations.setDefaultCustomization(new Shots(-1));
        this.customizations.setDefaultCustomization(new Water(Amount.NORMAL));
    }

}

// iced versin of the basic espresso drink
class IcedEspresso extends ColdDrink {

    static group = new Group('Espressos', ColdDrink.group, true);

    constructor() {
        super('iced espresso', IcedEspresso);
        this.customizations.setDefaultCustomization(new Shots(2));
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
        this.customizations.setDefaultCustomization(new ClassicSyrup(-1));
        this.customizations.setDefaultCustomization(new Shots(-1));
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));
    }

}

// iced toasted vanilla oat shaken espresso
class IcedToastedVanillaOatShakenEspresso extends IcedShakenEspresso {

    static group = IcedEspresso.group;

    constructor() {
        super('iced toasted vanilla oat shaken espresso', IcedToastedVanillaOatShakenEspresso);
        this.customizations.setDefaultCustomization(new EspressoType(EspressoType.BLONDE));
        this.customizations.setDefaultCustomization(new ToastedVanillaSyrup(-1));
        this.customizations.setDefaultCustomization(new Milk(Milk.OAT));
    }
}

// iced brown sugar oat shaken espresso
class IcedBrownSugarOatBeverageShakenEspresso extends IcedShakenEspresso {

    static group = IcedEspresso.group;

    constructor() {
        super('iced brown sugar oat beverage shaken espresso', IcedBrownSugarOatBeverageShakenEspresso);
        this.customizations.setDefaultCustomization(new EspressoType(EspressoType.BLONDE));
        this.customizations.setDefaultCustomization(new BrownSugarSyrup(-1));
        this.customizations.setDefaultCustomization(new Milk(Milk.OAT));
        this.customizations.setDefaultCustomization(new CinnamonPowder(Amount.NORMAL));
    }
}
