
class Refresher extends ColdDrink {

    static group = new Group('Refreshers', ColdDrink.group, true);

    constructor(name, drinkType) {
        super(name, drinkType)
    }
}

class WaterRefresher extends Refresher {

    constructor(name, drinkType) {

        super(name + ' refresher', drinkType);
        this.customizations.setDefaultCustomization(new Water(Amount.NORMAL));

    }

}

class LemonadeRefresher extends Refresher {

    constructor(name, drinkType) {

        super(name + ' lemonade', drinkType);
        this.customizations.setDefaultCustomization(new LemonadeJuice(Amount.NORMAL));

    }

}

class CoconutRefresher extends Refresher {

    constructor(name, drinkType) {

        super(name + ' drink', drinkType);
        this.customizations.setDefaultCustomization(new Milk(Milk.COCONUT));

    }

}

class StrawberryAcaiRefresher extends WaterRefresher {

    constructor() {
        super('strawberry acai', StrawberryAcaiRefresher);
        this.customizations.setDefaultCustomization(new StrawberryAcaiBase(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new StrawberryInclusions(Amount.NORMAL));
    }

}

class StrawberryAcaiLemonade extends LemonadeRefresher {

    constructor() {
        super('strawberry acai', StrawberryAcaiLemonade);
        this.customizations.setDefaultCustomization(new StrawberryAcaiBase(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new StrawberryInclusions(Amount.NORMAL));
    }

}

class StrawberryCoconutDrink extends CoconutRefresher {

    constructor() {
        super('strawberry coconut', StrawberryCoconutDrink);
        this.customizations.setDefaultCustomization(new StrawberryAcaiBase(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new StrawberryInclusions(Amount.NORMAL));
    }

}

class MangoDragonfruitRefresher extends WaterRefresher {

    constructor() {
        super('mango dragonfruit', MangoDragonfruitRefresher);
        this.customizations.setDefaultCustomization(new MangoDragonfruitBase(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new DragonFruitInclusions(Amount.NORMAL));
    }

}

class MangoDragonfruitLemonade extends LemonadeRefresher {

    constructor() {
        super('mango dragonfruit', MangoDragonfruitLemonade);
        this.customizations.setDefaultCustomization(new MangoDragonfruitBase(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new DragonFruitInclusions(Amount.NORMAL));
    }

}

class DragonDrink extends CoconutRefresher {

    constructor() {
        super('dragon', DragonDrink);
        this.customizations.setDefaultCustomization(new MangoDragonfruitBase(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new DragonFruitInclusions(Amount.NORMAL));
    }

}

class PineapplePassionfruitRefresher extends WaterRefresher {

    constructor() {
        super('pineapple passionfruit', PineapplePassionfruitRefresher);
        this.customizations.setDefaultCustomization(new PineapplePassionfruitBase(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new PineappleInclusions(Amount.NORMAL));
    }

}

class PineapplePassionfruitLemonade extends LemonadeRefresher {

    constructor() {
        super('pineapple passionfruit', PineapplePassionfruitLemonade);
        this.customizations.setDefaultCustomization(new PineapplePassionfruitBase(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new PineappleInclusions(Amount.NORMAL));
    }

}

class ParadiseDrink extends CoconutRefresher {

    constructor() {
        super('paradise', ParadiseDrink);
        this.customizations.setDefaultCustomization(new PineapplePassionfruitBase(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new PineappleInclusions(Amount.NORMAL));
    }

}

