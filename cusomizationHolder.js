
// list of all customizations
const customizations = [Milk, EspressoType, ShotType, Size, Cup, Room, Foam, Temp, Water, PumkinSpiceTopping, CinnamonDolceSprinkles, 
    CinnamonPowder, CaramelCrunchTopping, CookieCrumbleTopping, LineCupWithCaramelDrizzle, LineCupWithMochaDrizzle, CaramelDrizzle,
    MochaDrizzle, SpicedAppleDrizzle, Whip, VanillaSweetCreamColdFoam, PumkinCreamColdFoam, SaltedCaramelCreamColdFoam, 
    ChocolateCreamColdFoam, SplashOfNonfat, SplashOfTwo, SplashOfWhole, SplashOfCream, SplashOfHeavyCream, SplashOfAlmond, 
    SplashOfCoconut, SplashOfOat, SplashOfSoy, SplashOfLactaid, SplashOfSweetCream, StrawberryPuree, LemonadeJuice, AppleJuice, 
    PeachJuice, BlackTea, GreenTea, PassionTangoTea, Ice, Shots, AppleBrownSugarSyrup, BrownSugarSyrup, CaramelSyrup, 
    CinnamonDolceSyrup, HazelnutSyrup, PeppermintSyrup, RaspberrySyrup, ToastedVanillaSyrup, ToffeeNutSyrup, VanillaSyrup, 
    SugarFreeVanillaSyrup, MochaSauce, DarkCaramelSauce, WhiteMochaSauce, PumkinSpiceSauce, Sugar, RawSugar, Stevia, Splenda, 
    Honey, MatchaPowder, VanillaBeanPowder, FrapChips, DragonFruitInclusions, StrawberryInclusions, PineappleInclusions];


// loop through the customizations and create the settings
for (customization of customizations) {

    customization.loadSetting(customization);

}

// class that contains all the customizations for a given drink
class CustomizationHolder {

    // can pass in a map of default customizations 
    constructor(defaults) {

        // if the defaults are blank create a blank map
        if (defaults == undefined) {
            this.defaults = new Map();
        } else {
            this.defaults = defaults;
        }

        // create a blank map for the customizations
        this.customizations = new Map();

        // loop through the default values of the map and add them to the customizations
        for (customization of customizations) {

            this.customizations.push(customization.name, new customization());

        }

        // loop through the default values of the map and add them to the customizations
        for (key of this.defaults.getKeys()) {

            this.customizations.push(key, this.defaults.get(key));

        }

    }

    // add the customization to it's place in the map
    setCustomization(customization) {
        this.customizations.push(customization.name, customization);
    }

    // add the customization and add it to the defaults map aswell
    setDefaultCustomization(customization) {

        this.setCustomization(customization);
        this.defaults.push(customization.name, customization);

    }

    // get a customization
    getCustomization(customization) {

        return this.customizations.get(customization.name);

    }

    // get the default values
    getDefaults() {
        return this.defaults
    }

}