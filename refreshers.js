
class Refresher extends ColdDrink {

    static group = new Group('Refreshers', ColdDrink.group, true);

    constructor(name, drinkType) {
        super(name, drinkType)
    }
}

class WaterRefresher extends Refresher {

    constructor(name, drinkType) {

        super(name + ' refresher', drinkType);

    }

}

class LemonadeRefresher extends Refresher {

    constructor(name, drinkType) {

        super(name + ' lemonade', drinkType);

    }

}

class CoconutRefresher extends Refresher {

    constructor(name, drinkType) {

        super(name + ' drink', drinkType);

    }

}

class StrawberryAcaiRefresher extends WaterRefresher {

    constructor() {
        super('strawberry acai', StrawberryAcaiRefresher);
    }

}

class StrawberryAcaiLemonade extends LemonadeRefresher {

    constructor() {
        super('strawberry acai', StrawberryAcaiLemonade);
    }

}

class StrawberryCoconutDrink extends CoconutRefresher {

    constructor() {
        super('strawberry coconut', StrawberryCoconutDrink);
    }

}

class MangoDragonfruitRefresher extends WaterRefresher {

    constructor() {
        super('mango dragonfruit', MangoDragonfruitRefresher);
    }

}

class MangoDragonfruitLemonade extends LemonadeRefresher {

    constructor() {
        super('mango dragonfruit', MangoDragonfruitLemonade);
    }

}

class DragonDrink extends CoconutRefresher {

    constructor() {
        super('dragon', DragonDrink);
    }

}

class PineapplePassionfruitRefresher extends WaterRefresher {

    constructor() {
        super('pineapple passionfruit', PineapplePassionfruitRefresher);
    }

}

class PineapplePassionfruitLemonade extends LemonadeRefresher {

    constructor() {
        super('pineapple passionfruit', PineapplePassionfruitLemonade);
    }

}

class ParadiseDrink extends CoconutRefresher {

    constructor() {
        super('paradise', ParadiseDrink);
    }

}

