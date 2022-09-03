
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
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));
        this.customizations.setDefaultCustomization(new Foam(Amount.NORMAL));
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
        this.customizations.setDefaultCustomization(new Water(Amount.NORMAL));
    }

}

// a generic cold brew drink with flavour added
class FlavouredColdBrew extends ColdBrew {

    constructor(name, drinkType) {
        super(name, drinkType);
        this.customizations.setDefaultCustomization(new VanillaSyrup(-1));
    }

}

// a cold brew with milk added
class ColdBrewWithMilk extends ColdBrew {

    constructor() {
        super('cold brew with milk', ColdBrewWithMilk);
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));
    }

}

// a vanilla sweet cream cold brew
class VanillaSweetCreamColdBrew extends FlavouredColdBrew {

    static group = ColdBrew.group;

    constructor() {
        super('vanilla sweet cream cold brew', VanillaSweetCreamColdBrew);
        this.customizations.setDefaultCustomization(new SplashOfSweetCream(Amount.NORMAL));
    }
    
}

// a chocolate cream cold foam cold brew
class ChocolateCreamColdFoamColdBrew extends FlavouredColdBrew {

    constructor() {
        super('chocolate cream cold foam cold brew', ChocolateCreamColdFoamColdBrew);
        this.customizations.setDefaultCustomization(new ChocolateCreamColdFoam(Amount.NORMAL));
    }
    
}

// a salted cramedl cold foam cold brew
class SaltedCaramelColdFoamColdBrew extends FlavouredColdBrew {

    constructor() {
        super('salted caramel cold foam cold brew', SaltedCaramelColdFoamColdBrew);
        this.customizations.setDefaultCustomization(new SaltedCaramelCreamColdFoam(Amount.NORMAL));
    }
    
}

// a pumkin cream cold brew
class PumkinCreamColdBrew extends FlavouredColdBrew {

    static season = seasons.get('fall');

    constructor() {
        super('pumkin cream cold brew', PumkinCreamColdBrew);
        this.customizations.setDefaultCustomization(new PumkinCreamColdFoam(Amount.NORMAL));
        this.customizations.setDefaultCustomization(new PumkinSpiceTopping(Amount.NORMAL));
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
        this.customizations.setDefaultCustomization(new ClassicSyrup(-1));
    }

}

// an iced coffee with milk added
class IcedCoffeeWithMilk extends IcedCoffee {

    constructor() {

        super('iced coffee with milk', IcedCoffeeWithMilk);
        this.customizations.setDefaultCustomization(new Milk(Milk.TWO));

    }

}
