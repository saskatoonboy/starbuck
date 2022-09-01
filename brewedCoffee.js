
// Basic Brewed Coffee, based off of the genereric Hot Drink
class BrewedCoffee extends HotDrink {

    // add the brewed coffee to a settings group
    static group = new Group( 'Brewed Coffee', HotDrink.group, true);

    constructor(name, drinkType) {
        super(name, false, drinkType);
    }

}

// Basic Cafe Misto, based off of the genereric Brewed Coffee
class CafeMisto extends BrewedCoffee {

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

// A specific drink for a dark roast cafe misto
class DarkRoastMisto extends CafeMisto {

    constructor() {
        super('dark roast misto',  DarkRoastMisto);
    }

}

// A specific drink for a pike roast cafe misto
class PikeRoastMisto extends CafeMisto {

    constructor() {
        super('pike place roast misto',  PikeRoastMisto);
    }

}

// A specific drink for a blonde roast cafe misto
class BlondeRoastMisto extends CafeMisto {

    constructor() {
        super('blonde roast misto',  BlondeRoastMisto);
    }

}

// A specific drink for a dark roast brewed coffee
class DarkRoast extends BrewedCoffee {

    constructor() {
        super('dark roast',  DarkRoast);
    }

}

// A specific drink for a dark roast brewed coffee
class PikeRoast extends BrewedCoffee {

    constructor() {
        super('pike place roast',  PikeRoast);
    }

}

// A specific drink for a dark roast brewed coffee
class BlondeRoast extends BrewedCoffee {

    constructor() {
        super('blonde roast',  BlondeRoast);
    }

}

// A basic cold brew drink
class ColdBrew extends ColdDrink {

    // add the cold brew to a settings group
    static group = new Group('Cold Brew', ColdDrink.group, true);

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'cold brew';
            drinkType = ColdBrew;
        }
        super(name, true, drinkType);
    }

}

// a generic cold brew drink with flavour added
class FlavouredColdBrew extends ColdBrew {

    constructor(name, drinkType) {
        super(name, drinkType);
    }

}

// a cold brew with milk added
class ColdBrewWithMilk extends ColdBrew {

    constructor() {
        super('cold brew with milk', ColdBrewWithMilk);
    }

}

// a vanilla sweet cream cold brew
class VanillaSweetCreamColdBrew extends FlavouredColdBrew {

    static group = ColdBrew.group;

    constructor() {
        super('vanilla sweet cream cold brew', VanillaSweetCreamColdBrew);
    }
    
}

// a Mocha cream cold foam cold brew
class MochaCreamColdFoamColdBrew extends FlavouredColdBrew {

    constructor() {
        super('Mocha cream cold foam cold brew', MochaCreamColdFoamColdBrew);
    }
    
}

// a salted cramedl cold foam cold brew
class SaltedCaramelColdFoamColdBrew extends FlavouredColdBrew {

    constructor() {
        super('salted caramel cold foam cold brew', SaltedCaramelColdFoamColdBrew);
    }
    
}

// an irish cream cold brew
class IrishCreamColdBrew extends FlavouredColdBrew {

    constructor() {
        super('irish cream cold brew', IrishCreamColdBrew);
    }
    
}

// a pumkin cream cold brew
class PumkinCreamColdBrew extends FlavouredColdBrew {

    constructor() {
        super('pumkin cream cold brew', PumkinCreamColdBrew);
    }
    
}

// a basic iced coffee drink
class IcedCoffee extends ColdDrink {

    // a settings group for the iced coffee
    static group = new Group('Iced Coffee', ColdDrink.group, true);

    constructor(name, drinkType) {
        if (name == undefined) {
            name = 'iced coffee';
            drinkType = IcedCoffee;
        }
        super(name, true, drinkType);
    }

}

// an iced coffee with milk added
class IcedCoffeeWithMilk extends IcedCoffee {

    constructor() {

        super('iced coffee with milk', IcedCoffeeWithMilk);

    }

}
