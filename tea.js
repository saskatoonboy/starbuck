
class BrewedTea extends HotDrink {
    
    static group = new Group('Teas', HotDrink.group, true);

    constructor(name, drinkType) {
        super(name, drinkType);
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

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

class IcedTeaLemonade extends IcedTea {

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

class IcedTeaLatte extends IcedTea {

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

class IcedChaiTeaLatte extends IcedTeaLatte {

    constructor() {

        super('iced chai tea latte', IcedChaiTeaLatte);

    }

}

class IcedLondonFogTeaLatte extends IcedTeaLatte {

    constructor() {

        super('iced london fog tea latte', IcedLondonFogTeaLatte);

    }

}

class IcedRoyalEnglishBreakfastTeaLatte extends IcedTeaLatte {

    constructor() {

        super('iced royal english breakfast tea latte', IcedRoyalEnglishBreakfastTeaLatte);

    }

}

class IcedMatchaTeaLatte extends IcedTeaLatte {

    constructor() {

        super('iced matcha tea latte', IcedMatchaTeaLatte);

    }

}

class HoneyCitrusMintTea extends BrewedTea {

    constructor() {

        super('honey citrus mint tea', HoneyCitrusMintTea);

    }

}

class TeaLatte extends BrewedTea {

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

class ChaiTeaLatte extends TeaLatte {

    constructor() {

        super('chai tea latte', ChaiTeaLatte);

    }

}

class LondonFogTeaLatte extends TeaLatte {

    constructor() {

        super('london fog tea latte', LondonFogTeaLatte);

    }

}

class RoyalEnglishBreakfastTeaLatte extends TeaLatte {

    constructor() {

        super('royal english breakfast tea latte', RoyalEnglishBreakfastTeaLatte);

    }

}

class MatchaTeaLatte extends TeaLatte {

    constructor() {

        super('matcha tea latte', MatchaTeaLatte);

    }

}

class IcedBlackTea extends IcedTea {

    constructor() {
        super('iced black tea', IcedBlackTea);
    }

}

class IcedGreenTea extends IcedTea {

    constructor() {
        super('iced green tea', IcedGreenTea);
    }

}

class IcedPassionTangoTea extends IcedTea {

    constructor() {
        super('iced passion tango tea', IcedPassionTangoTea);
    }

}

class IcedBlackTeaLemonade extends IcedTeaLemonade {

    constructor() {
        super('iced black tea lemonade', IcedBlackTeaLemonade);
    }

}

class IcedGreenTeaLemonade extends IcedTeaLemonade {

    constructor() {
        super('iced green tea lemonade', IcedGreenTeaLemonade);
    }

}

class IcedPassionTangoTeaLemonade extends IcedTeaLemonade {

    constructor() {
        super('iced passion tango tea lemonade', IcedPassionTangoTeaLemonade);
    }

}

class IcedPeachGreenTea extends IcedGreenTea {

    constructor() {
        super('iced peach green tea lemonade', IcedPeachGreenTea);
    }

}

class IcedPeachGreenTeaLemonade extends IcedGreenTeaLemonade {

    constructor() {
        super('iced peach green tea lemonade', IcedPeachGreenTeaLemonade);
    }

}
