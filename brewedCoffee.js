
// Basic Brewed Coffee, based off of the genereric Hot Drink
class BrewedCoffee extends HotDrink {

    static group = new Group( 'Brewed Coffee', HotDrink.group, true);

    constructor(name, drinkType) {
        super(name, false, drinkType);
    }

}

class CafeMisto extends BrewedCoffee {

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

class DarkRoastMisto extends CafeMisto {

    static group = BrewedCoffee.group;

    constructor() {
        super('dark roast misto',  DarkRoastMisto);
    }

}

class PikeRoastMisto extends CafeMisto {

    static group = BrewedCoffee.group;

    constructor() {
        super('pike place roast misto',  PikeRoastMisto);
    }

}

class BlondeRoastMisto extends CafeMisto {

    static group = BrewedCoffee.group;

    constructor() {
        super('blonde roast misto',  BlondeRoastMisto);
    }

}

class DarkRoast extends BrewedCoffee {

    static group = BrewedCoffee.group;

    constructor() {
        super('dark roast',  DarkRoast);
    }

}

class PikeRoast extends BrewedCoffee {

    static group = BrewedCoffee.group;

    constructor() {
        super('pike place roast',  PikeRoast);
    }

}

class BlondeRoast extends BrewedCoffee {

    static group = BrewedCoffee.group;

    constructor() {
        super('blonde roast',  BlondeRoast);
    }

}

class ColdBrew extends ColdDrink {

    static group = new Group('Cold Brew', ColdDrink.group, true);

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'cold brew';
            drinkType = ColdBrew;
        }
        super(name, true, drinkType);
    }

}

class FlavouredColdBrew extends ColdBrew {

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

class ColdBrewWithMilk extends ColdBrew {

    static group = ColdBrew.group;

    constructor() {
        super('cold brew with milk', ColdBrewWithMilk);
    }

}

class VanillaSweetCreamColdBrew extends FlavouredColdBrew {

    static group = ColdBrew.group;

    constructor() {
        super('vanilla sweet cream cold brew', VanillaSweetCreamColdBrew);
    }
    
}

class ChocolateCreamColdFoamColdBrew extends FlavouredColdBrew {

    static group = ColdBrew.group;

    constructor() {
        super('chocolate cream cold foam cold brew', ChocolateCreamColdFoamColdBrew);
    }
    
}

class SaltedCaramelColdFoamColdBrew extends FlavouredColdBrew {

    static group = ColdBrew.group;

    constructor() {
        super('salted caramel cold foam cold brew', SaltedCaramelColdFoamColdBrew);
    }
    
}

class IrishCreamColdBrew extends FlavouredColdBrew {

    static group = ColdBrew.group;

    constructor() {
        super('irish cream cold brew', IrishCreamColdBrew);
    }
    
}

class PumkinCreamColdBrew extends FlavouredColdBrew {

    static group = ColdBrew.group;

    constructor() {
        super('pumkin cream cold brew', PumkinCreamColdBrew);
    }
    
}

class IcedCoffee extends ColdDrink {

    static group = new Group('Iced Coffee', ColdDrink.group, true);

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'iced coffee';
            drinkType = IcedCoffee;
        }
        super(name, true, drinkType);
    }

}

class IcedCoffeeWithMilk extends IcedCoffee {

    static group = IcedCoffee.group;

    constructor() {

        super('iced coffee with milk', IcedCoffeeWithMilk);

    }

}

new DarkRoastMisto();
new PikeRoastMisto();
new BlondeRoastMisto();
new DarkRoast();
new PikeRoast();
new BlondeRoast();
new ColdBrew();
new ColdBrewWithMilk();
new IrishCreamColdBrew();
new PumkinCreamColdBrew();
new VanillaSweetCreamColdBrew();
new SaltedCaramelColdFoamColdBrew();
new ChocolateCreamColdFoamColdBrew();
new IcedCoffee();
new IcedCoffeeWithMilk();
