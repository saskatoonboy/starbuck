
class BrewedTea extends HotDrink {
    
    static group = new Group('Teas', HotDrink.group, true);
    static {
        new AdvancedGroup('Teas', BrewedTea.group, false);
    }

    constructor(name, active, drinkType) {
        if (drinkType == undefined) {
            drinkType = active;
            active = false;
        }
        super(name, active, drinkType);
        this.customizations.setDefaultCustomization(new Water(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new Temp(Temp.EXTRAHOT));
    }

}

class ChaiTea extends BrewedTea {

    constructor() {
        super('chai tea', ChaiTea);
    }

}

class EarlGreyTea extends BrewedTea {

    constructor() {
        super('earl grey tea', EarlGreyTea);
    }

}

class RoyalEnglishBreakfastTea extends BrewedTea {

    constructor() {
        super('royal english breakfast rea', RoyalEnglishBreakfastTea);
    }

}

class EmperorsCloudsAndMistTea extends BrewedTea {

    constructor() {
        super("emperor's clouds & mist tea", EmperorsCloudsAndMistTea);
    }

}

class JadeCitrusMintTea extends BrewedTea {

    constructor() {
        super('jade citrus mint tea', JadeCitrusMintTea);
    }

}

class MintMajestyTea extends BrewedTea {

    constructor() {
        super('mint majesty tea', MintMajestyTea);
    }

}

class PeachTranquilityTea extends BrewedTea {

    constructor() {
        super('peach tranquility tea', PeachTranquilityTea);
    }

}

class IcedTea extends ColdDrink {

    static group = new Group('Teas', ColdDrink.group, true);
    static {
        new AdvancedGroup('Teas', IcedTea.group, false);
    }

    constructor(name, drinkType) {
        super(name, drinkType);
        this.customizations.setDefaultCustomization(new LiquidCaneSugarSyrup(-1));
        this.customizations.setDefaultCustomization(new Water(Amount.NORMAL));
    }

}

class IcedTeaLemonade extends IcedTea {

    constructor(name, drinkType) {
        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Water(Amount.NONE));
        this.customizations.setDefaultCustomization(new LemonadeJuice(Amount.NORMAL));
    }

}

class IcedTeaLatte extends IcedTea {

    constructor(name, drinkType) {
        super(name, drinkType);
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));
    }

}

class IcedChaiTeaLatte extends IcedTeaLatte {

    constructor() {

        super('iced chai tea latte', IcedChaiTeaLatte);
        this.customizations.setDefaultCustomization(new Water(Amount.NONE));
        this.customizations.setDefaultCustomization(new ChaiSyrup(-1));

    }

}

class IcedLondonFogTeaLatte extends IcedTeaLatte {

    constructor() {

        super('iced london fog tea latte', IcedLondonFogTeaLatte);
        this.customizations.setDefaultCustomization(new VanillaSyrup(-1));

    }

}

class IcedRoyalEnglishBreakfastTeaLatte extends IcedTeaLatte {

    constructor() {

        super('iced royal english breakfast tea latte', IcedRoyalEnglishBreakfastTeaLatte);
        this.customizations.setDefaultCustomization(new LiquidCaneSugarSyrup(-1));

    }

}

class IcedMatchaTeaLatte extends IcedTeaLatte {

    constructor() {

        super('iced matcha tea latte', IcedMatchaTeaLatte);
        this.customizations.setDefaultCustomization(new LiquidCaneSugarSyrup(-1));
        this.customizations.setDefaultCustomization(new MatchaPowder(-1));

    }

}

class HoneyCitrusMintTea extends BrewedTea {

    constructor() {

        super('honey citrus mint tea', true, HoneyCitrusMintTea);
        this.customizations.setDefaultCustomization(new LemonadeJuice(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new HoneyBlendSyrup(-1));

    }

}

class TeaLatte extends BrewedTea {

    constructor(name, drinkType) {
        super(name, true, drinkType);
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));
        this.customizations.setDefaultCustomization(new Foam(Amount.NORMAL));
    }

}

class ChaiTeaLatte extends TeaLatte {

    constructor() {

        super('chai tea latte', ChaiTeaLatte);
        this.customizations.setDefaultCustomization(new ChaiSyrup(-1));

    }

}

class LondonFogTeaLatte extends TeaLatte {

    constructor() {

        super('london fog tea latte', LondonFogTeaLatte);
        this.customizations.setDefaultCustomization(new VanillaSyrup(-1));

    }

}

class RoyalEnglishBreakfastTeaLatte extends TeaLatte {

    constructor() {

        super('royal english breakfast tea latte', RoyalEnglishBreakfastTeaLatte);
        this.customizations.setDefaultCustomization(new LiquidCaneSugarSyrup(-1));

    }

}

class MatchaTeaLatte extends TeaLatte {

    constructor() {

        super('matcha tea latte', MatchaTeaLatte);
        this.customizations.setDefaultCustomization(new LiquidCaneSugarSyrup(-1));
        this.customizations.setDefaultCustomization(new MatchaPowder(-1));
        this.customizations.setDefaultCustomization(new Water(Amount.NONE));

    }

}

class IcedBlackTea extends IcedTea {

    constructor() {
        super('iced black tea', IcedBlackTea);
        this.customizations.setDefaultCustomization(new BlackTea(Amount.NORMAL));
    }

}

class IcedGreenTea extends IcedTea {

    constructor(name, drinkType) {
        if (name) {
            super(name, drinkType);
        } else {
            super('iced green tea', IcedGreenTea);
        }
        this.customizations.setDefaultCustomization(new GreenTea(Amount.NORMAL));
    }

}

class IcedPassionTangoTea extends IcedTea {

    constructor() {
        super('iced passion tango tea', IcedPassionTangoTea);
        this.customizations.setDefaultCustomization(new PassionTangoTea(Amount.NORMAL));
    }

}

class IcedBlackTeaLemonade extends IcedTeaLemonade {

    constructor() {
        super('iced black tea lemonade', IcedBlackTeaLemonade);
        this.customizations.setDefaultCustomization(new BlackTea(Amount.NORMAL));
    }

}

class IcedGreenTeaLemonade extends IcedTeaLemonade {

    constructor(name, drinkType) {
        if (name) {
            super(name, drinkType);
        } else {
            super('iced green tea lemonade', IcedGreenTeaLemonade);
        }
        this.customizations.setDefaultCustomization(new GreenTea(Amount.NORMAL));
    }

}

class IcedPassionTangoTeaLemonade extends IcedTeaLemonade {

    constructor() {
        super('iced passion tango tea lemonade', IcedPassionTangoTeaLemonade);
        this.customizations.setDefaultCustomization(new PassionTangoTea(Amount.NORMAL));
    }

}

class IcedPeachGreenTea extends IcedGreenTea {

    constructor() {
        super('iced peach green tea', IcedPeachGreenTea);
        this.customizations.setDefaultCustomization(new PeachJuice(Amount.NORMAL));
    }

}

class IcedPeachGreenTeaLemonade extends IcedGreenTeaLemonade {

    constructor() {
        super('iced peach green tea lemonade', IcedPeachGreenTeaLemonade);
        this.customizations.setDefaultCustomization(new PeachJuice(Amount.NORMAL));
    }

}
