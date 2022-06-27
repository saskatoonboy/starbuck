
class CustomizationHolder {

    constructor(defaults) {
        this.defaults = defaults;
        this.ice = new IceCustomization(Amounts.NONE);
        if (this.defaults == undefined) {
            this.defaults = [];
        }
        // specific customizations
        this.milk = new MilkCustomization(Milk.NONE);
        this.shots = new ShotCustomization(0);
        this.espresso = new EspressoCustomization(EspressoData.SIGNATURE);
        this.ice = new IceCustomization(Amounts.NONE);
        this.size = new CupCustomization(Cup.GRANDE);
        this.water = new WaterCustomization(Amounts.NONE);
        this.whip = new WhipCustomization(Amounts.NONE);
        this.room = new RoomCustomization(Amounts.NORMAL);
        this.temp = new TempCustomization(Temp.HOT);
        // foam customizations
        this.foams = [];
        this.foams.push(new FoamCustomization());
        for (let i = 0; i < ColdFoam.NAMES.length; i++) {
            this.foams.push(new ColdFoamCustomization(i, Amounts.NONE));
        }
        // juice customizations
        this.juices = [];
        for (let i = 0; i < Juice.NAMES.length; i++) {
            this.foams.push(new JuiceCustomization(i, Amounts.NONE));
        }
        // tea customizations
        this.tea = [];
        for (let i = 0; i < Tea.NAMES.length; i++) {
            this.foams.push(new TeaCustomization(i, Amounts.NONE));
        }
        // inclusion customizations
        this.inclusions = [];
        for (let i = 0; i < Inclusion.NAMES.length; i++) {
            this.foams.push(new InclusionCustomization(i, Amounts.NONE));
        }
        // sweetner customizations
        this.sweetners = [];
        for (let i = 0; i < Sweetner.NAMES.length; i++) {
            this.sweetners.push(new SweetnerCustomization(i, 0));
        }
        // syrup customizations
        this.syrups = [];
        for (let i = 0; i < Syrup.NAMES.length; i++) {
            this.syrups.push(new SyrupCustomization(i, 0));
        }
        // topping customizations
        this.toppings = [];
        for (let i = 0; i < Topping.NAMES.length; i++) {
            this.toppings.push(new ToppingCustomization(i, Amounts.NONE));
        }
        // count customizations
        this.countCustoms = [];
        // data customizations
        this.dataCustoms = [];
        this.dataCustoms.push(new EspressoDataCustomization(EspressoData.NORMAL));
        this.dataCustoms.push(new CupCustomization(Cup.GRANDE, true));
        // quantity customizations
        this.quantityCustoms = [];

        for (let custom in defaults) {
            this.addCustomization(custom);
        }
    }

    addCustomization(custom) {

        if (custom instanceof MilkCustomization) {
            this.milk = custom;
            return true;
        }

        if (custom instanceof ShotCustomization) {
            this.shots = custom;
            return true;
        }

        if (custom instanceof EspressoCustomization) {
            this.espresso = custom;
            return true;
        }

        return false;

    }

    addDefaultCustomization(custom) {
        this.addCustomization(custom);
        this.defaults.push(custom);
    }

}
