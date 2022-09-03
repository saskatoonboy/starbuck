
class SteamedMilk extends HotDrink {

    static group = new Group('Other', HotDrink.group, true);

    constructor(name, drinkType) {

        if (name == undefined) {
            name = 'steamed milk';
            drinkType = SteamedMilk;
        }
        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Foam(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));

    }

}

class WhipSteamedMilk extends SteamedMilk {

    constructor(name, drinkType)  {
        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Whip(Amount.NORMAL));
    }

}

class HotChocolate extends WhipSteamedMilk {

    constructor() {
        super('hot chocolate', HotChocolate);
        this.customizations.setDefaultCustomization(new MochaSauce(-1));
        this.customizations.setDefaultCustomization(new MochaDrizzle(Amount.NORMAL));
    }
}

class WhiteHotChocolate extends WhipSteamedMilk {

    constructor() {
        super('white hot chocolate', WhiteHotChocolate);
        this.customizations.setDefaultCustomization(new WhiteMochaSauce(-1));
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
        this.customizations.setDefaultCustomization(new AppleJuice(Amount.NORMAL));
    }
}

class CaramelAppleSpice extends SteamedAppleJuice {

    constructor() {
        super('caramel apple spice', CaramelAppleSpice);
        this.customizations.setDefaultCustomization(new CinnamonDolceSyrup(-1));
        this.customizations.setDefaultCustomization(new CaramelDrizzle(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new Whip(Amount.NORMAL));
    }

}

class PumkinSpiceCreme extends WhipSteamedMilk {

    static season = seasons.get('fall');

    constructor() {
        super('pumkin spice creme', PumkinSpiceCreme);
        this.customizations.setDefaultCustomization(new PumkinSpiceSauce(-1));
        this.customizations.setDefaultCustomization(new PumkinSpiceTopping(Amount.NORMAL));
    }

}

class VanillaCreme extends WhipSteamedMilk {

    constructor() {
        super('vanilla creme', VanillaCreme);
        this.customizations.setDefaultCustomization(new VanillaSyrup(-1));
    }

}

class CinnamonDolceCreme extends WhipSteamedMilk {

    constructor() {
        super('cinnamon dolce creme', CinnamonDolceCreme);
        this.customizations.setDefaultCustomization(new CinnamonDolceSyrup(-1));
        this.customizations.setDefaultCustomization(new CinnamonDolceSprinkles(Amount.NORMAL));
    }

}

class ColdMilk extends ColdDrink {

    static group = new Group('Other', ColdDrink.group, true);

    constructor() {
        super('cold milk', ColdMilk);
        this.customizations.setDefaultCustomization(new Ice(Amount.NONE));
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));
    }

}

class Lemonade extends ColdDrink {

    static group = ColdMilk.group;

    constructor() {
        super('lemonade', Lemonade);
        this.customizations.setDefaultCustomization(new LemonadeJuice(Amount.NORMAL));
    }

}

class ColdJuice extends ColdDrink {

    static group = ColdMilk.group;

    constructor() {
        super('apple juice', ColdJuice);
        this.customizations.setDefaultCustomization(new AppleJuice(Amount.NORMAL));
    }

}