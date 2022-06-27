
class Latte extends HotDrink {

    static group = new ExpandableMiddleGroup(HotDrink.group, 'Lattes')

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'latte';
            drinkType = Latte;
        }
        super(name, drinkType);
    }

}

class Cappuccino extends Latte {

    static group = Latte.group;

    constructor() {
        super('cappuccino', Cappuccino);
    }

}

class FlatWhite extends Latte {

    static group = Latte.group;

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'flat white';
            drinkType = FlatWhite;
        }
        super(name, drinkType);
    }
}

class HoneyAlmondFlatWhite extends FlatWhite {

    static group = FlatWhite.group;

    constructor() {
        super('honey almond flat white', HoneyAlmondFlatWhite);
    }
}

class CinnamonDolceLatte extends Latte {
    
    static group = Latte.group;

    constructor() {
        super('cinnamon dolce latte', CinnamonDolceLatte);
    }
}

class CaramelMacchiato extends Latte {

    static group = Latte.group;

    constructor() {
        super('caramel macchiato', CaramelMacchiato);
    }
}

class Mocha extends Latte {

    static group = Latte.group;

    constructor() {
        super('mocha', Mocha);
    }
}

class WhiteMocha extends Latte {

    static group = Latte.group;

    constructor() {
        super('white mocha', WhiteMocha);
    }
}

class IcedLatte extends ColdDrink {

    static group = new ExpandableMiddleGroup(ColdDrink.group, 'Lattes')

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'iced latte';
            drinkType = IcedLatte;
        }
        super(name, drinkType);
    }

}

class IcedFlatWhite extends IcedLatte {

    static group = IcedLatte.group;

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'iced flat white';
            drinkType = IcedFlatWhite;
        }
        super(name, drinkType);
    }
}

class IcedHoneyAlmondFlatWhite extends IcedFlatWhite {

    static group = IcedFlatWhite.group;

    constructor() {
        super('iced honey almond flat white', IcedHoneyAlmondFlatWhite);
    }
}

class IcedCinnamonDolceLatte extends IcedLatte {
    
    static group = IcedLatte.group;

    constructor() {
        super('iced cinnamon dolce latte', IcedCinnamonDolceLatte);
    }
}

class IcedCaramelMacchiato extends IcedLatte {

    static group = IcedLatte.group;

    constructor() {
        super('iced caramel macchiato', IcedCaramelMacchiato);
    }
}

class IcedMocha extends IcedLatte {

    static group = IcedLatte.group;

    constructor() {
        super('iced mocha', IcedMocha);
    }
}

class IcedWhiteMocha extends IcedLatte {

    static group = IcedLatte.group;

    constructor() {
        super('iced white mocha', IcedWhiteMocha);
    }
}
