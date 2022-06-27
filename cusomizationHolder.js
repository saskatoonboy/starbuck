
class CustomizationHolder {

    constructor(defaults) {
        this.defaults = defaults;
        this.ice = new IceCustomization(Amounts.NONE);
        this.isValid = true;
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

        for (let custom of this.defaults) {
            if (!this.addCustomization(custom)) {
                this.isValid = false;
            }
        }
    }

    addCustomization(custom) {
        
        if (!custom.isValid()) {
            return false;
        }

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

        if (custom instanceof IceCustomization) {
            this.ice = custom;
            return true;
        }

        if (custom instanceof CupCustomization) {
            if (custom.isSecondary) {
                this.cup = custom;
                return true;
            }
            this.size = custom;
            return true;
        }

        if (custom instanceof WaterCustomization) {
            this.water = custom;
            return true;
        }

        if (custom instanceof WhipCustomization) {
            this.whip = custom;
            return true;
        }

        if (custom instanceof RoomCustomization) {
            this.room = custom;
            return true;
        }

        if (custom instanceof TempCustomization) {
            this.temp = custom;
            return true;
        }

        if (custom instanceof FoamCustomization) {
            this.foams[0] = custom;
            return true;
        }

        if (custom instanceof ColdFoamCustomization) {
            for (let i = 1; i < this.foams.length; i ++) {
                if (this.foams[i].name == custom.name) {
                    this.foams[i] = custom;
                    return true;
                }
            }
        }

        if (custom instanceof JuiceCustomization) {
            for (let i = 0; i < this.juices.length; i ++) {
                if (this.juices[i].name == custom.name) {
                    this.juices[i] = custom;
                    return true;
                }
            }
        }

        if (custom instanceof TeaCustomization) {
            for (let i = 0; i < this.teas.length; i ++) {
                if (this.teas[i].name == custom.name) {
                    this.teas[i] = custom;
                    return true;
                }
            }
        }

        if (custom instanceof SweetnerCustomization) {
            for (let i = 0; i < this.sweetners.length; i ++) {
                if (this.sweetners[i].name == custom.name) {
                    this.sweetners[i] = custom;
                    return true;
                }
            }
        }

        if (custom instanceof SyrupCustomization) {
            for (let i = 0; i < this.syrups.length; i ++) {
                if (this.syrups[i].name == custom.name) {
                    this.syrups[i] = custom;
                    return true;
                }
            }
        }

        if (custom instanceof InclusionCustomization) {
            for (let i = 0; i < this.inclusions.length; i ++) {
                if (this.inclusions[i].name == custom.name) {
                    this.inclusions[i] = custom;
                    return true;
                }
            }
        }

        if (custom instanceof ToppingCustomization) {
            for (let i = 0; i < this.toppings.length; i ++) {
                if (this.toppings[i].name == custom.name) {
                    this.toppings[i] = custom;
                    return true;
                }
            }
        }

        if (custom instanceof CountCustomization) {
            for (let i = 0; i < this.countCustoms.length; i ++) {
                if (this.countCustoms[i].name == custom.name) {
                    this.countCustoms[i] = custom;
                    return true;
                }
            }
        }

        if (custom instanceof QuantityCustomization) {
            for (let i = 0; i < this.quantityCustoms.length; i ++) {
                if (this.quantityCustoms[i].name == custom.name) {
                    this.quantityCustoms[i] = custom;
                    return true;
                }
            }
        }

        if (custom instanceof DataCustomization) {
            for (let i = 0; i < this.dataCustoms.length; i ++) {
                if (this.dataCustoms[i].name == custom.name) {
                    this.dataCustoms[i] = custom;
                    return true;
                }
            }
        }

        return false;

    }

    addDefaultCustomization(custom) {
        this.addCustomization(custom);
        this.defaults.push(custom);
    }

}
