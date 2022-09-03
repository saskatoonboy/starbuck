
class SteamedMilk extends HotDrink {

    static group = new Group('Other', HotDrink.group, true);

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'steamed milk';
            drinkType = SteamedMilk;
        }
        super(name, drinkType);

    }

}

class WhipSteamedMilk extends SteamedMilk {

    constructor(name, drinkType)  {
        super(name, drinkType);
    }

}

class HotChocolate extends WhipSteamedMilk {

    constructor() {
        super('hot chocolate', HotChocolate);
    }
}

class WhiteHotChocolate extends WhipSteamedMilk {

    constructor() {
        super('white hot chocolate', WhiteHotChocolate);
    }
}

class SteamedAppleJuice extends HotDrink {

    static group = SteamedMilk.group;

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'steamed apple juice';
            drinkType = SteamedAppleJuice;
        }
        super(name, drinkType);
    }
}

class CaramelAppleSpice extends SteamedAppleJuice {

    constructor() {
        super('caramel apple spice', CaramelAppleSpice);
    }

}

class PumkinSpiceCreme extends WhipSteamedMilk {

    static season = seasons.get('fall');

    constructor() {
        super('pumkin spice creme', PumkinSpiceCreme);
    }

}

class VanillaCreme extends WhipSteamedMilk {

    constructor() {
        super('vanilla creme', VanillaCreme);
    }

}

class CinnamonDolceCreme extends WhipSteamedMilk {

    constructor() {
        super('cinnamon dolce creme', CinnamonDolceCreme);
    }

}

class ColdMilk extends ColdDrink {

    static group = new Group('Other', ColdDrink.group, true);

    constructor() {
        super('cold milk', ColdMilk);
    }

}

class Lemonade extends ColdDrink {

    static group = ColdMilk.group;

    constructor() {
        super('lemonade', Lemonade);
    }

}

class ColdJuice extends ColdDrink {

    static group = ColdMilk.group;

    constructor() {
        super('apple juice', ColdJuice);
    }

}