
class Espresso extends HotDrink {

    static group = new ExpandableMiddleGroup(HotDrink.group, 'Espressos');

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'espresso';
            drinkType = Espresso;
        }
        super(name, drinkType);

    }

}

class Americano extends HotDrink {

    static group = new ExpandableMiddleGroup(HotDrink.group, 'Americanos');

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'americano';
            drinkType = Americano;
        }
        super(name, drinkType);

    }

}

class AmericanoMisto extends Americano {

    static group = Americano.group;

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'americano misto';
            drinkType = AmericanoMisto;
        }
        super(name, drinkType);

    }

}

class BrownSugarOatAmericanoMisto extends AmericanoMisto {

    static group = Americano.group;

    constructor() {

        super('brown sugar oat americano misto', BrownSugarOatAmericanoMisto);

    }

}

class IrishCreamAmericanoMisto extends AmericanoMisto {

    static group = Americano.group;

    constructor() {
        super('irish cream americano misto', IrishCreamAmericanoMisto);

    }

}

class EspressoConPanna extends Espresso {

    static group = Espresso.group;

    constructor() {
        super('espresso con panna', EspressoConPanna);
    }

    
}

class EspressoMacchiato extends Espresso {

    static group = Espresso.group;

    constructor() {
        super('espresso macchiato', EspressoMacchiato);
    }

}

class IcedAmericano extends ColdDrink {

    static group = new ExpandableMiddleGroup(ColdDrink.group, 'Americanos');

    constructor() {
        super('iced americano', IcedAmericano);
    }

}

class IcedEspresso extends ColdDrink {

    static group = new ExpandableMiddleGroup(ColdDrink.group, 'Espressos');

    constructor() {
        super('iced espresso', IcedEspresso);
    }

}

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

class IcedToastedVanillaOatShakenEspresso extends IcedShakenEspresso {

    static group = IcedEspresso.group;

    constructor() {
        super('iced toasted vanilla oat shaken espresso', IcedToastedVanillaOatShakenEspresso);
    }
}

class IcedBrownSugarOatBeverageShakenEspresso extends IcedShakenEspresso {

    static group = IcedEspresso.group;

    constructor() {
        super('iced brown sugar oat beverage shaken espresso', IcedBrownSugarOatBeverageShakenEspresso);
    }
}

new Espresso();
new EspressoConPanna();
new EspressoMacchiato();
new Americano();
new AmericanoMisto();
new IcedAmericano();
new IrishCreamAmericanoMisto();
new BrownSugarOatAmericanoMisto();
new IcedAmericano();
new IcedShakenEspresso();
new IcedBrownSugarOatBeverageShakenEspresso();
new IcedToastedVanillaOatShakenEspresso();
